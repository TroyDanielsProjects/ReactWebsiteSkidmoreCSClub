import React, {useEffect, useState} from "react";
import './magic.css';
import { RealTrick } from "./realTrick";

export const Magic = (props) => {
    const changeDisplay = props.changeDisplay;
    const magicPromps =["Click to see a magic trick","Hi i'm magic Dave!!! Ready to be amazed.","Look, see that I'm here!!!","Now look im here!!","And now here!","Poof! Here I am.","See... transportation! amazing right!","Just kidding, now for the real trick!"];
    const [prompt, setPrompt]=  useState(0);
    const [display, setDisplay]=  useState("fake");

    function nextPrompt() {
        return new Promise(resolve => {
            setTimeout( function() {
                setPrompt((prev)=>prev+1);
                resolve('Done')
            },4000)
        })
    }
    
    function lastPrompt() {
        return new Promise(resolve => {
            setTimeout( function() {
                setDisplay("real")
                resolve('Done')
            },4000)
        })
    }

    const handleClick = async (event) => {
        const magicTrickBox = document.getElementById('magic')
        setPrompt((prev)=>prev+1);
        await nextPrompt()
        await nextPrompt()
        magicTrickBox.style.justifyContent = 'flex-start';
        magicTrickBox.style.top = '100px';
        await nextPrompt()
        magicTrickBox.style.justifyContent = 'flex-end';
        magicTrickBox.style.top = '250px';
        await nextPrompt()
        magicTrickBox.style.justifyContent = 'center';
        magicTrickBox.style.top = '80px';
        await nextPrompt()
        await nextPrompt()
        await lastPrompt()
    }

    return (
        <div className="magic" id='magic'>
            {display ==="fake"?prompt===0?<h4 onClick={handleClick}>{magicPromps[prompt]}</h4>:<h4>{magicPromps[prompt]}</h4>: <RealTrick />}
        </div>
    )
}