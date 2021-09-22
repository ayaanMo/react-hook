import React, { Component,useState,useEffect } from 'react';

/* class Example2 extends Component {
    constructor(props) {
        super(props);
        this.state = {count:0};
    }
    componentDidMount() {
        console.log(`componentDidMount ${this.state.count}`);
    }
    componentDidUpdate(){
        console.log(`componentDidUpdate ${this.state.count}`);
    }
    render() {
        return (
            <div>
                <p>You Clicked {this.state.count} times</p>
                <button onClick={this.addCount.bind(this)}>Click Me!</button>
            </div>
        );
    }
    addCount(){
        this.setState({count:this.state.count+1})
        
    }
} */
function Example2(){
    const [count,setCount] = useState(0);
    //这个函数相当于componentDidMount与componentDidUpdate两个方法
    useEffect(()=>{
        console.log(`You Clicked ${count} times`)
    })
    return (
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>Click me!</button>
        </div>
    )
}
export default Example2;