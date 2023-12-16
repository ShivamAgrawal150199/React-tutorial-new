
import './App.css';

import React, { Component, useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Route,
 Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



const App =()=> {                                         // function based component
  const c='john';
  const pageSize=5;
  const apiKey=process.env.REACT_APP_NEWS_API


  const[progress,setProgress]=useState(0)
  // state={
  //   progress:0
  // }

  // setProgress=(progress)=>{
  //   this.setState({progress:progress})
  // }

    return (
      <div>


        <Router>
        <Navbar/>

        <LoadingBar
        color='#f11946'
        progress={progress}
      />

          <Routes>


            <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey}  key='general' category='general' pageSize={pageSize}></News>}></Route>
            <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey}  key='business' category='business' pageSize={pageSize}></News>}></Route>
            <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey}  key='entertainment' category='entertainment' pageSize={pageSize}></News>}></Route>
            <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey}  key='health' category='health' pageSize={pageSize}></News>}></Route>
            <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey}  key='science' category='science' pageSize={pageSize}></News>}></Route>
            <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey}  key='sports' category='sports' pageSize={pageSize}></News>}></Route>
            <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey}  key='technology' category='technology' pageSize={pageSize}></News>}></Route>
            

        
        
          
          
          {/* Hello first class based component {this.c} */}
        </Routes>
        </Router>
      </div>
    )
  
}

export default App;

// export default class App extends Component {           // class based component
//   c='john';
//   pageSize=5;
//   apiKey=process.env.REACT_APP_NEWS_API


//   state={
//     progress:0
//   }

//   setProgress=(progress)=>{
//     this.setState({progress:progress})
//   }

//   render() {
//     return (
//       <div>


//         <Router>
//         <Navbar/>

//         <LoadingBar
//         color='#f11946'
//         progress={this.state.progress}
//       />

//           <Routes>


//             <Route exact path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key='general' category='general' pageSize={this.pageSize}></News>}></Route>
//             <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key='business' category='business' pageSize={this.pageSize}></News>}></Route>
//             <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key='entertainment' category='entertainment' pageSize={this.pageSize}></News>}></Route>
//             <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key='health' category='health' pageSize={this.pageSize}></News>}></Route>
//             <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key='science' category='science' pageSize={this.pageSize}></News>}></Route>
//             <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key='sports' category='sports' pageSize={this.pageSize}></News>}></Route>
//             <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key='technology' category='technology' pageSize={this.pageSize}></News>}></Route>
            

        
        
          
          
//           {/* Hello first class based component {this.c} */}
//         </Routes>
//         </Router>
//       </div>
//     )
//   }
// }

