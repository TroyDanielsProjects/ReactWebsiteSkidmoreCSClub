import React, {useState, useEffect} from 'react';
import './RiddleMessageComponent.css'
import x from '../../../x.svg'
export const Riddle = (props) => {
    const url = 'https://tdanielsskidmore.github.io/events/test.json';

    const [riddle, setRiddle] = useState([])

    const fetchData = () => {
        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setRiddle(data[0].riddle)
        })
    }

    useEffect(() => {
        fetchData()
    }, []);



    if (props.show ==="riddle"){
        return (
            <div className='page'>
                <img src={x} alt='home' className='xSVG' onClick={() => props.changeShow("no show")}></img>
                <h1>Welcome to the current Riddle</h1>
                <p> Solve the Riddle and be the first to say the answer in the Discord and win a Prize!!!</p>
                <button onClick={()=> props.changeShow("riddleMessage")}>Continue</button>
            </div>
        )
    }
    else if (props.show === "riddleMessage"){
        return (
            <div className='page'>
                <img src={x} alt='home' className='xSVG' onClick={() => props.changeShow("no show")}></img>
                <h1>The Riddle</h1>
                {riddle.length > 0 && (
                    riddle.map(obj => (
                        <h3>{obj}</h3>
                    ))
                )}
            </div>
        )
    }
 }