//import logo from './logo.svg';
import './App.css';
//import Navbar from "./components/NavBar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Login} from './pages/Login.js';
import { Survey9} from './pages/Survey/Survey9.js';


function App() {
  return (
    <>
    {
      <Router>
        <Routes>
            <Route exact path = "/" element = {<Login />}>/</Route>
            
        </Routes>
      </Router>
    }
    </>
  );
}

export default App;
