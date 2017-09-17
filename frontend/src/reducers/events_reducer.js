import _ from "lodash";
import { FETCH_EVENTS } from "../actions/index";

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_EVENTS:
			console.log("payload", action.payload); // undefined
			return {};
		default:
			return state;
	}
}
