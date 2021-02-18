import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend } from 'k6/metrics';

export const options = {
	stages: [
		{ duration: '50s', target: 10 },
		{ duration: '60s', target: 10 },
		{ duration: '20s', target: 0 },
	],
	thresholds: {
		http_req_duration: ['p(95)<5000'],
	},
};

export default function () {
	const res = http.get('https://fe-en.mls-prd.deltatre.digital/');
}