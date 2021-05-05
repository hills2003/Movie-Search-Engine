import React,{useState,useEffect} from "react";
import "./index.css";
import Todolist from "./Todolist";
import InputTodo from "./InputTodo";
import Axios from "axios";
function App() {

    const [it,setIt]=useState([]);
    const [details,setDetails]=useState(
      [{
        id:1,
        title:'hello',
        completed:false,
      },
      {
        id:2,
        title:'Good morning',
        completed:true,
      },
      {
        id:3,
        title:'how was your night',
        completed:false,
      }]
    )
    useEffect((e)=>{
      Axios.get("https://jsonplaceholder.typicode.com/todos",{
        params:{
          _limit:8
        }
      }).then(data => setDetails(data.data))
      .catch(err => console.log(err))
    },[])
  
   const handleclick = (id)=>{
     setDetails(
       details.map((data)=>{
         if(data.id === id){
           data.completed = !data.completed
         }
         return data
       })
     )
   }
   console.log(details)

   const Delete = (id)=>{
       setDetails([...details.filter(bits=>bits.id != id)])
       
   }

   const Adder=(value)=>{
     if (value){
     Axios.post("https://jsonplaceholder.typicode.com/todos",{
       data:{
         id:Math.round(Math.random() * 500),
         title:value,
         completed:false
       }
     }).then(msg=>setDetails([msg.data.data,...details]))
    }
    else{
      alert('input field is empty')
    }
   }

  return (
    <>
      <header className="header"> <p>Todo App</p></header>
    <div className="centered">
      <InputTodo Adder={Adder}/>
         <Todolist Delete ={Delete} handleclick={handleclick} detail={details} />
         
    </div>
    </>
  );
}

export default App;
