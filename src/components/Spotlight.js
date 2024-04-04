import React, {useState, useEffect} from 'react';
import {SpotlightComponent} from './spotlightComponent/spotlightComponent.js'
export const Spotlight = () => {

    const url = 'https://tdanielsskidmore.github.io/events/test.json';

    const [spotlight, setSpotlight] = useState([])

    const fetchData = () => {
        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setSpotlight(data[0].spotlight)
        })
    }

    useEffect(() => {
        fetchData()
    }, []);


    return (
        <div>
            {spotlight.length > 0 && (
                spotlight.map(obj => (
                    <SpotlightComponent title={obj.title} discription={obj.discription}/> 
                ))
            )}
        </div>
    )
}