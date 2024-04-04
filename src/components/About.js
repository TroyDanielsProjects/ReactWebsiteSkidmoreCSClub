import React, {useState, useEffect} from 'react';
import './about.css'

export const About = () => {
    return (
        <div className='about'>
            <div className='whatIS'>
                <h3>What is Skidmore Codes?</h3> 
                <p>We are a Skidmore College club that is all about bringing technology entusatsts together in order to learn, share interests and create new inovations. All Skidmore students are welcome!</p>
                <h3>When do we meet?</h3>
                <p>Currently, we meet every Monday at 6:00pm in room CIS 237</p>
                <h3>What do we do in the club?</h3> 
                <p>Foremost the club is a space when students can come together and share common intrests in the tech world. We will have occasonal job workshops, facalty/alumni/peer presenations, projects, hackathons and much more! </p>
                <h3>What is our enviroment?</h3>
                <p>We demand that all club meetings are non-judgemental, non-discrimatory and is a space that fosters respect/consideration for all.</p>
                <h3>What is our mission?</h3>
                <p>To beat Calvin at chess</p>
            </div>
            <div className='board'>
                <h3>Board Members:</h3>
                <div className='members'>
                    <div className='names'>
                        <p>President: Kaelen Baird - kbaird@skidmore.edu</p>
                        <p>Treasurer: Tucker Coughlin-tcoughlin@skidmore.edu</p>
                    </div>
                    <div className='names'>
                        <p>Event coordinator: Troy Daniels - tdaniels@skidmore.edu</p>
                        <p>Public Relations: Kalvin Yang - kyang@skidmore.edu</p>
                    </div>
                </div>
            </div>
        </div>
    )
}