import React from "react";
import "./InfoCard.scss";

const InfoCard = (props) => {
  const cardType = props.cardType;

  const weather = { ...props.weather };

  const clouds = weather.clouds;
  const wind = weather.wind;
  const humidity = weather.main.humidity;

  const weatherForecast = props.forecast;

  let output = [];

  weatherForecast.forEach((item) => {
    let existing = output.filter((v, i) => {
      return v.date == item.date;
    });

    if (existing.length) {
      let existingIndex = output.indexOf(existing[0]);
      output[existingIndex].temp = output[existingIndex].temp.concat(item.temp);
    } else {
      if (typeof item.temp == Number) {
        item.temp = [item.temp];
        output.push(item);
      }
    }
  });////这特么是鬼，用不了啊

  

 const clickHandler = (event) => {
    props.onSaveQuery(event.target.innerText);

    console.log(event.target.innerText);
 }



const alertHandler = () => {
  alert('There is nothing here. Stop clicking!')
}


  ///////////////////////////////////////////////////////////////////////

  let list = (
    <>
      <ul className="info-card__list">
        <li className="info-card__item">
          <a href="#" className="info-card__link" onClick={clickHandler}>
            Melbourne, AU
          </a>
        </li>
        <li className="info-card__item">
          <a href="#" className="info-card__link" onClick={clickHandler}>
            Sydney
          </a>
        </li>
        <li className="info-card__item">
          <a href="#" className="info-card__link" onClick={clickHandler}>
            Adelaide
          </a>
        </li>
        <li className="info-card__item">
          <a href="#" className="info-card__link" onClick={clickHandler}>
            Perth
          </a>
        </li>
      </ul>
    </>
  );

  if (cardType === "weather") {
    list = (
      <>
        <h3 className="info-card__title">
          Weather <span>Details</span>
        </h3>
        <ul className="info-card__list">
          <li className="info-card__item">
            <span className="info-card__item-name">Clouds</span>
            <span className="info-card__item-value">{clouds.all}%</span>
          </li>
          <li className="info-card__item">
            <span className="info-card__item-name">Humidity</span>
            <span className="info-card__item-value">{humidity}%</span>
          </li>
          <li className="info-card__item">
            <span className="info-card__item-name">Wind</span>
            <span className="info-card__item-value">{wind.speed}km/h</span>
          </li>
        </ul>
      </>
    );
  }

  if (cardType === "forecast") {
    list = (
      <>
        <h3 className="info-card__title">
          Next <span>Days</span>
        </h3>
        <ul className="info-card__list info-card__list--forecast">
          {weatherForecast.map((item, index) => {
            return (
              <li key={index} className="info-card__item info-card__item--forecast" onClick={alertHandler}>
                <span className="info-card__item-name">{item.date}</span>
                <span className="info-card__item-value">{item.temp}°</span>
              </li>
            );
          })}
        </ul>
      </>
    );
  }

  return <div className="info-card">{list}</div>;
};

export default InfoCard;
