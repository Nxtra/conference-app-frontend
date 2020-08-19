import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

import Navvbarr from './components/Navvbarr';

import LearningList from "./pages/LearningList";
import AddLearning from './pages/AddLearning'


function App() {


  return (

    <Router>
      <Navvbarr/>
      <div className="container mt-2" style={{marginTop: 40}}>
        <Switch>
          <Route exact path="/">
            <LearningList/>
          </Route>
          <Route path="/new">
            <AddLearning/>
          </Route>
        </Switch>
      </div>
    </Router>

  )
    ;
}

export default App;
