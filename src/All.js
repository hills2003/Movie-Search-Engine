import React,{useState ,useEffect} from 'react';
import "./index.css";
import ListItem from './ListItem';
function All({list}) {
    
    return (
        <div className="all">
            {
                list && list.map(item=>{
                    return(
                        <ListItem item={item} key={item.imdbID}/>
                    )
                })
            }
        </div>
    );
}

export default All;