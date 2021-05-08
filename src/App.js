import React,{useEffect , useState ,useContext} from 'react';
import Header from "./Header";
import All from "./All";
import four from "./four.jpg";
import {Switch} from "@material-ui/core";
import Image from "./Image";
import axios from 'axios';
function App(props) {
    const [valid,setValid]=useState(true);
    const [value,setValue]=useState('');
    const [list,setList]=useState([])
    const callfetch=(e)=>{
        e.preventDefault();
        axios(`https://www.omdbapi.com/?apikey=55bbac2b&s=${value}`)
        // .then(res=>res.json())
        .then(respond=>setList(respond.data.Search))
        .catch(err=>console.log(err))
    }
    return (
        <>
            <Header />
            <div className="center">
                <div className="input">
                    <form onSubmit={callfetch}>
                    <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}placeholder="search any movie" /><input type="submit" value="search" />
                
                    </form>
                </div>

               <div className='toolbar'>
               <input type='button' onClick={()=>setValid(true)} value='All' />
               <input type='button' onClick={()=>setValid(false)} value='Images' />
               </div>
                
                {valid ?
                    <All list={list}/> : <Image imglist={list}/>

                }
                
            </div>
        </>
    );
}

export default App;