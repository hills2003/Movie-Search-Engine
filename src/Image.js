import React,{useEffect ,useState} from 'react';
import ImageItem from './ImageItem';
function Image({imglist}) {
   
    return (
        <div className="image">
           { 
           imglist && imglist.map(imgs=>{
               return(
                   <ImageItem key={imgs.imdbID} imglist={imgs}/>
               )
           })
           }  
        </div>
    );
}

export default Image;