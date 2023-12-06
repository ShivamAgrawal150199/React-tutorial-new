// import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
//import TextForm from './components/TextForm';
//import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';

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

const toggleMode=()=>{
  if(mode==='dark')
  {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled","success");
  }
  else
  {
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled","success");
  }
  
}

  return (
    // <><Navbar title="Text Utiles new" abouttext="about"></Navbar></>
    
    <>
    <Navbar title='Text Utils' abouttext='About us' mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* <About/> */}
      <TextForm heading='Convert the text' mode={mode} showAlert={showAlert}/>
    {/* <TextForm heading="Enter the text to analyze below"></TextForm> */}

    </div>
    
    </>

  );
}

export default App;
