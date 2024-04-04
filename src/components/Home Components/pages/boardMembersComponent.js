import React, {useState, useEffect} from 'react';
import './boardMembersComponent.css'
import x from '../../../x.svg'
export const BoardMembers = (props) => {


    return props.show ==="members"?(
        <div className='page'>
            <img src={x} alt='home' className='xSVG' onClick={() => props.changeShow("no show")}></img>
            <p>President: Kaelen Baird</p>
            <p>Vice President: Will</p>
            <p>Event coordinator: Troy Daniels</p>
            <p>Public Relations: Kalvin Yang</p>
            <p>Treasurer: Tucker Coughlin</p>
            <p>Another Position: Dylan</p>
        </div>
    ):null
 }