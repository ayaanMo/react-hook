import React,{useContext} from 'react';
import {ColorContex,UPDATE_COLOR} from './Color'
function Buttons() {
  const {dispatch} = useContext(ColorContex);
    return (
        <div>
          <button onClick={()=>{dispatch({type:UPDATE_COLOR,color:"blue"})}}>重置</button>
          <button onClick={()=>{dispatch({type:UPDATE_COLOR,color:"red"})}}>红色</button>
          <button onClick={()=>{dispatch({type:UPDATE_COLOR,color:"yellow"})}}>黄色</button>
        </div>
    )
}

export default Buttons;
