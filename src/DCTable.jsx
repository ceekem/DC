import React from "react";
import { useEffect, useState} from "react";
import Moment from 'moment';
import {deleteDecision, getAllDecisions } from './Requests';

const DCTable = ({ tableData }) => {

    const [TableData, setTableData] = useState(tableData);

    useEffect(()=>{

    });


     useEffect(()=>{
        getAllDecisions().then(data =>{
            console.log(data);
            setTableData(data);
        })
     },[]);

    //   const deleteDecision = async(id) =>{
    //     await deleteDecision(id).then(data =>{
    //         console.log(data);
    //         setTableData(data);
    //     });

    // }

    return (
        <div className="formD">

            <h2 className="col-12">Saved Decision Results</h2>

            <table>
     <thead>          
        <tr>
            <th>Query Name</th>
            <th>Model</th>
            <th>Decision</th>
            <th>Date Created</th>
            <th>Delete</th>
        </tr>
    </thead> 
  
   <>
     <tbody>{

            TableData? (
                TableData.map((data)=>(
       
                    <tr>
                        <td key={data.name}>{data.name}</td>
                        <td key={data.model}>{data.model}</td>
                        <td key={data.decision}>{data.decision}</td>
                        <td key={data.data}>{Moment(data.date).format('MMMM Do YYYY, h:mm:ss a')}</td>
                        <td key='del' id="del" onClick={() =>{
                           
                           deleteDecision(data._id).then(newdata =>{
                            setTableData(newdata);
                           })
        
                            }}>Delete</td>
                    </tr>
                
            ))
            ) : (
                <h3>No Data</h3>
            )
        }
    
    </tbody>
    </>
  
  

</table>


        </div>
    )
}


export default DCTable;