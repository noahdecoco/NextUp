import { combineReducers } from "redux";
import events from "./events_reducer";

const rootReducer = combineReducers({
	events: events
});

export default rootReducer;
