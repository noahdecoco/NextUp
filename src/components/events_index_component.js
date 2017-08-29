import React, { Component } from 'react';

class EventsIndex extends Component {
  render() {
    return (
      <div className="events-index-container">
          <div className="events-index__header">
              <h1>Next up!</h1>
              <span>{ new Date() }</span>
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
