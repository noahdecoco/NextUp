import React, { Component } from 'react';

class EventsIndex extends Component {

    constructor(props) {

        super(props);

        this.state = {
            time: new Date().toLocaleTimeString()
        };

    }

    componentDidMount() {

        this.timer = setInterval(
            () => this.tick(),
            1000
        );

    }

    componentWillUnmount() {

        clearInterval(this.timer);

    }

    tick() {

        this.setState({
            time: new Date().toLocaleTimeString()
        });

    }

    render() {
        return (<span>{ this.state.time }</span>);
    }
}

export default EventsIndex;
