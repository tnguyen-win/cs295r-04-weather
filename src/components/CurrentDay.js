import getWeekday from '../utilities/dates';

const CurrentDay = ({ city, forecastDay }) => {
    if (forecastDay) {
        return (
            <div>
                <h1>{getWeekday(forecastDay.dt)} in {city.name}</h1>
                <div>
                    <p>
                        <img src={`http://openweathermap.org/img/w/${forecastDay.icon}.png`} alt={forecastDay.description} />
                        {forecastDay.description}
                    </p>
                </div>
                <div>
                    <div>
                        <p>Morning Temperature: {forecastDay.morningTemp}&deg;F</p>
                        <p>Day Temperature: {forecastDay.dayTemp}&deg;F</p>
                        <p>Evening Temperature: {forecastDay.eveningTemp}&deg;F</p>
                        <p>Night Temperature: {forecastDay.nightTemp}&deg;F</p>
                    </div>
                    <div>
                        <p>Atmospheric Pressure: {forecastDay.pressure} hPa</p>
                        <p>Humidity: {forecastDay.humidity}%</p>
                        <p>Wind Speed: {forecastDay.wind} mph</p>
                    </div>
                </div>
            </div>
        );
    };
};

export default CurrentDay;
