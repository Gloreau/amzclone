import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';
function App() {
  return (
    <Router>
      <div className="app">
        <Header></Header>
        <Switch>
          <Route path='/checkout'><h1>Checkout</h1></Route>
          <Route path='/login'><h1>Login</h1></Route>
          <Route path='/'><Home /></Route>

        </Switch>

      </div>
    </Router>

  );
}

export default App;
