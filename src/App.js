import './App.css';
import { BrowserRouter as Router,Routes,  Route } from "react-router-dom"
import Login from './Login';
import Signup from './Signup';
import Home from './Home';

function App() {
 
  return (
    <div className="ho" 
      style={{backgroundImage:"linear-gradient(315deg, #734ae8 0%, #89d4cf 74%)", backgroundColor:"734ae8"}}
    >
       <Router>
        
        <Routes>
       
        <Route exact path="/home" element={<Home/>} />

        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/login" element={<Login/>} />
        </Routes>
   
      </Router>
    
      </div>
  );
}

export default App;
