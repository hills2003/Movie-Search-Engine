import React from 'react';
import "./index.css"
function ListItem({item}) {
    return (
        <div className='list'>
            <p>{item.Title}</p>
            <p>{item.Type}</p>
            <p>{item.Year}</p>
        </div>
    );
}

export default ListItem;