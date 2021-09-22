import React, { Component, useState } from "react";

/*  class Example1 extends Component{
    constructor(props){
        super(props);
        this.state = {count:0};
    }
    render(){
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={this.addCount.bind(this)}>Click me!</button>
            </div>
        )
    }
    addCount(){
        this.setState({count:this.state.count+1});
    }
} */
/* function Example1() {
  const [count, setCount] = useState(0); //数组解构
  //上面的写法等同于下面写法
  // let _useState = useState(0);
  // let count  = _useState[0];
  // let setCount = _useState[1]; 
  return (
    <div>
      <p>You Clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me!
      </button>
    </div>
  );
} */
//let showName = true;// React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render
/* function Example1(){
  const [name,setName] = useState("Lisa");
  //if(showName){
    const [sex,setSex] = useState("女");
  //}
  const [work,setWork] = useState("前端程序员")
  return (
    <div>
      <p>姓名:{name}</p>
      <p>性别:{sex}</p>
      <p>工作:{work}</p>
    </div>
  )
}
export default Example1; */
