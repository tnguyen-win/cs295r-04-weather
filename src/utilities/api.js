import axios from 'axios';
import parseForecast from './weatherParsing.js';

const apiKey = 'appid=436318b3f99b10952c06599c1755c123';

export const getLocation = async zipCode => {
    const geoURL = 'https://api.openweathermap.org/geo/1.0/zip?';
    const response = await axios.get(`${geoURL}zip=${zipCode},US&${apiKey}`);

    return ({ name: response.data.name, lat: response.data.lat, lon: response.data.lon });
};

export const getWeather = async (lat, lng) => {
    const weatherURL = 'https://api.openweathermap.org/data/2.5/forecast?units=imperial&';
    const response = await axios.get(`${weatherURL}lat=${lat}&lon=${lng}&${apiKey}`);

    return parseForecast(response.data.list);
};
