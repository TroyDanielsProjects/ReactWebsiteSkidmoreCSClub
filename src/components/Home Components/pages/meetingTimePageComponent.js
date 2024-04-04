import React, {useState, useEffect} from 'react';
import './meetingTimeComponent.css'
import x from '../../../x.svg'
export const MeetingTimes = (props) => {


    return props.show ==="times"?(
        <div className='page'>
            <img src={x} alt='home' className='xSVG' onClick={() => props.changeShow("no show")}></img>
            <p>Meeting Time: The club meets every Monday at 6:00pm.</p>
            <p>Location: Center for Integrated Sciences | Room 237 </p>
        </div>
    ):null
 }