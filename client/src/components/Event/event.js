import React from 'react';
import classes from './Event.module.css';


const event = (props) => (
    <div className={classes.Event}>
        <h1>{props.title}</h1>
        <img src={props.imageUrl}></img>
        <div>
            {props.description}
        </div>
        <div>{props.type}</div>
        <button onClick={props.clicked}>Удалить</button>
    </div>
);

export default event;
