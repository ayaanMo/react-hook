1. 比对原始写法以及和ReactHook区别;(提供的是一种函数组件)
2. ReactHook是React的新特性，而且要求React的版本必须是V16.8以上版本
3. 关键性属性：
   (1)useState;(用来可以定义state初始值,以及对应的setXXX方法,一般用数组解构(ES6)的写法)
    e.g:const [count,setCount] = useState(0);useState进行初始值赋值
   (2)useEffect;(初始用法可以比对componentDidMount,componentDidUpdate,也可以变通实现componentWillUnmount(卸载))
   useEffect是class里面的生命周期函数的合体,而且一个函数组件里面允许有多个useEffect方法的
    e.g:useEffect(fn,[]) 
        还可以进行解除副作用
        fn 里面可以写一堆实现方法,最后return 一个匿名函数可以进行解绑,[] 一般传state，用于来定义在什么时机来触发useEffect方法
   (3)useContext;(用于解决父子组件传值的问题)
   (4)useReducer;
   (5)useMemo(fn,[]);解决子组件重复执行,解决一些不必要的渲染，过去是在shouldUptateComponent去实现一些不必要的渲染,用来暂存变量
   (6)useCallback(fn,[]) 用来暂存函数;
   (7)useRef;
   (8)自定义函数;
   