import React, {useState, useEffect} from 'react';
import './NewsTicker.css'
export const NewsTicker = () => {

    const url = 'https://tdanielsskidmore.github.io/events/test.json';

    const [news, setNews] = useState([])

    const fetchData = () => {
        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setNews(data[0].news)
        })
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className='news'>
            <ul className='scroll1'>
                <li className='lab'>Latest news:</li>
                {news.length > 0 && (
                    news.map(obj => (
                        <li>{obj}</li>
                    ))
                )}
            </ul>
        </div>
    )
}