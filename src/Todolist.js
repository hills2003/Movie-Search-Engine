import React from 'react';
import Todoitems from "./Todoitems";
function Todolist({detail , handleclick , Delete}) {
    return (
        <div>
            {detail.map(lists=><Todoitems Delete={Delete} handleclick={handleclick} key={lists.id} items={lists}/>  
                    
            )}
        </div>
    );
}

export default Todolist;