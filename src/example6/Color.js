import React,{createContext,useReducer} from 'react';


export const ColorContext = createContext();

export const UPDATE_COLOR = "UPADATE_COLOR"

const reducer = (state,action)=>{
    switch(action.type){
        case UPDATE_COLOR:
         return action.color;
         default:
            return 'blue';
    }
}

export const Color = props => {
    const [color,dispatch] = useReducer(reducer,'blue')
    return (
        <ColorContext.Provider value = {{color,dispatch}}>
            {props.children}
        </ColorContext.Provider>
    )
}