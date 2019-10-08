async function getWeather(woeid) {
    try {
        const result = await fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`);
        const data = await result.json();
        const tomorrow = await data.consolidated_weather[1];
        console.log(`Tomorrow's temparature at ${data.title} stays between ${tomorrow.min_temp} and ${tomorrow.max_temp}`);
    }
    catch (error) {
        console.log(error);
    }
}

getWeather(2487956);