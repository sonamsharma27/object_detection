import './App.css';
import { BrowserRouter as Router,Routes,  Route } from "react-router-dom"
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import App2 from './App2';


function App() {
 
  return (
    <div className="ho " 
      style={{backgroundImage:"linear-gradient(315deg, #734ae8 0%, #89d4cf 74%)", backgroundColor:"734ae8"}}
    >
      <h1 className='center'>Object Detection WebApp</h1>
       <Router>
        
        <Routes>
       
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/web_cam" element={<App2/>} />

        </Routes>
   
      </Router>
    
      </div>
  );
}

export default App;
