import React from "react";
import { useState } from "react";
import RangeSlider from 'react-bootstrap-range-slider';

import { decisionResult } from './Requests';
import { useForm } from "react-hook-form";



const MonkForm = ({ model }) => {




    
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) =>{

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
 

    const [valueA, setAValue] = useState(1.0);
    const [finalAValue, setFinalAValue] = useState(1.0);

    const [valueB, setBValue] = useState(1.0);
    const [finalBValue, setFinalBValue] = useState(1.0);

    const [valueC, setCValue] = useState(1.0);
    const [finalCValue, setFinalCValue] = useState(1.0);

    
    const [valueD, setDValue] = useState(1.0);
    const [finalDValue, setFinalDValue] = useState(1.0);
    
    const [valueE, setEValue] = useState(1.0);
    const [finalEValue, setFinalEValue] = useState(1.0);
    
    const [valueF, setFValue] = useState(1.0);
    const [finalFValue, setFinalFValue] = useState(1.0);



    let id = model.id;
    let modelData = model.attributes;
    let modelMetaQ = model.attributes.metadata.attributes;
    let modelM = model.attributes.metadata.prediction;

    return (
        <div className="formD">

            <h2 className="col-12">{modelData.name}</h2>

            <form className="container form" onSubmit={handleSubmit(onSubmit)}>

                <div className="row">
                    <div className="form col-6">


                    <select id={modelM.name} {...register("INPUTVAR0")}>
                            <option defaultValue={modelM.question}>-- {modelM.question} --</option>
                            {
                                modelM.domain.values.map(displayData => (
                                    <option key={displayData} value={displayData}>{displayData}</option>
                                ))

                            }
                        </select>


                    </div>
                    <div className="form col-6">
                        <label htmlFor="INPUTVAR1">{modelMetaQ[0].question}</label>
                        <RangeSlider
                            id="INPUTVAR1"
                            {...register("INPUTVAR1")}
                            value={valueA} 
                            onChange={e => setAValue(e.target.value)}
                            onAfterChange={e => setFinalAValue(e.target.value)}
                            min={modelMetaQ[0].domain.lower} max={modelMetaQ[0].domain.upper}
                        />
                        <div>Value: <span className="val">{finalAValue}</span></div>
                


                    </div>

                </div>

                <div className="row">
                    <div className="form col-6">

                    <label htmlFor="INPUTVAR2">{modelMetaQ[1].question}</label>
                        <RangeSlider
                            id="INPUTVAR2"
                            {...register("INPUTVAR2")}
                            value={valueB} 
                            onChange={e => setBValue(e.target.value)}
                            onAfterChange={e => setFinalBValue(e.target.value)}
                            min={modelMetaQ[1].domain.lower} max={modelMetaQ[1].domain.upper}
                        />
                        <div>Value: <span className="val">{finalBValue}</span></div>


                    </div>

                    <div className="form col-6">

                        <label htmlFor="INPUTVAR3">{modelMetaQ[2].question}</label>
                        <RangeSlider
                            id="INPUTVAR3"
                            {...register("INPUTVAR3")}
                            value={valueC}
                            onChange={e => setCValue(e.target.value)}
                            onAfterChange={e => setFinalCValue(e.target.value)}
                            min={modelMetaQ[2].domain.lower} max={modelMetaQ[2].domain.upper}
                        />
                        <div>Value: <span className="val">{finalCValue}</span></div>

                    </div>
                </div>


                <div className="row">
                    <div className="form col-6">

                        
                    <label htmlFor="INPUTVAR4">{modelMetaQ[3].question}</label>
                        <RangeSlider
                            id="INPUTVAR4"
                            {...register("INPUTVAR4")}
                            value={valueD}
                            onChange={e => setDValue(e.target.value)}
                            onAfterChange={e => setFinalDValue(e.target.value)}
                            min={modelMetaQ[3].domain.lower} max={modelMetaQ[3].domain.upper}
                        />
                        <div>Value: <span className="val">{finalDValue}</span></div>


                    </div>

                    <div className="form col-6">

                    <label htmlFor="INPUTVAR5">{modelMetaQ[4].question}</label>
                        <RangeSlider
                            id="INPUTVAR5"
                            {...register("INPUTVAR5")}
                            value={valueE}
                            onChange={e => setEValue(e.target.value)}
                            onAfterChange={e => setFinalEValue(e.target.value)}
                            min={modelMetaQ[4].domain.lower} max={modelMetaQ[4].domain.upper}
                        />
                        <div>Value: <span className="val">{finalEValue}</span></div>


                    </div>

                </div>

                <div className="row">
                    <div className="form col-6">

                    <label htmlFor="INPUTVAR6">{modelMetaQ[5].question}</label>
                        <RangeSlider
                            id="INPUTVAR6"
                            {...register("INPUTVAR6")}
                            value={valueF}
                            onChange={e => setFValue(e.target.value)}
                            onAfterChange={e => setFinalFValue(e.target.value)}
                            min={modelMetaQ[5].domain.lower} max={modelMetaQ[5].domain.upper}
                        />
                        <div>Value: <span className="val">{finalFValue}</span></div>

                    </div>

                    <div className="form col-6">



                    </div>
                </div>


                <button className="btn">Submit</button>
            </form>





        </div>
    )
}


export default MonkForm;