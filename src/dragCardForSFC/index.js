/* 
目标：
    1.展示父级卡片
    2.点击父级卡片展示子卡片或者收起
    3.拖动子卡片更换位置
*/
import React, { useState, useEffect,useReducer } from "react";
import Datas from "./data";
import { v4 as uuidv4 } from "uuid";

function Cards() {
  const [cardData, setCardData] = useState([]);
  const [showChildCard,setShowChildCard] = useState(false);
  useEffect(()=>{
    setCardData(Datas);
  },[])
  return (
    <div>
      {cardData.map((item, index) => {
        return (
          <div key={uuidv4()} style={{border:'1px solid black',width:"20%",height:"50px",cursor:"pointer"}}>
            <p style={{color:"red",fontSize:"14px",margin:"4px 0px 3px 25px"}}>编码:{item.code}</p>
            <p style={{fontSize:"14px",margin:"4px 0px 3px 10px"}}>名称:{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
