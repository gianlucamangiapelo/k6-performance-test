import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend } from 'k6/metrics';

let myTrend = new Trend('my_waiting_time');

export const options = {
	stages: [
		{ duration: '10s', target: 15 },
		{ duration: '20s', target: 15 },
		{ duration: '10s', target: 0 },
	],
	thresholds: {
		http_req_duration: ['p(90)<50'],
		my_waiting_time: ['p(90)<50'],
	},
};

export default function () {
	const res = http.get('https://fe-en.si-dev.deltatre.digital/api/v1/mobileapp/config');

	//custom metric
	myTrend.add(res.timings.waiting);

	//custom check
	check(res, {
		'My first check': (r) => r.timings.duration < 100,
	});

	sleep(1);
}