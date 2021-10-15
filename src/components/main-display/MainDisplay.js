import React from 'react';
import './MainDisplay.scss';
import LogoBox from '../logo/Logo';
import DisplayBar from './display-bar/DisplayBar';

const MainDisplay = (props) => {


    const weather = {...props.weather};

    return (
        <div className="main-display">
            <LogoBox />
            <DisplayBar weather={weather}/>
        </div>
    );
};

export default MainDisplay;