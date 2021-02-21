import { sleep, group } from "k6";
import http from "k6/http";

export const options = {
	stages: [
		{ duration: '250s', target: 100 },
		{ duration: '60s', target: 100 },
		{ duration: '125s', target: 0 },
	],
	thresholds: {
		http_req_duration: [{ threshold: 'p(95)<10000', abortOnFail: true, delayAbortEval: '10s' }],
	},
};



export default function main () {
	let response;

	group("Home page - https://www.nfl.com/", function () {
		response = http.get("https://www.nfl.com/", {
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
		"News latest - https://www.nfl.com/news/",
		function () {
			response = http.get("https://www.nfl.com/news/", {
				headers: {
					dnt: "1",
					"upgrade-insecure-requests": "1",
				},
			});
		}
	);

	group(
		"Schedule page - https://www.nfl.com/schedule/",
		function () {
			response = http.get(
				"https://www.nfl.com/schedule/",
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