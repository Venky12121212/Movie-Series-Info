import React, { Component } from 'react';

import { Provider } from 'react-redux';

import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Layout/Navbar';
import Landing from './Components/Home/Landing';
import Footer from './Components/Layout/Footer';
import Movie from './Components/Home/Movie';

import store from './Store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
          <Navbar />
         <Route exact path="/" component={Landing}/>
         <Route exact path="/movie/:id" component={Movie}/>
          <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
