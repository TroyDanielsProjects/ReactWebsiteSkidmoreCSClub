import React, {useState, useEffect} from 'react';
import './meetingTimeComponent.css'
import x from '../../../x.svg'
export const Mission = (props) => {


    return props.show ==="mission"?(
        <div className='page'>
            <img src={x} alt='home' className='xSVG' onClick={() => props.changeShow("no show")}></img>
            <p>Our Mission: Beat Calvin at Chess</p>
        </div>
    ):null
 }