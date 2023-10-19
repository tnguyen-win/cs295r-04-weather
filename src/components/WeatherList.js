import WeatherListItem from './WeatherListItem';

const WeatherList = ({ forecast, onDayClick }) => {
    if (forecast) {
        const itemsHTML = forecast.map((forecastDay, index) => <WeatherListItem index={index} key={forecastDay.dt} forecastDay={forecastDay} onDayClick={onDayClick} />);

        return <div className='row'>{itemsHTML}</div>;
    }
};

export default WeatherList;
