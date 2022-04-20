import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; //this is the starting point of creating our file - within the App.js that will be imported into this file

const root = ReactDOM.createRoot(document.getElementById('root')); 
//gets the div with id "root" from index.html file
//and renders the APP into the root div
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


