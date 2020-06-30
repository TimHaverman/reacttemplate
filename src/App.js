import React from 'react';

import Home from './Pages/Home';
import Error from './Pages/Error';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>       
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
