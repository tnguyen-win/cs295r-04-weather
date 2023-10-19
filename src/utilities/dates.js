const getWeekday = date => {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekday = date.getDay();

    return dayNames[weekday];
};

export default getWeekday;
