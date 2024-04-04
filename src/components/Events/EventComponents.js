import React, {useState, useEffect} from 'react';
import './EventComponent.css'

export const Event = (props) => {
    return (
        <div className='event'>
            <div className='title'>
                <h2>{props.title}</h2>
            </div>
            <div className='photo'>
                <img src={props.photo} alt='' ></img>
            </div>
            <div className='date'>
                <p>Date: {props.date}({props.status})</p>
            </div>
            <div className='discription'>
                <p>{props.discription}</p>
            </div>
        </div>
    )
}