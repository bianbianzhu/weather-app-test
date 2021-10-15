import React from 'react';
import './SideInfo.scss';
import '../search-bar/SearchBox';
import SearchBox from '../search-bar/SearchBox';
import InfoCard from './info-card/InfoCard';

const SideInfo = (props) => {

    const weather = {...props.weather}; 

    const weatherForecast = props.forecast;


    const saveQueryHandler = (userInputQuery) => {
        props.onSaveQuery(userInputQuery);
    }

    return (
        <div className="side-info">
            <SearchBox onSaveQuery={saveQueryHandler}/>
            <InfoCard cardType="location" weather={weather} forecast={weatherForecast} onSaveQuery={saveQueryHandler}/>
            <InfoCard cardType="weather" weather={weather} forecast={weatherForecast} onSaveQuery={saveQueryHandler}/>
            <InfoCard cardType="forecast" weather={weather} forecast={weatherForecast} onSaveQuery={saveQueryHandler}/>
        </div>
    );
};

export default SideInfo;