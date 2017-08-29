import React, { Component } from 'react';
import Clock from './clock_component';

class EventsIndex extends Component {

    render() {
        return (
            <div className="events-index-container">
                <div className="events-index__header">
                    <div>Time: <Clock /></div>
                    <h1>Next up!</h1>
                </div>
                <ul>
                    <li>Event 1</li>
                    <li>Event 2</li>
                    <li>Event 3</li>
                    <li>Event 4</li>
                </ul>
            </div>
        );
    }
    
}

export default EventsIndex;
