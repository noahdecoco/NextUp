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
                    { this.renderEvents() }
                </ul>
            </div>
        );
    }

    renderEvents() {
        return this.props.events.map((event, index) => {
            return (<li key={ index }>{ event.title }</li>)
        })
    }

}

export default EventsIndex;
