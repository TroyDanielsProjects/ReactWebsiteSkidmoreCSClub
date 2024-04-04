import React, {useState, useEffect} from 'react';
import './systemInfoComponent.css'
import x from '../../../x.svg'
export const System = (props) => {


    return props.show ==="system"?(
        <div className='page'>
            <img src={x} alt='home' className='xSVG' onClick={() => props.changeShow("no show")}></img>
            <h1>SkidOS</h1>
            <p>Version 1.0</p>
            <p>Memory: 8 GB 3745 MHz LPDDR4X</p>
            <p>Startup Disk: Skidotosh HD</p>
            <p>Processor: Prasad A64 0.9 GHz Duel-Core i3</p>
            <p>Graphics: Intel Iris Plus Graphics 1536 MB</p>
            <p>Serial Number: SJ35J6NEA042HDN4</p>
        </div>
    ):null
 }