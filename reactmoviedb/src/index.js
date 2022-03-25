import React from 'react'; // library
import ReactDOM from 'react-dom'; // library
import './index.css';
import App from './App'; 
/* NOTE: these imports are
  ES6 Syntax so we can import a module
  and in this case the module is a component */
import reportWebVitals from './reportWebVitals';

/*

*/
ReactDOM.render(
  /* from the React Dom that we import, 
  we call the render method, and we give it the 
  component that we want to render, and we tell
  it where we want to render it
  */
  //react stript mode is a good idea, 
  // it does more checks, so if you do things that are not kosher,
  // this protects you  
  <React.StrictMode> 
    <App />  
  </React.StrictMode>,
  document.getElementById('root') /* here we tell our application to Render our App 
  to something called the 'root'
  if we go under Public Folder, and to Index.html we will see in Index.HTML 
  we see a <div> with the id='root'
  it is Inside of this div that we will render 
  out our complete application
  */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
