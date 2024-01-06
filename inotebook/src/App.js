import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import  Alert  from "./components/Alert";
import Signup from "./components/Signup";
import Login from "./components/Logincomponent";
import { useState } from "react";

function App() {

  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert}/>
          <Alert message="This is amazing react course"/>
          <div className="container">
            {/* <h1>This is iNotebook</h1> */}
            <Routes>
              <Route exact path="/" element=<Home showAlert={showAlert}/>></Route>

              <Route exact path="/about" element=<About />></Route>
              <Route exact path="/login" element=<Login showAlert={showAlert}/>></Route>
              <Route exact path="/signup" element=<Signup showAlert={showAlert}/>></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
