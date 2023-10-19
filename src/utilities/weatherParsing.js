const getIndexOfMidnight = firstDate => {
    const localHours = new Date(firstDate * 1000).getHours();

    return (localHours > 2) ? Math.round((24 - localHours) / 3) : Math.abs(Math.round(localHours / 3));
};

const findMinTemp = (forecast, indexOfMidnight) => {
    let min = forecast[indexOfMidnight].main.temp_min;

    for (let i = indexOfMidnight + 1; i < indexOfMidnight + 8; i++) if (forecast[i].main.temp_min < min) min = forecast[i].main.temp_min;

    return min;
};

const findMaxTemp = (forecast, indexOfMidnight) => {
    let max = forecast[indexOfMidnight].main.temp_max;

    for (let i = indexOfMidnight + 1; i < indexOfMidnight + 8; i++) if (forecast[i].main.temp_max > max) max = forecast[i].main.temp_max;

    return max;
};

const parseForecast = (forecast, timezoneOffset) => {
    const simpleForecast = [];
    const MIDNIGHT = getIndexOfMidnight(forecast[0].dt, timezoneOffset);
    const NOON = 4;
    const SIXAM = 2;
    const SIXPM = 6;
    const NINEPM = 7;
    const MORNING = SIXAM;
    const DAY = NOON;
    const EVENING = SIXPM;
    const NIGHT = NINEPM;
    const PERDAY = 8;

    for (let i = MIDNIGHT; i < forecast.length - NINEPM; i += PERDAY) {
        const oneDay = {};

        oneDay.dt = new Date(forecast[i + NOON].dt * 1000);
        oneDay.temp = forecast[i + NOON].main.temp;
        oneDay.minTemp = findMinTemp(forecast, i);
        oneDay.maxTemp = findMaxTemp(forecast, i);
        oneDay.morningTemp = forecast[i + MORNING].main.temp;
        oneDay.dayTemp = forecast[i + DAY].main.temp;
        oneDay.eveningTemp = forecast[i + EVENING].main.temp;
        oneDay.nightTemp = forecast[i + NIGHT].main.temp;
        oneDay.description = forecast[i + NOON].weather[0].description;
        oneDay.icon = forecast[i + NOON].weather[0].icon;
        oneDay.pressure = forecast[i + NOON].main.pressure;
        oneDay.wind = forecast[i + NOON].wind.speed;
        oneDay.humidity = forecast[i + NOON].main.humidity;
        simpleForecast.push(oneDay);
    }

    return simpleForecast;
};

export default parseForecast;
