<script lang="ts">
	import 'chart.js/auto';
	import 'chartjs-adapter-date-fns';
	import { Line } from 'svelte-chartjs';

	export let weather;

	const series = weather.hourly.time.map((t, index) => {
		return {
			x: new Date(t),
			temp: weather.hourly.temperature_2m[index]
		};
	});

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false
			}
		},
		interaction: {
			mode: 'index',
			intersect: false
		},
		scales: {
			x: {
				type: 'time',
				time: {
					unit: 'day'
				}
			},
			y: {
				ticks: {
					callback: function (value, index, ticks) {
						return value + ' ºC';
					}
				}
			}
		}
	};

	const data = {
		datasets: [
			{
				label: 'Temperature',
				data: series,
				// fill: false,
				borderWidth: 2,
				pointRadius: 0.5,
				backgroundColor: 'grey',
				borderColor: 'grey',
				lineTension: 0.8,
				parsing: {
					yAxisKey: 'temp'
				}
			}
		]
	};
</script>

<div class="p-5">
	<Line {data} {options} />
</div>
