const todaysWeather = {
   date: new Date(),
   weather: 'sunny'
};


const profile: {name: string; age: number; co_ordinates: {lat: number, lng: number}} = {
   name: 'John Cena',
   age: 40,
   co_ordinates: {
      lat: 0,
      lng: 15
   }
};


const logWeather = (day: {date: Date, weather: string}): void => {
   console.log(`Today's Date: ${day.date}`);
   console.log(`Today's Weather: ${day.weather}`);
};

const logProfile = (profile: {name: string; age: number; co_ordinates: {lat: number, lng: number}}): void => {
   const {co_ordinates} = profile;

   console.log(`Profile Name: ${profile.name}`);
   console.log(`Profile Age: ${profile.age}`);
   console.log(`Profile Location: ${co_ordinates.lat}, ${co_ordinates.lng}`);
};



// using destructuring
const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(`Today's Date: ${date}`);
    console.log(`Today's Weather: ${weather}`);
};

const logProfile = ({name, age, co_ordinates: {lat, lng}}: {name: string; age: number; co_ordinates: {lat: number, lng: number}}): void => {
   console.log(`Profile Name: ${name}`);
   console.log(`Profile Age: ${age}`);
   console.log(`Profile Location: ${lat}, ${lng}`);
};