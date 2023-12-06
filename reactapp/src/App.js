// import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
//import TextForm from './components/TextForm';
//import About from './components/About';
import TextForm from './components/TextForm';

// let name="Shivam";
function App() {
  return (
    // <><Navbar title="Text Utiles new" abouttext="about"></Navbar></>
    
    <>
    <Navbar title='Text Utils' abouttext='About us'></Navbar>
    <div className="container my-3">
      {/* <About/> */}
      <TextForm heading='Convert the text'/>
    {/* <TextForm heading="Enter the text to analyze below"></TextForm> */}

    </div>
    
    </>

  );
}

export default App;
