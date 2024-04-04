import React, {useState, useEffect} from 'react';
import { Event } from './EventComponents';

export const Events = () => {

    const url = 'https://tdanielsskidmore.github.io/events/test.json';

    const [events, setEvents] = useState([])

    const fetchData = () => {
        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setEvents(data[0].events)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])
    console.log(events)


    return (
        <div className='events '>
            {events.length > 0 && (
                events.map(event => (
                    <Event title={event.title} photo={event.photo} discription={event.discription} date={event.date} status={event.status}/>
                ))
            )}
        </div>
    )
}