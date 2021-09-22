import React, { createContext,useReducer } from 'react';

export const UPDATE_COLOR = "UPDATE_COLOR";

export const  ColorContex = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_COLOR:
            return action.color;
        default:
            return state;
    }
}
export  const Color = props=>{
    const [color,dispatch] = useReducer(reducer,"blue");
    return (
        <ColorContex.Provider value = {{color,dispatch}}>
            {props.children}
        </ColorContex.Provider>
    )
};
