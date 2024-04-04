import React, {useState, useEffect} from 'react';
import './magicTrickComponent.css'
import { Magic } from './magic/magic';
import x from '../../../x.svg'
export const MagicTrick = (props) => {


    return props.show ==="magic"?(
        <div className='page'>
            <img src={x} alt='home' className='xSVG' onClick={() => props.changeShow("no show")}></img>
            <div>
                <Magic />
            </div>
        </div>
    ):null
 }