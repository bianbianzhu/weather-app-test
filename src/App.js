import { useEffect, useRef, useState } from "react/cjs/react.development";
import "./App.scss";
import MainDisplay from "./components/main-display/MainDisplay";
import SideInfo from "./components/side-info/SideInfo";

const apiURL = {
  key: "e315815f8cf27b73a71dcf11b0c46fdc",
  base: "https://api.openweathermap.org/data/2.5/",
  forecast: "http://api.openweathermap.org/data/2.5/forecast?q=",
};

function App() {
  const [query, setQuery] = useState("melbourne,AU");
  const [weather, setWeather] = useState({
    weather: [
      { id: 802, main: "Clouds", description: "scattered clouds", icon: "03n" },
    ],
    base: "stations",
    main: {
      temp: 0,
      feels_like: 299.8,
      temp_min: 296.46,
      temp_max: 300.4,
      pressure: 1014,
      humidity: 87,
    },
    visibility: 10000,
    wind: { speed: 0.45, deg: 202, gust: 1.34 },
    clouds: { all: 40 },
    dt: 1630991320,
    sys: {
      type: 2,
      id: 2007578,
      country: "AU",
      sunrise: 1631012646,
      sunset: 1631057820,
    },
    timezone: -14400,
    id: 4163971,
    name: "Melbourne",
    cod: 200,
  }); //how to set up a default value?????

  const [forecast, setForecast] = useState({
    cod: "200",
    message: 0,
    cnt: 40,
    list: [
      {
        dt: 1631005200,
        main: {
          temp: 13.07,
          feels_like: 12.6,
          temp_min: 11.68,
          temp_max: 13.07,
          pressure: 1028,
          sea_level: 1028,
          grnd_level: 1029,
          humidity: 83,
          temp_kf: 1.39,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n",
          },
        ],
        clouds: { all: 75 },
        wind: { speed: 3.04, deg: 192, gust: 6.85 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2021-09-07 09:00:00",
      },
      {
        dt: 1631016000,
        main: {
          temp: 12.23,
          feels_like: 11.65,
          temp_min: 10.56,
          temp_max: 12.23,
          pressure: 1029,
          sea_level: 1029,
          grnd_level: 1029,
          humidity: 82,
          temp_kf: 1.67,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n",
          },
        ],
        clouds: { all: 82 },
        wind: { speed: 1.38, deg: 278, gust: 1.93 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2021-09-07 12:00:00",
      },
      {
        dt: 1631026800,
        main: {
          temp: 9.98,
          feels_like: 9.41,
          temp_min: 8.43,
          temp_max: 9.98,
          pressure: 1031,
          sea_level: 1031,
          grnd_level: 1028,
          humidity: 87,
          temp_kf: 1.55,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n",
          },
        ],
        clouds: { all: 52 },
        wind: { speed: 1.72, deg: 297, gust: 1.99 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2021-09-07 15:00:00",
      },
      {
        dt: 1631037600,
        main: {
          temp: 7.49,
          feels_like: 6.29,
          temp_min: 7.49,
          temp_max: 7.49,
          pressure: 1031,
          sea_level: 1031,
          grnd_level: 1027,
          humidity: 88,
          temp_kf: 0,
        },
        weather: [
          { id: 801, main: "Clouds", description: "few clouds", icon: "02n" },
        ],
        clouds: { all: 23 },
        wind: { speed: 1.98, deg: 324, gust: 2.65 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2021-09-07 18:00:00",
      },
      {
        dt: 1631048400,
        main: {
          temp: 7.01,
          feels_like: 5.54,
          temp_min: 7.01,
          temp_max: 7.01,
          pressure: 1031,
          sea_level: 1031,
          grnd_level: 1028,
          humidity: 88,
          temp_kf: 0,
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
        clouds: { all: 0 },
        wind: { speed: 2.19, deg: 351, gust: 3.28 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-09-07 21:00:00",
      },
      {
        dt: 1631059200,
        main: {
          temp: 12.91,
          feels_like: 11.82,
          temp_min: 12.91,
          temp_max: 12.91,
          pressure: 1031,
          sea_level: 1031,
          grnd_level: 1027,
          humidity: 60,
          temp_kf: 0,
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
        clouds: { all: 4 },
        wind: { speed: 2.4, deg: 329, gust: 3.97 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-09-08 00:00:00",
      },
      {
        dt: 1631070000,
        main: {
          temp: 17.3,
          feels_like: 16.23,
          temp_min: 17.3,
          temp_max: 17.3,
          pressure: 1028,
          sea_level: 1028,
          grnd_level: 1025,
          humidity: 44,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        clouds: { all: 43 },
        wind: { speed: 1.42, deg: 298, gust: 3.45 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-09-08 03:00:00",
      },
      {
        dt: 1631080800,
        main: {
          temp: 18.23,
          feels_like: 17.34,
          temp_min: 18.23,
          temp_max: 18.23,
          pressure: 1027,
          sea_level: 1027,
          grnd_level: 1023,
          humidity: 47,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        clouds: { all: 44 },
        wind: { speed: 1.92, deg: 320, gust: 3.87 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-09-08 06:00:00",
      },
      {
        dt: 1631091600,
        main: {
          temp: 14.04,
          feels_like: 13.22,
          temp_min: 14.04,
          temp_max: 14.04,
          pressure: 1027,
          sea_level: 1027,
          grnd_level: 1024,
          humidity: 66,
          temp_kf: 0,
        },
        weather: [
          { id: 801, main: "Clouds", description: "few clouds", icon: "02n" },
        ],
        clouds: { all: 18 },
        wind: { speed: 3.59, deg: 345, gust: 8.51 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2021-09-08 09:00:00",
      },
      {
        dt: 1631102400,
        main: {
          temp: 12.02,
          feels_like: 11.24,
          temp_min: 12.02,
          temp_max: 12.02,
          pressure: 1027,
          sea_level: 1027,
          grnd_level: 1024,
          humidity: 75,
          temp_kf: 0,
        },
        weather: [
          { id: 801, main: "Clouds", description: "few clouds", icon: "02n" },
        ],
        clouds: { all: 11 },
        wind: { speed: 4.6, deg: 359, gust: 10.71 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2021-09-08 12:00:00",
      },
      {
        dt: 1631113200,
        main: {
          temp: 11.61,
          feels_like: 10.71,
          temp_min: 11.61,
          temp_max: 11.61,
          pressure: 1026,
          sea_level: 1026,
          grnd_level: 1022,
          humidity: 72,
          temp_kf: 0,
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
        ],
        clouds: { all: 4 },
        wind: { speed: 5.57, deg: 357, gust: 13.07 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2021-09-08 15:00:00",
      },
      {
        dt: 1631124000,
        main: {
          temp: 11.11,
          feels_like: 10.16,
          temp_min: 11.11,
          temp_max: 11.11,
          pressure: 1024,
          sea_level: 1024,
          grnd_level: 1021,
          humidity: 72,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03n",
          },
        ],
        clouds: { all: 47 },
        wind: { speed: 6.78, deg: 0, gust: 15.07 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2021-09-08 18:00:00",
      },
      {
        dt: 1631134800,
        main: {
          temp: 11.1,
          feels_like: 10.09,
          temp_min: 11.1,
          temp_max: 11.1,
          pressure: 1024,
          sea_level: 1024,
          grnd_level: 1021,
          humidity: 70,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: { all: 100 },
        wind: { speed: 7.36, deg: 358, gust: 16.69 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-09-08 21:00:00",
      },
      {
        dt: 1631145600,
        main: {
          temp: 15.47,
          feels_like: 14.56,
          temp_min: 15.47,
          temp_max: 15.47,
          pressure: 1023,
          sea_level: 1023,
          grnd_level: 1020,
          humidity: 57,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: { all: 100 },
        wind: { speed: 7.5, deg: 349, gust: 16.16 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-09-09 00:00:00",
      },
      {
        dt: 1631156400,
        main: {
          temp: 20.28,
          feels_like: 19.54,
          temp_min: 20.28,
          temp_max: 20.28,
          pressure: 1021,
          sea_level: 1021,
          grnd_level: 1017,
          humidity: 45,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: { all: 100 },
        wind: { speed: 7.13, deg: 334, gust: 13.9 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-09-09 03:00:00",
      },
      {
        dt: 1631167200,
        main: {
          temp: 20.65,
          feels_like: 19.92,
          temp_min: 20.65,
          temp_max: 20.65,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 1015,
          humidity: 44,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: { all: 100 },
        wind: { speed: 6.45, deg: 324, gust: 14.75 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-09-09 06:00:00",
      },
      {
        dt: 1631178000,
        main: {
          temp: 18.88,
          feels_like: 17.87,
          temp_min: 18.88,
          temp_max: 18.88,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 1015,
          humidity: 40,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: { all: 100 },
        wind: { speed: 5.85, deg: 308, gust: 13.08 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2021-09-09 09:00:00",
      },
      {
        dt: 1631188800,
        main: {
          temp: 16.51,
          feels_like: 15.39,
          temp_min: 16.51,
          temp_max: 16.51,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 1017,
          humidity: 45,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: { all: 100 },
        wind: { speed: 4.23, deg: 274, gust: 10.59 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2021-09-09 12:00:00",
      },
      {
        dt: 1631199600,
        main: {
          temp: 13.73,
          feels_like: 12.73,
          temp_min: 13.73,
          temp_max: 13.73,
          pressure: 1021,
          sea_level: 1021,
          grnd_level: 1017,
          humidity: 60,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: { all: 100 },
        wind: { speed: 1.33, deg: 261, gust: 2.37 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2021-09-09 15:00:00",
      },
      {
        dt: 1631210400,
        main: {
          temp: 12.58,
          feels_like: 11.72,
          temp_min: 12.58,
          temp_max: 12.58,
          pressure: 1021,
          sea_level: 1021,
          grnd_level: 1017,
          humidity: 70,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: { all: 100 },
        wind: { speed: 1.1, deg: 301, gust: 1.83 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2021-09-09 18:00:00",
      },
      {
        dt: 1631221200,
        main: {
          temp: 12.12,
          feels_like: 11.27,
          temp_min: 12.12,
          temp_max: 12.12,
          pressure: 1022,
          sea_level: 1022,
          grnd_level: 1018,
          humidity: 72,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: { all: 100 },
        wind: { speed: 1.18, deg: 341, gust: 1.85 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-09-09 21:00:00",
      },
      {
        dt: 1631232000,
        main: {
          temp: 15.75,
          feels_like: 14.87,
          temp_min: 15.75,
          temp_max: 15.75,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 1016,
          humidity: 57,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: { all: 100 },
        wind: { speed: 2.99, deg: 5, gust: 5.16 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-09-10 00:00:00",
      },
      {
        dt: 1631242800,
        main: {
          temp: 19.96,
          feels_like: 19.24,
          temp_min: 19.96,
          temp_max: 19.96,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 1014,
          humidity: 47,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: { all: 100 },
        wind: { speed: 4.77, deg: 343, gust: 8.31 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-09-10 03:00:00",
      },
      {
        dt: 1631253600,
        main: {
          temp: 20.8,
          feels_like: 20.14,
          temp_min: 20.8,
          temp_max: 20.8,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1012,
          humidity: 46,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: { all: 97 },
        wind: { speed: 5.64, deg: 352, gust: 10.06 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-09-10 06:00:00",
      },
      {
        dt: 1631264400,
        main: {
          temp: 18.17,
          feels_like: 17.37,
          temp_min: 18.17,
          temp_max: 18.17,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 1010,
          humidity: 51,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: { all: 94 },
        wind: { speed: 5.71, deg: 4, gust: 13.75 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2021-09-10 09:00:00",
      },
      {
        dt: 1631275200,
        main: {
          temp: 17.3,
          feels_like: 16.39,
          temp_min: 17.3,
          temp_max: 17.3,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1009,
          humidity: 50,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: { all: 89 },
        wind: { speed: 5.9, deg: 348, gust: 14.88 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2021-09-10 12:00:00",
      },
      {
        dt: 1631286000,
        main: {
          temp: 16.25,
          feels_like: 15.29,
          temp_min: 16.25,
          temp_max: 16.25,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1007,
          humidity: 52,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: { all: 100 },
        wind: { speed: 5.8, deg: 346, gust: 15.07 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2021-09-10 15:00:00",
      },
      {
        dt: 1631296800,
        main: {
          temp: 14.9,
          feels_like: 13.7,
          temp_min: 14.9,
          temp_max: 14.9,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 1006,
          humidity: 48,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: { all: 100 },
        wind: { speed: 5.33, deg: 345, gust: 12.39 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2021-09-10 18:00:00",
      },
      {
        dt: 1631307600,
        main: {
          temp: 13.05,
          feels_like: 11.85,
          temp_min: 13.05,
          temp_max: 13.05,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1007,
          humidity: 55,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: { all: 100 },
        wind: { speed: 4.95, deg: 351, gust: 10.12 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-09-10 21:00:00",
      },
      {
        dt: 1631318400,
        main: {
          temp: 16.48,
          feels_like: 15.59,
          temp_min: 16.48,
          temp_max: 16.48,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 1007,
          humidity: 54,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: { all: 100 },
        wind: { speed: 4.55, deg: 343, gust: 8.11 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-09-11 00:00:00",
      },
      {
        dt: 1631329200,
        main: {
          temp: 21.01,
          feels_like: 20.42,
          temp_min: 21.01,
          temp_max: 21.01,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 1003,
          humidity: 48,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
        clouds: { all: 67 },
        wind: { speed: 6.88, deg: 329, gust: 15.47 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-09-11 03:00:00",
      },
      {
        dt: 1631340000,
        main: {
          temp: 20.47,
          feels_like: 19.98,
          temp_min: 20.47,
          temp_max: 20.47,
          pressure: 1004,
          sea_level: 1004,
          grnd_level: 1000,
          humidity: 54,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
        clouds: { all: 73 },
        wind: { speed: 5.97, deg: 323, gust: 13.67 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-09-11 06:00:00",
      },
      {
        dt: 1631350800,
        main: {
          temp: 14.64,
          feels_like: 14.35,
          temp_min: 14.64,
          temp_max: 14.64,
          pressure: 1004,
          sea_level: 1004,
          grnd_level: 1001,
          humidity: 84,
          temp_kf: 0,
        },
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10n" },
        ],
        clouds: { all: 100 },
        wind: { speed: 4.75, deg: 251, gust: 10.46 },
        visibility: 10000,
        pop: 0.65,
        rain: { "3h": 1.87 },
        sys: { pod: "n" },
        dt_txt: "2021-09-11 09:00:00",
      },
      {
        dt: 1631361600,
        main: {
          temp: 12.15,
          feels_like: 11.67,
          temp_min: 12.15,
          temp_max: 12.15,
          pressure: 1004,
          sea_level: 1004,
          grnd_level: 1001,
          humidity: 86,
          temp_kf: 0,
        },
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10n" },
        ],
        clouds: { all: 100 },
        wind: { speed: 3.89, deg: 297, gust: 10.38 },
        visibility: 10000,
        pop: 0.78,
        rain: { "3h": 0.48 },
        sys: { pod: "n" },
        dt_txt: "2021-09-11 12:00:00",
      },
      {
        dt: 1631372400,
        main: {
          temp: 10.76,
          feels_like: 10.06,
          temp_min: 10.76,
          temp_max: 10.76,
          pressure: 1005,
          sea_level: 1005,
          grnd_level: 1001,
          humidity: 83,
          temp_kf: 0,
        },
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10d" },
        ],
        clouds: { all: 100 },
        wind: { speed: 6.09, deg: 267, gust: 11.12 },
        visibility: 10000,
        pop: 0.85,
        rain: { "3h": 0.42 },
        sys: { pod: "d" },
        dt_txt: "2021-09-11 15:00:00",
      },
      {
        dt: 1631383200,
        main: {
          temp: 8.79,
          feels_like: 6.02,
          temp_min: 8.79,
          temp_max: 8.79,
          pressure: 1005,
          sea_level: 1005,
          grnd_level: 1001,
          humidity: 84,
          temp_kf: 0,
        },
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10d" },
        ],
        clouds: { all: 99 },
        wind: { speed: 5.15, deg: 280, gust: 10.64 },
        visibility: 10000,
        pop: 1,
        rain: { "3h": 1.08 },
        sys: { pod: "d" },
        dt_txt: "2021-09-11 18:00:00",
      },
      {
        dt: 1631394000,
        main: {
          temp: 7.14,
          feels_like: 4.1,
          temp_min: 7.14,
          temp_max: 7.14,
          pressure: 1006,
          sea_level: 1006,
          grnd_level: 1002,
          humidity: 80,
          temp_kf: 0,
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
        clouds: { all: 5 },
        wind: { speed: 4.8, deg: 312, gust: 11.61 },
        visibility: 10000,
        pop: 0.14,
        sys: { pod: "d" },
        dt_txt: "2021-09-11 21:00:00",
      },
      {
        dt: 1631404800,
        main: {
          temp: 11.23,
          feels_like: 9.84,
          temp_min: 11.23,
          temp_max: 11.23,
          pressure: 1006,
          sea_level: 1006,
          grnd_level: 1002,
          humidity: 55,
          temp_kf: 0,
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
        clouds: { all: 6 },
        wind: { speed: 7.01, deg: 293, gust: 10.71 },
        visibility: 10000,
        pop: 0.14,
        sys: { pod: "d" },
        dt_txt: "2021-09-12 00:00:00",
      },
      {
        dt: 1631415600,
        main: {
          temp: 9.13,
          feels_like: 5.78,
          temp_min: 9.13,
          temp_max: 9.13,
          pressure: 1006,
          sea_level: 1006,
          grnd_level: 1003,
          humidity: 76,
          temp_kf: 0,
        },
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10d" },
        ],
        clouds: { all: 96 },
        wind: { speed: 7.15, deg: 279, gust: 10.82 },
        visibility: 10000,
        pop: 0.96,
        rain: { "3h": 0.76 },
        sys: { pod: "d" },
        dt_txt: "2021-09-12 03:00:00",
      },
      {
        dt: 1631426400,
        main: {
          temp: 10.44,
          feels_like: 9.24,
          temp_min: 10.44,
          temp_max: 10.44,
          pressure: 1006,
          sea_level: 1006,
          grnd_level: 1003,
          humidity: 65,
          temp_kf: 0,
        },
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10d" },
        ],
        clouds: { all: 98 },
        wind: { speed: 6.69, deg: 271, gust: 10.98 },
        visibility: 10000,
        pop: 1,
        rain: { "3h": 0.87 },
        sys: { pod: "d" },
        dt_txt: "2021-09-12 06:00:00",
      },
    ],
    city: {
      id: 2158177,
      name: "Melbourne",
      coord: { lat: -37.814, lon: 144.9633 },
      country: "AU",
      population: 15000,
      timezone: 36000,
      sunrise: 1630960404,
      sunset: 1631001813,
    },
  });

  /////////////////////////////////////////////current weather////////////////////////////////////////////
  useEffect(() => {
    fetch(
      `${apiURL.base}weather?q=${query}&units=metric&appid=${apiURL.key}`
    ).then(async (res) => {
      if (res.ok) {
        setWeather(await res.json());
        setQuery('');
      }
    });
  }, [query]);

  const saveQueryHandler = (userInputQuery) => {
    setQuery(userInputQuery);
  };

  ///////////////////////////////////////////forecast weather//////////////////////////////////////////
  useEffect(() => {
    fetch(`${apiURL.forecast}${query}&units=metric&appid=${apiURL.key}`).then(
      async (res) => {
        if (res.ok) {
          setForecast(await res.json());
        }
      }
    );
  }, [query]);

  console.log(`${apiURL.forecast}${query}&units=metric&appid=${apiURL.key}`);

  const forecastGenerator = (fetchedData) => {
    console.log(fetchedData.city.name);
    const formattedData = fetchedData.list.map((el) => {
      // const name = el.city.name;
      const date = new Date(el.dt * 1000).toLocaleDateString("en-AU", {
        weekday: "short",
        // month: "short",
        // day: "2-digit",
      });
      const temp = Math.round(el.main.temp);
      //js 1s = 1000ms

      return {
        // name,
        date,
        temp,
      };
    });

    return formattedData;
  };

  const weatherForecast = forecastGenerator({ ...forecast });

  return (
    <div className="App">
      <main>
        <MainDisplay weather={weather} />
        <SideInfo
          onSaveQuery={saveQueryHandler}
          weather={weather}
          forecast={weatherForecast}
        />
      </main>
    </div>
  );
}

export default App;
