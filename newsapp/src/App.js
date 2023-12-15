
import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Route,
 Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  c='john';
  pageSize=5

  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <div>


        <Router>
        <Navbar/>

        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />

          <Routes>


            <Route exact path='/' element={<News setProgress={this.setProgress}  key='general' category='general' pageSize={this.pageSize}></News>}></Route>
            <Route exact path='/business' element={<News setProgress={this.setProgress}  key='business' category='business' pageSize={this.pageSize}></News>}></Route>
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress}  key='entertainment' category='entertainment' pageSize={this.pageSize}></News>}></Route>
            <Route exact path='/health' element={<News setProgress={this.setProgress}  key='health' category='health' pageSize={this.pageSize}></News>}></Route>
            <Route exact path='/science' element={<News setProgress={this.setProgress}  key='science' category='science' pageSize={this.pageSize}></News>}></Route>
            <Route exact path='/sports' element={<News setProgress={this.setProgress}  key='sports' category='sports' pageSize={this.pageSize}></News>}></Route>
            <Route exact path='/technology' element={<News setProgress={this.setProgress}  key='technology' category='technology' pageSize={this.pageSize}></News>}></Route>
            

        
        
          
          
          {/* Hello first class based component {this.c} */}
        </Routes>
        </Router>
      </div>
    )
  }
}

