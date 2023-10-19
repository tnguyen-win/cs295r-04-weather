import getWeekday from '../utilities/dates';

const WeatherListItem = ({ index, forecastDay, onDayClick }) => {
    if (forecastDay) {
        const handleClick = () => onDayClick(index);

        return (
            <>
                <button className='col btn btn-success rounded-3 m-3 p-5' onClick={handleClick}>
                    <h2>{forecastDay.dt.getMonth() + 1} / {forecastDay.dt.getDate()}</h2>
                    <h3>{getWeekday(forecastDay.dt)}</h3>
                    <h3>{forecastDay.minTemp.toFixed(1)}&deg;F &#124; {forecastDay.maxTemp.toFixed(1)}&deg;F</h3>
                </button>
            </>
        );
    }
};

export default WeatherListItem;
