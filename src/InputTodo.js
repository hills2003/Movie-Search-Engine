import React,{useState} from 'react';
import "./index.css"
function Inputtodo({Adder}) {

    const [value,setValue] =useState(null);

    const AdderFunction =(e)=>{
        e.preventDefault();
        Adder(value)
        setValue('')
    }
    return (
        <form onSubmit={AdderFunction}>
            <div clasName="input">
            <input className="space"type='text' value={value} onChange={(e)=>setValue(e.target.value)} placeholder="Add todos" />
            <input className="add" type="submit" value="Add" />
        </div>
        </form>
        
    );
}

export default Inputtodo;