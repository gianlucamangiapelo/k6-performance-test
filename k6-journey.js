import { sleep, group } from "k6";
import http from "k6/http";

export const options = {
	stages: [
		{ duration: "30s", target: 40 },
		{ duration: "60s", target: 40 },
		{ duration: "1m", target: 0 },
	],
};

export default function main () {
	let response;

	group(
		"page_1 - https://fe-en.si-dev.deltatre.digital/api/v1/mobileapp/config",
		function () {
			response = http.get(
				"https://fe-en.si-dev.deltatre.digital/api/v1/mobileapp/config",
				{
					headers: {
						accept:
							"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
						"accept-encoding": "gzip, deflate, br",
						"accept-language":
							"en-IT,en;q=0.9,it-IT;q=0.8,it;q=0.7,en-US;q=0.6",
						authorization: "CMS key=e2b2b56d-1f80-433c-9753-6449fa1bb33b",
						"cache-control": "max-age=0",
						dnt: "1",
						"if-none-match": '"BDidl3TV4nwLxS4pviYVI_sDZlg"',
						"sec-fetch-dest": "document",
						"sec-fetch-mode": "navigate",
						"sec-fetch-site": "none",
						"sec-fetch-user": "?1",
						"upgrade-insecure-requests": "1",
					},
				}
			);
		}
	);

	sleep(0.2);

	group(
		"page_2 - https://fe-en.si-dev.deltatre.digital/cms/api/routes/menus/live/mobileapp/v1/%7Bdevice%7D/_libraries/_hamburger-menu",
		function () {
			response = http.get(
				"https://fe-en.si-dev.deltatre.digital/cms/api/routes/menus/live/mobileapp/v1/%7Bdevice%7D/_libraries/_hamburger-menu",
				{
					headers: {
						accept:
							"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
						"accept-encoding": "gzip, deflate, br",
						"accept-language":
							"en-IT,en;q=0.9,it-IT;q=0.8,it;q=0.7,en-US;q=0.6",
						authorization: "CMS key=e2b2b56d-1f80-433c-9753-6449fa1bb33b",
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
	sleep(1);
}
