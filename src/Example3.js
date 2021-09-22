import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function Index() {
  /* useEffect(() => {
      //只要是state改变了都会触发useEffect以及解绑函数，
      //怎么能实现不能因为state的改变,导致我们的useEffect函数一直执行呢?来看我们useEffect的另外一个参数
    console.log("=>老弟,你来了啊！Index<=");
    return () => {
      console.log("=>老弟,你别走啊！路由已经被切换到List<=");
    };
  }); */
  useEffect(()=>{
    console.log("=>老弟,你来了啊！Index<=");
    return () =>{
        console.log("=>老弟,你别走啊！路由已经被切换到List<=");
    }
  },[])
  return <h2>IndexPage</h2>;
}
function List() {
  useEffect(() => {
    console.log("=>老弟,你来了啊！List<=");
  });
  return <h2>ListPage</h2>;
}
function Example3() {
  const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log(`You Clicked ${count} times`);
        return ()=>{
            console.log("已经触发解绑操作")
        }
    },[count])
  return (
    <div>
      <p>You Clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me!
      </button>
      <Router>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/List">列表</Link>
          </li>
        </ul>
        <Route exact path="/" component={Index} />
        <Route path="/List" component={List} />
      </Router>
    </div>
  );
}

export default Example3;
