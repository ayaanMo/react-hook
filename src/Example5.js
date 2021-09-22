import React, { useReducer } from "react";
function Example5() {
  const [count,dispatch] = useReducer((state, action) => {
    switch (action) {
      case "plus":
        return state + 1;
      case "minus":
        return state - 1;
      case "reset":
        return 0;
      default:
        return state;
    }
  }, 0);
  return (
    <div>
      <p>当前数值为:{count}</p>
      <button onClick={()=>{dispatch('plus')}}>plus</button>
      <button onClick={()=>{dispatch('minus')}}>minus</button>
      <button onClick={()=>{dispatch('reset')}}>reset</button>
    </div>
  );
}
export default Example5;
