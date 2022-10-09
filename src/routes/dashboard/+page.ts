import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {

   
    // const ip_api_result = await fetch("http://ip-api.com/json/", {referrerPolicy: "unsafe-url"})
    const ip_api_result = await fetch("https://ipapi.co/json")
    const location = await ip_api_result.json()
    console.log(location)

    const weather_url = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&hourly=temperature_2m&current_weather=true`
    // console.log(weather_url)
    const weather_result = await fetch(weather_url)
    const weather = await weather_result.json()
    // console.log(weather)

    return {
        location: location,
        weather: weather
    }

    // throw error(404, 'Not found');
}