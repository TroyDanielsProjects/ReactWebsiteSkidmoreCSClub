import React, {useState, useEffect} from 'react';
import './meetingTimeComponent.css'
import x from '../../../x.svg'
export const Resources = (props) => {


    return props.show ==="resources"?(
        <div className='page'>
            <img src={x} alt='home' className='xSVG' onClick={() => props.changeShow("no show")}></img>
            <p>Resources:</p>
        </div>
    ):null
 }