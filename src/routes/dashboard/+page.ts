import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
	const ip_api_result = await event.fetch('https://ipapi.co/json');
	const location = await ip_api_result.json();
	// console.log(location)

	const weather_url = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&hourly=temperature_2m&current_weather=true`;
	// console.log(weather_url)
	const weather_result = await event.fetch(weather_url);
	const weather = await weather_result.json();
	// console.log(weather)

	return {
		location: location,
		weather: weather
	};
};
