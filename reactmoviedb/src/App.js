import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function App() {
  const dummyMovies = [
    {
      id: 1,
      title: "Some Dummy Movie",
      openingText: "this is the opening text of the movie",
      releaseDate: "2020-05-18"
    },
    {
      id: 2,
      title: "Some Dummy Movie 2",
      openingText: "this is the opening text of the movie",
      releaseDate: "2021-05-19"
    },
    {
      id: 3,
      title: "Some Dummy Movie 3",
      openingText: "this is the opening text of the movie",
      releaseDate: "2022-05-20"
    }
  ];
  
  return (
    <Fragment className="App">
      <header className="App-header">
          Movie DB Search </header>
          <section>
            <button>Fetch Movies</button>
          </section>
    </Fragment>
  );
} 
   
export default App;
