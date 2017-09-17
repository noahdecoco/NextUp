import axios from "axios";

const API_URL = "http://noahdecoco.com/nextup/api/events";

export const FETCH_EVENTS = "FETCH_EVENTS";
export const SELECT_EVENT = "SELECT_EVENT";

export function fetchEvents(callback) {
	const request = axios.get(API_URL).then(res => {
		callback();
		return res;
	});

	return {
		type: FETCH_EVENTS,
		payload: request
	};
}
