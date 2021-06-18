import React,{useState,useEffect} from 'react';
import './home.css';
import Input from './Input';
import Card from './card';
import axios from 'axios';

export default function Home() {
    const [togg,settogg] = useState(false);
    const dataF = async()=>{
        const res = await axios.get('http://localhost:5000/todos')
        setCD([]);
        setCD(res.data);
    }
    useEffect(()=>{
        dataF();
    },[])   

    const [textD,settextD] = useState('');
    const [id,setID] = useState('');
    const [cardData,setCD] = useState([]);
    
    const change_togg = ()=>{
        settogg(!togg);
        settextD('');
    }
    const change_Master = (val,data,id)=>{
        settogg(false);
        settogg(true);
        settextD('');
        settextD(data);
        setID(id);
    }
    const chch = async()=>{
        settogg(false);
        settextD('');
        dataF();
        dataF();
    }
    return(
        <div className="Main">
            <div className="center_box">
                <div className="containment">
                    <div className="create_name">
                        <button className="button" onClick={change_togg}>Create TODO</button>
                        <br></br>
                        <div className="cardMAKE">
                            {
                                cardData.length>0 ?
                                cardData.map((data,ind)=>{
                                    return <div key={ind}><Card reset={chch} show={change_Master} data={data.data} id={data._id} /><br></br></div>
                                })
                                : <p className="error">NO TODO's :(</p>
                            }
                        </div>
                    </div>
                    <div className="create_name_1">
                        <button className="button1">View</button>
                        {togg ? <Input reset={chch} data={textD} id={id} /> : 
                        <div>
                            <p className="text">Click on the Create TODO button to add a todo.</p>
                        </div>}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}