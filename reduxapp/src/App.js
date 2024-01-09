import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Shop from './component/Shop';

function App() {
  return (
  <>
  <Navbar></Navbar>
  <div className="container">
      <Shop/>
    </div>
  </>
    
  );
}

export default App;
