import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

import Navbar from './components/navbar';
import Navvbarr from './components/Navvbarr';

import Amplify from 'aws-amplify';
import FlashCardList from "./pages/FlashCardList";
import AddFlashCard from './pages/AddFlashCard'

import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

function App() {


  return (

    <Router>
      <Navvbarr/>
      <div className="container mt-2" style={{marginTop: 40}}>
        <Switch>
          <Route exact path="/">
            <FlashCardList/>
          </Route>
          <Route path="/new">
            <AddFlashCard/>
          </Route>
        </Switch>
      </div>
    </Router>

  )
    ;
}

export default App;
