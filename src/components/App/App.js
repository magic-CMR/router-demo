import React, { Component } from 'react'
import './app.css'
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import Header from '../Header/Header'
class App extends Component {

  render() {
    return (
      <div className="app">
        <div>
          <Router>
            <div>
            <header>
              <Header />
            </header>
            <Route exact path='/' component={Home}></Route>
            <Route path='/about' component={About}></Route>
            </div>
          </Router>
        </div>

      </div>
    )
  }
}

export default App;
