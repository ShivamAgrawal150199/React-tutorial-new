import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import { Alert } from "./components/Alert";
import Signup from "./components/Signup";
import Login from "./components/Logincomponent";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="This is amazing react course"/>
          <div className="container my-3">
            <h1>This is iNotebook</h1>
            <Routes>
              <Route exact path="/" element=<Home />></Route>

              <Route exact path="/about" element=<About />></Route>
              <Route exact path="/login" element=<Login/>></Route>
              <Route exact path="/signup" element=<Signup />></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
