import React, { Component } from 'react';
import ShowArea from './ShowArea';
import Buttons from './Buttions';
import {Color} from './Color';
function SummaryInfomation(){
    return (
        <Color>
            <ShowArea/>
            <Buttons />
        </Color>
        )
}

export default SummaryInfomation;
