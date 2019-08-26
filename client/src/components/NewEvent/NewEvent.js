import React, { Component } from 'react';
import axios from 'axios';
import classes from './NewEvent.module.css';

//mport './NewPost.css';

class NewEvent extends Component {
    state = {
        title: '',
        description: '',
        type: 'Конференция',
        imageUrl: ''
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            description: this.state.description,
            type: this.state.type,
            imageUrl: this.state.imageUrl
        }
        console.log(this.state);
        axios.post('/api/events', data)
            .then(response => {
                console.log(response);
            })
    }

    render() {
        return (
            <div className={classes.NewEvent}>
                <h1>Добавить мероприятие</h1>
                <label>Наименование</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Описание</label>
                <textarea rows="4" value={this.state.description} onChange={(event) => this.setState({ description: event.target.value })} />
                <label>Тип</label>
                <select value={this.state.type} onChange={(event) => this.setState({ type: event.target.value })}>
                    <option value="Конференция">Конференция</option>
                    <option value="Тренинг">Тренинг</option>
                </select>
                <label>Адрес картинки</label>
                <input type="text" value={this.state.imageUrl} onChange={(event) => this.setState({ imageUrl: event.target.value })} />
                <button onClick={this.postDataHandler}>Добавить событие</button>
            </div>
        );
    }
}

export default NewEvent;