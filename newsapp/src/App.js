
import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Route,
 Routes
} from "react-router-dom";

export default class App extends Component {
  c='john';
  render() {
    return (
      <div>


        <Router>
        <Navbar/>

          <Routes>


            <Route exact path='/' element={<News key='general' category='general'></News>}></Route>
            <Route exact path='/business' element={<News key='business' category='business'></News>}></Route>
            <Route exact path='/entertainment' element={<News key='entertainment' category='entertainment'></News>}></Route>
            <Route exact path='/health' element={<News key='health' category='health'></News>}></Route>
            <Route exact path='/science' element={<News key='science' category='science'></News>}></Route>
            <Route exact path='/sports' element={<News key='sports' category='sports'></News>}></Route>
            <Route exact path='/technology' element={<News key='technology' category='technology'></News>}></Route>
            

        
        
          
          
          {/* Hello first class based component {this.c} */}
        </Routes>
        </Router>
      </div>
    )
  }
}

