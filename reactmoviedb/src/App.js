import React, { useState, Fragment, useEffect, useCallback } from 'react';
// import logo from './logo.svg';
import MoviesList from './components/MoviesList';
import './App.module.css';
// how we send HTTP requests from inside a react app to a backend
function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // we do not load data initially
  const [error, setError] = useState(null);

 const fetchMoviesHandler = useCallback(async () => { // async, any params we might get, then arrow function then the function body
  setIsLoading(true); // we change the state when we start to load 
  setError(null); // here we try some code and catch any potential errors
  try {
    const response = await fetch('https://swapi.dev/api/films/');
    const data = await response.json();

    if (!response.ok){ // signals if response was successful or not {
       throw new Error('uh oh, something went wrong!');
    }

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
   }catch (error) { // if any error is thrown in the above code, we will catch it here 
      setError.apply(error.message);
   }
   setIsLoading(false); // we always want to stop loading even if there is no error
  }, []);
  useEffect(() => {

    fetchMoviesHandler();
   }, [fetchMoviesHandler]); // our second arguement is this array of dependencies
   // we will define when this useEffect function should be executed again
   // it only is executed again if the dependencies listed here change
  // the values in the content variable will differ based on the state we have 
  let content = <p>Found No Movies</p>
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />
  }

  if (error){
    content = <p>{error}</p>
  }

  if (isLoading) {
    content = <p>Loading...</p>
  }


  return (
    <Fragment className="App">
      <section>
      <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <header className="App-header">
          Movie DB Search </header>
          <section>
            <button onClick={fetchMoviesHandler}>Fetch Movies</button>
          </section>
          <section>{content}</section>
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

  We Want to let our User know which state we have: 
  We have movies
  We are loading Movies
  We have no movies 

            {!isLoading && movies.length > 0 && <MoviesList movies={movies}/>}  
            {!isLoading && movies.length === 0 && !error && <p> No Movies Found. </p>} 
            {!isLoading && error && <p>{error}</p>}
            {isLoading && movies.length && <p>Loading...</p>}

 {!isLoading && <MoviesList movies={movies}/>}  // if this is not loading, then we render the moviesList
 {isLoading && <p>Loading...</p>} // if it is loading we render this p tag to say it is working
 {!isLoading && movies.length === 0 && <p> No Movies Found. } // if there is an empty array and no movies to display, then we can use this state


  managing error state 
  {!isLoading && error && <p>{error}</p>} // we are not loading and there is err we wender text

 HERE we learned how to handle all the states we might have when sending an HTTP Request
 This is important, because no matter to which backend app we are talking to, 
 we will ALWAYS have these diff states: 

  We might always be waiting for a response
  we might always be getting errors
  we might always be getting back our data (hopefully)
  and Our data might always be empty

  it is important to know how to handle these scenarios

  // 
  we should fetch data immediatle when user visit webpage
  using the HTTP request is an effetc that ultimately changes our state
  side effects should be go into UseEffect Hook

  if not: then don't call the function as your main component function
  THIS Can CREATE Infinite loop, you call the App function, it re-renders or
  is re-evalutated and function is called again and so on, this is why we use useEffect
  This is great when used as part of the component rende r cycle
  but maybe not always when the component re-renders

  */