// Creator: k6 Browser Recorder 0.5.3

import { sleep, group } from "k6";
import http from "k6/http";

export const options = {
	stages: [
		{ duration: '250s', target: 35 },
		{ duration: '60s', target: 35 },
		{ duration: '125s', target: 0 },
	],
	thresholds: {
		http_req_duration: ['p(95)<5000'],
	},
};

const slugMatches = [
	"2020-11-08-orlando-city-sc-vs-nashville-sc/",
	"2020-11-20-new-england-revolution-vs-montreal-impact/",
	"2020-12-03-sporting-kansas-city-vs-minnesota-united-fc/",
	"2020-12-06-columbus-crew-sc-vs-new-england-revolution/",
	"2020-12-07-seattle-sounders-fc-vs-minnesota-united-fc/",
	"2020-11-29-columbus-crew-sc-vs-nashville-sc/",
	"2020-11-24-philadelphia-union-vs-new-england-revolution/",
	"2020-11-24-seattle-sounders-fc-vs-los-angeles-football-club/",
	"2020-11-22-sporting-kansas-city-vs-san-jose-earthquakes/",
	"2020-11-21-orlando-city-sc-vs-new-york-city-fc/",
]

export default function main () {
	let response;

	group("Home page - https://fe-en.mls-prd.deltatre.digital/", function () {
		response = http.get("https://fe-en.mls-prd.deltatre.digital/", {
			headers: {
				accept:
					"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"accept-encoding": "gzip, deflate, br",
				"accept-language": "en-IT,en;q=0.9,it-IT;q=0.8,it;q=0.7,en-US;q=0.6",
				"cache-control": "max-age=0",
				dnt: "1",
				"sec-fetch-dest": "document",
				"sec-fetch-mode": "navigate",
				"sec-fetch-site": "none",
				"sec-fetch-user": "?1",
				"upgrade-insecure-requests": "1",
			},
		});
	});

	group(
		"News latest - https://fe-en.mls-prd.deltatre.digital/news/",
		function () {
			response = http.get("https://fe-en.mls-prd.deltatre.digital/news/", {
				headers: {
					dnt: "1",
					"upgrade-insecure-requests": "1",
				},
			});
		}
	);

	group(
		"Schedule page - https://fe-en.mls-prd.deltatre.digital/schedule/",
		function () {
			response = http.get(
				"https://fe-en.mls-prd.deltatre.digital/schedule/",
				{
					headers: {
						accept:
							"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
						"accept-encoding": "gzip, deflate, br",
						"accept-language":
							"en-IT,en;q=0.9,it-IT;q=0.8,it;q=0.7,en-US;q=0.6",
						dnt: "1",
						"sec-fetch-dest": "document",
						"sec-fetch-mode": "navigate",
						"sec-fetch-site": "same-origin",
						"sec-fetch-user": "?1",
						"upgrade-insecure-requests": "1",
					},
				}
			);
		}
	);

	group(
		"Match page - https://fe-en.mls-prd.deltatre.digital/competitions/mls-cup/2020/matches/{slug}",
		function () {
			let index = Math.floor(Math.random() * 10);
			let slug = slugMatches[index];
			response = http.get(
				`https://fe-en.mls-prd.deltatre.digital/competitions/mls-cup/2020/matches/${slug}`,
				{
					headers: {
						accept:
							"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
						"accept-encoding": "gzip, deflate, br",
						"accept-language":
							"en-IT,en;q=0.9,it-IT;q=0.8,it;q=0.7,en-US;q=0.6",
						dnt: "1",
						"sec-fetch-dest": "document",
						"sec-fetch-mode": "navigate",
						"sec-fetch-site": "same-origin",
						"sec-fetch-user": "?1",
						"upgrade-insecure-requests": "1",
					},
				}
			);
		}
	);

	// Automatically added sleep
	sleep(0.2);
}