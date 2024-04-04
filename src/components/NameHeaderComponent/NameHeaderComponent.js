
import React, {useState, useEffect} from 'react';
import './NameHeaderComponent.css'


export const NameHeader = (props) => {
    let name= ["S","K","I","D","M","O","R","E"," ","C","O","D","E","S"," ","C","L","U","B"]
    let nameToAdd =[]
    const [currentLetter,SetCurrentLetter] = useState(0);
    name.forEach((letter)=> {
        nameToAdd.push(<h2 className='letter'>{letter}</h2>)
    })

    const randomRGB = () => {
        return (Math.floor(Math.random()*256));
    }


    function keepChangingColor(index) {
        let red = randomRGB().toString();
        let green = randomRGB().toString();
        let blue = randomRGB().toString();
        document.getElementsByClassName("letter")[index].style.color = 'rgb('+red+', '+green+', '+blue+')';
    }

    function resetToWhite(i){
        document.getElementsByClassName("letter")[i].style.color = 'white';
    }
   

    React.useEffect(() => {
        let intervals =[]
        setInterval(()=>{
            for (let i = 0;i<name.length;i++){
                let intervalID = setInterval(()=>{
                    keepChangingColor(i);
                },300+(i*40));
                intervals.push(intervalID)
            }
            for (let i = 0;i<name.length;i++){
                setTimeout(()=>{
                    clearInterval(intervals[i])
                },500+(i*40))
            }
            setTimeout(()=>{
                intervals =[]
            },520+(name.length*40))
            
            for (let i = 0;i<name.length;i++){
                setTimeout(()=>{
                    resetToWhite(i)
                },800+(i*40));
            }
        },7500)
        

    },[currentLetter])


    return (
        <div className='flexBox'>
            {nameToAdd}
        </div>
    )
    
}