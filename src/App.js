
// this holds all the code that will be displayed onto the page
//npm start - starts the server (on port 3000)
//nodemon server - starts the backend server (on port 5000)

import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
//react-router-dom: installs react router, which makes it easier to route different URLs to different react components
import "bootstrap/dist/css/bootstrap.min.css"; //imports bootstrap lmfao wtf -- for css and styling

//importing components
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    //need to put everything we want to be used w/ the router inside of a router element
    //all of the things below are components (Navbar, all the "exact component"s) that we still have to create
    //there is a route element for all of the components below - the path attribute is set to the url path
    //for example, if someone goes to [rooturl]/ , it will load "ExercisesList" component

    //react router maps specific URL paths to different components that will load on the page
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component = {ExercisesList} />
      <Route path="/edit/:id" component = {EditExercise} />
      <Route path="/create" component = {CreateExercise} />
      <Route path="/user" component = {CreateUser} />
    </Router>
  );
}

export default App;
