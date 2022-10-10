const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const Decision = require('./decision.model');
const bodyParser = require('body-parser');

const cors = require('cors');


// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());


//routes
app.get('/',async (req, res) =>{
    res.send('<h1>My Drink Choice backend</h1>');
});

app.post("/DC/decision", async (req, res) =>{
    console.log(req.body);
    const start = new Date().getTime()
    const decision = new Decision({
        name: req.body.name,
        model: req.body.model,
        decision: req.body.decision,
        date: start,
        data: req.body.data
    });

    // console.log(decision);
    try {
        decision.save().then(data =>{
            res.send(data);
        });

    } catch (err){
        console.log(err);
        res.json({message: err})
    }
});

app.get("/DC/getAllDecision", async (req, res)=>{
    try {
        
         await Decision.find().then(data =>{
            res.send(data);
        });

    } catch (err){
        res.json({message: err})
        console.error(err);
    }
});

app.get('/DC/:decisionId', async( req, res)=>{
    try{
        await Decision.findById(req.params.decisionId).then(data =>{
                res.json(data);
            });
    }catch(err){
        res.json({message: err})
    }
   
});

app.delete("/DC/:decisionId", async (req, res)=>{
    try{
        await Decision.findByIdAndDelete(req.params.decisionId).then(data =>{
            Decision.find().then(data =>{
                res.send(data);
            });
        });
    }catch(err){
        res.json({message: err})
        console.error(err);
    }
});


//Connect To DB

mongoose.connect(process.env.ConnectionString, {dbName: "DC"})
.then(()=>console.log("DB Connected"))
.catch((err)=>console.log(err))

app.listen(3001, ()=> console.log("Server ready"));