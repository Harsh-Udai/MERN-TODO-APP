import React from 'react';
import './card.css';
import axios from 'axios';

export default function Card(props) {

    const ViewControl = (data,id)=>{
        props.show(true,data,id);
    }
    const DeleteControl = async(val)=>{
        axios.delete('http://localhost:5000/delete_todo',{
            data:{
                id:val
            }
        })
        .then((data)=>{
            console.log(data);
        })
        .catch((e)=>{
            console.log(e);
        })
        props.reset();
    }
    return(
        <div className="tiles">
            <div style={{textAlign:'left',padding:'5px',paddingLeft:'30px'}}>
                <p>{props.data.split(' ')[0]+'...'}</p>
            </div>
            <div className="viewD">
                <button className="button_D" onClick={()=>ViewControl(props.data,props.id)}>View</button>
                <button className="button_D" onClick={()=>DeleteControl(props.id)}>Delete</button>
            </div>
        </div>
    )
}