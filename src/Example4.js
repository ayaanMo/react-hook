import React, { useState,useContext,createContext } from 'react';

const CountContext = createContext();//相当于创建一个组件
function Counter(){
    let count = useContext(CountContext);
    return <h2>{count}</h2>
}
function Example4(){
    //CountContext.Provider相当于一个提供器
    const [count,setCount] = useState(0);
    return (
        <div>
        <p>You Clicked {count} times</p>
        <button onClick={()=>setCount(count+1)}>Click Me!</button>
        <CountContext.Provider value={count}>
        <Counter />
        </CountContext.Provider>
        </div>
    )
}
export default Example4;