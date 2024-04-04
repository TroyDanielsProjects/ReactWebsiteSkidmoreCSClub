import React, {useState, useEffect} from 'react';
import './login.css'
export const Login = (props) => {
    
    return (
        <div className='computer' style={{backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbrm0UliwQMCywi8OJmE5mpImYZnMY5iOxhQ&usqp=CAU)"}}>
            <form>
                <div className='enterBox'>
                    <label for='user'>Enter Username</label>
                    <input type={Text} value='Click' name='user' ></input>
                </div>
                <div className='enterBox'>
                    <label for='user'>Enter Password</label>
                    <input type={Text} value='Submit' name='user' ></input>
                </div>
                <div className='enterBox2'>
                    <button onClick={props.handleClick}>submit</button>
                </div>
            </form>
        </div>
    )
}