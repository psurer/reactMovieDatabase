import Reaact from 'react';

import classes from './MoviesList.module.css';

const Movie = (props) => {
    return (
        <li className={classes.movie}>
        <h2>{props.title}</h2>
        <h3>{props.releaseDate}</h3>
        <p>{props.openingText}</p>
        </li>
    );
};

export default Movie;

// promises are JS language feature not specific to React
// you can do .then chains or you can use async key word in fron of function 
// and then await operation which is then returning a promise
