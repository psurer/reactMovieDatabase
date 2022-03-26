import React, { useState, Fragment } from 'react';
// import logo from './logo.svg';
import MoviesList from './components/MoviesList';
import './App.module.css';
// how we send HTTP requests from inside a react app to a backend
function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // we do not load data initially

  async function fetchMoviesHandler() {
  setIsLoading(true); // we change the state when we start to load 
   const response = await fetch('https://swapi.dev/api/films/')
   const data = await response.json();
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        // now this is transformed and we store this with setMovie below
        };
      });  // this converts every object in the results array into a new object , an array full of new objects will be stored in transformed movies
      setMovies(transformedMovies);  // we now have the parsed and extracted movies
      // once all of these are done we call setIsLoading again and set to false because we have some data
      setIsLoading(false);
  }

  return (
    <Fragment className="App">
      <section>
      <header className="App-header">
          Movie DB Search </header>
          <section>
            <button onClick={fetchMoviesHandler}>Fetch Movies</button>
          </section>
          <section>
            {!isLoading && <MoviesList movies={movies}/>}  
            {isLoading && <p>Loading...</p>}
            {!isLoading && movies.length === 0 && <p> No Movies Found. </p>} 
          </section>
          </section>
    </Fragment>
  );
} 
   
export default App;

/* 
here is one way to do it , but we will use Async Await
what we use above is Asynchronous code, but we simplify it above
Before: 
   function fetchMoviesHandler() {
   fetch('https://swapi.dev/api/films/')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        // now this is transformed and we store this with setMovie below
        };
      });  // this converts every object in the results array into a new object , an array full of new objects will be stored in transformed movies
      setMovies(transformedMovies);  // we now have the parsed and extracted movies
    });
  }


 {!isLoading && <MoviesList movies={movies}/>}  // if this is not loading, then we render the moviesList
 {isLoading && <p>Loading...</p>} // if it is loading we render this p tag to say it is working
 {!isLoading && movies.length === 0 && <p> No Movies Found. } // if there is an empty array and no movies to display, then we can use this state

*/