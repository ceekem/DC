import React from 'react';
import { useEffect, useState } from "react";
import './App.css';
import DCForm from './DCForm';
import MonkForm from './MonkForm';
import { models, filterModel, getAllDecisions} from './Requests';
import 'bootstrap/dist/css/bootstrap.min.css';
import BSForm from './BSForm';
import DCTable from './DCTable';


function App() {


 

    const [Model, setModel] = useState('empty');
    const [Models, setModels] = useState([]);
    const [table, setTable] = useState(false);
    const [allDecisions, setAllDecisions] = useState([]);

   const getModel = async (id)=>{ 
       setTable(false);
          getAllModels();
               return await filterModel(id).then((model) =>{
                     setModel(model[0]);  
                }); 
            }
 
            
    const getAllModels = async () =>{
           const resp = await models().then( (models) =>{
                    // console.log(models);
            return models;
          });        
          setModels(resp.data); 
        //   console.log(Models); 
        }
     
        
        

        const getAllDecision = async() =>{
            await getAllDecisions().then(data =>{
                setAllDecisions(data);
            },err =>{
                console.error(err);
                console.log(err);
            });
        }


 useEffect(()=>{ 
    
    // console.log("effect");
    getAllDecision();
    getAllModels();

  }, []);   


  return (
      <div className="App">
         <div className='res'>
            <div className='row mag'>
              <div className='col-12'>
                <h2 className='head'>Select a Model</h2>
                <ul className='menu-bar'>
                    {
                        Model !== 'empty'? (
                            <> 
                                
                                {Models.map((models)=>(
                            
                                    <li className='font' key={models.id} onClick={()=>{getModel(models.id)}}>{models.attributes.name}</li> 
                                    
                                )) }
                                <li className='font' onClick={() => {
                                    getAllDecision();
                                    setTable(true); 
                                }}>Saved Decision Results</li>
                            </>
                        ) :
                        (
                            <></>
                        )
                       
                    } 
                </ul>
  


              </div>

                
                   {
                    table === true ? (
                        <DCTable tableData={allDecisions}></DCTable>  
                         ): (

                    Model === 'empty'? ( 
                    <ul className='menu-bar'>
                        {Models.map((models)=>(
                        
                            <li key={models.id} onClick={()=>{getModel(models.id)}}>{models.attributes.name}</li> 
                         
                    ))}
                   
                    </ul>
                    ) : (

                        Model.id === '58d3bcf97c6b1644db73ad12' || Model.id === '5a8e7a36c627fb0007dd7249' ? (
                             <DCForm className='col-12' model={Model}></DCForm>
                        ) : 
                       Model.id === '58d3bcf97c6b1644db73acfe'? (
                             <MonkForm className='col-12' model={Model}></MonkForm>
                       ) : Model.id === '58d3bcf97c6b1644db73ad0c'? (
                             <BSForm className='col-12' model={Model}></BSForm>
                       ) : (
                        <h2>Form Coming Soon!</h2>
                       )


                        
                        
                    )

                    
                        
  )
                   }
                                     
              
          </div>
         </div>
          
      </div>
  );
}

export default App;
