import React,{useContext} from 'react';
import {ColorContex} from './Color'
function ShowArea() {
    const {color} = useContext(ColorContex);
    return (
        <div style={{color:color}}>
          字体为{color}
        </div>
    )
}

export default ShowArea;
