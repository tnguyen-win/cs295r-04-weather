import './App.css';
import { useState } from 'react';
import ZipForm from './components/ZipForm';
import WeatherList from './components/WeatherList';
import CurrentDay from './components/CurrentDay';
import { getLocation, getWeather } from './utilities/api';

function App() {
    const [city, setCity] = useState({});
    const [forecast, setForecast] = useState([]);
    const [selectedDay, setSelectedDay] = useState(-1);
    const handleDayClick = index => setSelectedDay(index);
    const handleSubmit = async zipCode => {
        try {
            const resCity = await getLocation(zipCode);
            const resForecast = await getWeather(resCity.lat, resCity.lon);

            setCity(resCity);
            setForecast(resForecast);
            setSelectedDay(-1);
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) console.log(error.request);
            else console.log(error.message);
        }
    };

    return (
        <>
            <ZipForm onSubmit={handleSubmit} />
            <WeatherList forecast={forecast} onDayClick={handleDayClick} />
            <CurrentDay city={city} forecastDay={selectedDay ? forecast[selectedDay] : forecast[0]} />
        </>
    );
}

export default App;
