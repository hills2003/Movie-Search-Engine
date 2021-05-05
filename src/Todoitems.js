import React from 'react';
import "./index.css"
function Todoitems({items ,handleclick , Delete}) {
    return (
        <div className="todo-center">
                <div><input  type="checkbox" onChange={()=>handleclick(items.id)} checked={items.completed}/>{items.title}</div>
                <div><input className="button" onClick={()=>Delete(items.id)} type="submit" value="Delete" /></div>
        </div>
    );
}

export default Todoitems;