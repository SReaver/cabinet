import React, { Component } from 'react';
import axios from 'axios';
import Event from '../Event/event';
import classes from './Events.module.css';


class Events extends Component {
    state = {
        events: [],
        selectedEventId: null,
        error: false
    }
    componentDidMount() {
        this.getDataFromServer();
    };
    getDataFromServer() {
        axios.get('/api/events')
            .then(response => {
                this.setState({ events: response.data })
                console.log(response);
            })
            .catch(err => {
                console.log(err);
                this.setState({ error: true })
            })
    }

    eventSelectedHandler = (id) => {
        //this.setState({ selectedEventId: id });
        axios.delete('/api/events/' + id)
            .then(response => {
                console.log(response);
            })
            .then(() => {
                this.getDataFromServer();
            })
    }
    render() {
        let events = <p style={{ textAlign: 'center' }}>Something went wrong</p>
        if (!this.state.error) {
            events = this.state.events.map(event => {
                return <Event
                    key={event._id}
                    title={event.title}
                    imageUrl={event.imageUrl}
                    description={event.description}
                    type={event.type}
                    clicked={() => this.eventSelectedHandler(event._id)} />
            });
        }
        return (
            <div>
                <section className={classes.Events}>
                    {events}
                </section>
            </div>
        );
    }
}

export default Events;