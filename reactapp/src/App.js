// import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import About from './components/About';
// import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Switch , Link, Route, Routes} from "react-router-dom";
// import About from './components/About';


// let name="Shivam";
function App() {
const[mode, setMode]=useState('light');
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
const removeclass=()=>{
  document.body.classList.remove('bg-light');
  document.body.classList.remove('bg-success');
  document.body.classList.remove('bg-warning');
  document.body.classList.remove('bg-danger');
  document.body.classList.remove('bg-primary');
  document.body.classList.remove('bg-dark');
}

const toggleMode=(cls)=>{
  console.log(cls)
  removeclass()
  if(cls!==null)
  {
    document.body.classList.add('bg-'+cls)
  }
  else
  {
    if(mode==='dark')
  {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled","success");
    // document.title='TextUtils - Light Mode';
  }
  else
  {
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled","success");
    // document.title='TextUtils - Dark Mode';
    // setInterval(() => {
    //   document.title='TextUtils is an amazing app';
    // }, 2000);
    // setInterval(() => {
    //   document.title='Install TextUtils now';
    // }, 1500);
  }

  }
  

  
  
}

  return (
    // <><Navbar title="Text Utiles new" abouttext="about"></Navbar></>
    
    <>
    <Router>
    <Navbar title='Text Utils' abouttext='About us' mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* <About/> */}
      
      {/* {/* <Routes> */}
      <Routes>
        <Route exact path="/About" element={<About mode={mode}/>}>
          
        </Route> 
        <Route exact path="/" element={<TextForm heading='Try TextUtils | Word Counter, Character Counter, Remove Extra Spaces' mode={mode} showAlert={showAlert}/>}>
        {/* <TextForm heading='Convert the text' mode={mode} showAlert={showAlert}/> */}
        </Route>
      </Routes>
      </div>
      </Router>
    {/* <TextForm heading="Enter the text to analyze below"></TextForm> */}
    {/* <About></About> */}

    
    
    </>

  );
}

export default App;
