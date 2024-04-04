import React from "react";
import './realTrick.css'
import { useState, useEffect } from "react";

export const RealTrick = (props) => {

    

    const prompts =["Pick a number between 1-10 (click me when ready)","Next, Multiply your number by 9 (click me when ready)","Add your first and second digit together (click me when ready)","Lastly, add 4 to your number", "HMMMMM", "I feel the number coming to me now...", "Is your number 13??!!"];
    const [prompt, setPrompt] = useState(0);

    function nextPrompt() {
        return new Promise(resolve => {
            setTimeout( function() {
                setPrompt((prev)=>prev+1);
                resolve('Done')
            },4000)
        })
    }
    

    async function handleClick(event) {
         if (prompt<2) {
            setPrompt((prev)=>prev+1)
         }
         else {
            setPrompt((prev)=>prev+1)
            await nextPrompt()
            await nextPrompt()
            await nextPrompt()
            await nextPrompt()
         }
    }


    return (
        <section class="containerflex" id="realtrick">
            <h4 onClick={handleClick}>{prompts[prompt]}</h4>
        </section>
    )
}