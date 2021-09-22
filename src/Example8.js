import React, { useRef,useState,useEffect } from "react";

function Example8() {
  const refInput = useRef(null);
  const clickInput = () => {
    console.log(refInput);
    refInput.current.focus();
    refInput.current.value = "我来了";
  };
  const changeInput=(e)=>{
    refInput.current.value = e.target.value;
  }
  const [text,setText] = useState("我在呢！！！")
  const refInputEl = useRef();
  useEffect(()=>{
    refInputEl.current= text;
    console.log("refInputEl.current:"+refInputEl.current);
  })
  return (
    <>
      <input ref={refInput} type="text" />
      <button onClick={clickInput}>获取文本框</button>
      <br/>
      <br/>
      <input type="text" onChange={changeInput}/>
      <br/>
      <br/>
      <input text="text" ref={refInputEl} value={text} onChange={(e)=>setText(e.target.value)}/>
    </>
  );
}

export default Example8;
