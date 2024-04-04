import React, {useState, useEffect} from 'react';
import plus from '../../plus.svg';
import './spotlightComponent.css';
export const SpotlightComponent = (props) => {
    const [show, setShow] = useState(false);
    const onClick = () => {
        if (show){
            setShow(false)
        }
        else {
            setShow(true)
        }
    }

    useState(()=> {

    },[show])
    
    return (
        <div className='spotlight'>
            <div className='items'>
                <h4 className='titlespot'>{props.title}</h4>
                <img src={plus} alt='home' className='houseSVG' onClick={onClick}></img>
            </div>
            {show?<p className='discription'>{props.discription}</p>:null}
        </div>
    )
}