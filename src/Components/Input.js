import React,{useState,useEffect} from 'react';
import './input.css';
import axios from 'axios';

export default function Input(props) {
    const [textD, settextD] = useState(props.data);
    const value_setter = (e)=>{
        settextD(e.target.value);
    }
    const submit = async(e)=>{
        e.preventDefault();
        
        if(props.data===''){
            axios.post('http://localhost:5000/create',{
                textData:textD
            })
            .then((data)=>{
                console.log(data)
            })
            .catch((e)=>{
                console.log(e);
            })
        }
        else{
            axios.patch('http://localhost:5000/update_todo',{
                id:props.id,
                textData: textD
            })
            .then((data)=>{
                console.log(data);
            })
            .catch((e)=>{
                console.log(e);
            })
        }
        props.reset();
    }
    return(
        <div className="text_area">
                      
            <textarea defaultValue ={props.data}  onChange={value_setter} type="text" className="text_areaMod" rows="13" cols="40" ></textarea>
            <br></br>
            <button onClick={submit} className="button_text">{props.data==='' ? 'Send' : 'Update'}</button>
        </div>
    )
}
