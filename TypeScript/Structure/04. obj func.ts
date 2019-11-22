type Forecast = { date: Date; weather: string };

const today: Forecast = {
	date: new Date(),
	weather: 'sunny'
};

const logForecast = (forecast: Forecast): void => {
	console.log(`Forcast for ${forecast.date}: Weather is ${forecast.weather}`);
};
//
//
//
//
// object
type Profile = { name: string; age: number; coOrdinates: { lat: number; long: number }; setAge: (age: number) => void };

const profile: Profile = {
	name: 'John',
	age: 23,
	coOrdinates: {
		lat: 0,
		long: 16
	},

	setAge: function(age: number): void {
		this.age = age;
	}
};

const ageProfile: number = profile.age;
const latitude: number = profile.coOrdinates.lat;
//
//
//
//
// object destructuring
const { age }: { age: number } = profile;
const { coOrdinates: { lat, long } }: { coOrdinates: { lat: number; long: number } } = profile;
