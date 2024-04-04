import React, {useState, useEffect} from 'react';
import {NameHeader} from './NameHeaderComponent/NameHeaderComponent'
import {Nav} from './NavComponent/Nav'
import { NewsTicker } from './NewTickerComponent/NewsTicker';

export const MainApp = (props) => {
    return (
        <div>
            <NameHeader/>
            <Nav/>
            <NewsTicker/>
        </div>
    )
}