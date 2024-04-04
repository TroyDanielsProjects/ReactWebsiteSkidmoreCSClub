import React, {useState, useEffect} from 'react';
import './Nav.css'
import house from '../../house.svg'
import event from '../../events.svg'
import spotlight from '../../spotlight.svg'
import about from '../../about.svg'
import { NavLink } from 'react-router-dom';


export const Nav = (props) => {

    return(
        <div className='navbar'>
            <div className='location'>
                <img src={house} alt='home' className='houseSVG'></img>
                <div><NavLink to='./' className='place'>Home</NavLink></div>
            </div>
            <div className='location'>
                <img src={event} alt='home' className='houseSVG'></img>
                <div><NavLink to='./Events' className='place'>Events</NavLink></div>
            </div>
            <div className='location'>
                <img src={spotlight} alt='home' className='houseSVG'></img>
                <div><NavLink to='./Spotlight' className='place'>Spotlight</NavLink></div>
            </div>
            <div className='location'>
                <img src={about} alt='home' className='houseSVG'></img>
                <div><NavLink to='./About' className='place'>About</NavLink></div>
            </div>
        </div>
    )
}