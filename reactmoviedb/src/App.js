import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  function fetchMoviesHandler() {
    // fetch API is built into JS to fetch or send data
    // we can use the fetch HTTP requests and work with Responses
    // here we use the fetch function the browser makes available to us
    fetch('https://swapi.dev/api/films'
      /* fetch returns a response and then allows us to react to any potential
       erros we might be getting 
       sending HTTP req is an Asynchronous task , it doesn't finish immediately
       it can take milliseconds or so */

    /* we get a response and in the function body we can use the response the response arguemnet here in an obj with data about response
      // this API sends back data in JSON format, looks like JS object
      but keys are wrapped in double quotes etc
      No methods just data in JSON data
      we need to translate it to a JS OBJECT using the built in method JSON
      */
    ).then(res => {
      return response.json();

    }).then(data => {
      setMovies(data.results);  // we now have the parsed and extracted movies
    }); // 

  }
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: "Some Dummy Movie",
  //     openingText: "this is the opening text of the movie",
  //     releaseDate: "2020-05-18"
  //   },
  //   {
  //     id: 2,
  //     title: "Some Dummy Movie 2",
  //     openingText: "this is the opening text of the movie",
  //     releaseDate: "2021-05-19"
  //   },
  //   {
  //     id: 3,
  //     title: "Some Dummy Movie 3",
  //     openingText: "this is the opening text of the movie",
  //     releaseDate: "2022-05-20"
  //   }
  // ];

  return (
    <Fragment className="App">
      <header className="App-header">
          Movie DB Search </header>
          <section>
            <button>Fetch Movies</button>
          </section>
          <section>
            <MoviesList movies={movies}/>
          </section>
    </Fragment>
  );
} 
   
export default App;
