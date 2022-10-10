import React from "react";
import { useState } from "react";
import RangeSlider from 'react-bootstrap-range-slider';

import { decisionResult } from './Requests';
import { useForm } from "react-hook-form";

const DCForm = ({ model }) => {

    // console.log(model);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) =>{
        // console.log('DC: ', data);
        formData.data.attributes.input = data;

        // console.log(`my final form ${id}: `,formData);

        decisionResult(formData, id, modelData.name);
    } 

    const [formData, setFormData] = useState({
        data: {
            type: "scenario",
            attributes: {
                input: {}
            }
        }
    });
 

    const [valueTemp, setTempValue] = useState(1.0);
    const [finalTempValue, setFinalTempValue] = useState(1.0);

    const [valueAge, setAgeValue] = useState(1.0);
    const [finalAgeValue, setFinalAgeValue] = useState(1.0);

    const [valueNoOfDrinks, setNoOfDrinksValue] = useState(1.0);
    const [finalNoOfDrinksValue, setNoOfDrinksFinalValue] = useState(1.0);

    const [valueNoOfDrinksConsumedToday, setNoOfDrinksConsumedTodayValue] = useState(1.0);
    const [finalNoOfDrinksConsumedToday, setNoOfDrinksConsumedTodayFinalValue] = useState(1.0);


    let id = model.id;

    let modelData = model.attributes;
    let modelMetaQ = model.attributes.metadata.attributes;
    let modelDC = model.attributes.metadata.prediction;
    // console.log(id);



    return (
        <div className="formD">

            <h2 className="col-12">{modelData.name}</h2>

            <form className="container form" onSubmit={handleSubmit(onSubmit)}>

                <div className="row">
                    <div className="form col-6">



                                    <select id={modelDC.name} {...register("INPUTVAR0")}>
                                    <option defaultValue={modelDC.question}>-- {modelDC.question} --</option>
                                    {
                                        modelDC.domain.values.map(displayData => (
                                            <option key={displayData} value={displayData}>{displayData}</option>
                                        ))

                                    }
                                </select>
                              


                    </div>
                    <div className="form col-6">
                        <label htmlFor="temp">{modelMetaQ[0].question}</label>
                        <RangeSlider
                            id="temp"
                            {...register("INPUTVAR1")}
                            value={valueTemp} 
                            onChange={e => setTempValue(e.target.value)}
                            onAfterChange={e => setFinalTempValue(e.target.value)}
                            min={modelMetaQ[0].domain.lower} max={modelMetaQ[0].domain.upper}
                        />
                        <div>Temperature: {finalTempValue > 10.0 && finalTempValue <= 45.0 ? (

                            finalTempValue > 30.0 ? (
                                <p id="veryHot">Very Hot</p>
                            ) : (
                                <p id="hot">Hot</p>
                            )

                        ) : (

                            finalTempValue < 10.0 && finalTempValue > 2.0 ? (
                                <p id="warm">Warm</p>
                            ) : (
                                finalTempValue < 2.0 && finalTempValue > -5.0 ? (
                                    <p id="cold">cold</p>
                                ) : (
                                    <p id="veryCold">Very Cold</p>
                                )
                            )

                        )}</div>
                


                    </div>

                </div>

                <div className="row">
                    <div className="form col-6">

                        <select id={modelMetaQ[1].name} {...register("INPUTVAR2")}>
                            <option defaultValue={modelMetaQ[1].question}>-- {modelMetaQ[1].question} --</option>
                            {
                                modelMetaQ[1].domain.values.map(displayData => (
                                    <option key={displayData} value={displayData}>{displayData}</option>
                                ))

                            }
                        </select>


                    </div>

                    <div className="form col-6">

                        <label htmlFor="temp">{modelMetaQ[2].question}</label>
                        <RangeSlider
                            id="Age"
                            {...register("INPUTVAR3")}
                            value={valueAge}
                            onChange={e => setAgeValue(e.target.value)}
                            onAfterChange={e => setFinalAgeValue(e.target.value)}
                            min={modelMetaQ[2].domain.lower} max={modelMetaQ[2].domain.upper}
                        />
                        <div>Age: <span className="val">{finalAgeValue}</span></div>

                    </div>
                </div>


                <div className="row">
                    <div className="form col-6">

                        <select id={modelMetaQ[3].name} {...register("INPUTVAR4")}>
                            <option defaultValue={modelMetaQ[3].question}>-- {modelMetaQ[3].question} --</option>
                            {
                                modelMetaQ[3].domain.values.map(displayData => (
                                    <option key={displayData} value={displayData}>{displayData}</option>
                                ))

                            }
                        </select>


                    </div>

                    <div className="form col-6">

                        <select id={modelMetaQ[4].name} {...register("INPUTVAR5")}>
                            <option defaultValue={modelMetaQ[4].question}>-- {modelMetaQ[4].question} --</option>
                            {
                                modelMetaQ[4].domain.values.map(displayData => (
                                    <option key={displayData} value={displayData}>{displayData}</option>
                                ))

                            }
                        </select>


                    </div>

                </div>

                <div className="row">
                    <div className="form col-6">

                        <select id={modelMetaQ[5].name} {...register("INPUTVAR6")}>
                            <option defaultValue={modelMetaQ[5].question}>-- {modelMetaQ[5].question} --</option>
                            {
                                modelMetaQ[5].domain.values.map(displayData => (
                                    <option key={displayData} value={displayData}>{displayData}</option>
                                ))

                            }
                        </select>


                    </div>

                    <div className="form col-6">

                        <select id={modelMetaQ[6].name} {...register("INPUTVAR7")}>
                            <option defaultValue={modelMetaQ[6].question}>-- {modelMetaQ[6].question} --</option>
                            {
                                modelMetaQ[6].domain.values.map(displayData => (
                                    <option key={displayData} value={displayData}>{displayData}</option>
                                ))

                            }
                        </select>


                    </div>
                </div>


                <div className="row">
                    <div className="form col-6">

                    <label htmlFor="nod">{modelMetaQ[7].question}</label>
                        <RangeSlider
                            id="nod"
                            {...register("INPUTVAR8")}
                            value={valueNoOfDrinks}
                            onChange={e => setNoOfDrinksValue(e.target.value)}
                            onAfterChange={e => setNoOfDrinksFinalValue(e.target.value)}
                            min={modelMetaQ[7].domain.lower} max={modelMetaQ[7].domain.upper}
                        />
                        <div>No of drinks per Day: <span className="val">{finalNoOfDrinksValue}</span></div>


                    </div>

                    <div className="form col-6">

                    <label htmlFor="nodct">{modelMetaQ[8].question}</label>
                        <RangeSlider
                            id="nodct"
                            {...register("INPUTVAR9")}
                            value={valueNoOfDrinksConsumedToday}
                            onChange={e => setNoOfDrinksConsumedTodayValue(e.target.value)}
                            onAfterChange={e => setNoOfDrinksConsumedTodayFinalValue(e.target.value)}
                            min={modelMetaQ[8].domain.lower} max={modelMetaQ[8].domain.upper}
                        />
                        <div>No of drinks consumed today: <span className="val">{finalNoOfDrinksConsumedToday}</span></div>



                    </div>
                </div>

                <button className="btn">Submit</button>
            </form>





        </div>
    )
}


export default DCForm;