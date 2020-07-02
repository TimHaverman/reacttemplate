import React from 'react';
import './App.css';

import Home from './Pages/Home';
import Products from './Pages/Products';
import SingleProduct from './Pages/SingleProduct';
import Error from './Pages/Error';

import Navbar from './Components/Navbar';

import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Products/" component={Products}/>
        <Route exact path="/Products/:slug" component={SingleProduct}/>       
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
