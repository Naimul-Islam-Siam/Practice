const todaysWeather = {
   date: new Date(),
   weather: 'sunny'
};

const logWeather = (day: {date: Date, weather: string}): void => {
   console.log(`Today's Date: ${day.date}`);
   console.log(`Today's Weather: ${day.weather}`);
};


// using destructuring
const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(`Today's Date: ${date}`);
    console.log(`Today's Weather: ${weather}`);
};