import React, {useState, useEffect} from 'react';
import './home.css'
import './login.js'
import { Login } from './login.js';
import { TempPage } from './temp_page';
export const Computer = () => {
    
    const [displayLogin, setDisplayLogin] = useState(true);

    const handleClick = event => {
        event.preventDefault();
        setDisplayLogin(false)
    }

    useEffect(() => {
    
    },[displayLogin]);


    return (
        <div className='flex2'>
            <div className='flex'>
                <div className='outsideCom'>
                    {displayLogin?<Login handleClick={handleClick}/>:<TempPage/>}
                </div>
            </div>
            <div className='stand'>

            </div>
            <div className='base'>

            </div>
        </div>
    )
}