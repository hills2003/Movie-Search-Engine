import React from 'react';
import "./index.css";
function ImageItem({imglist}) {
    return (
    
        <img src={imglist.Poster} alt={imglist.Title}/>
    );
}

export default ImageItem;