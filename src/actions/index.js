import axios from 'axios';

const API_KEY = '9584d78d937e9fb3db05767f4b808caf';
export const FETCH_WEATHER = 'FETCH_WEATHER';
//const http://samples.openweathermap.org/data/2.5/forecast/daily?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export function getWeather(city){
    
    const url = `${ROOT_URL}&q=${city},us`;
    console.log(URL);
    const request = axios.get(url);
    console.log(request);
    return {
        type : FETCH_WEATHER,
        payload : request
     };
}