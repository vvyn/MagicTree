//import logo from './logo.svg';
import './App.css';
//import Navbar from "./components/NavBar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Login} from './pages/Login.js';
import { Profile } from './pages/Profile.js';
import { ProfileMatch } from './pages/ProfileMatch.js';


function App() {
  return (
    <>
    {
      <Router>
        <Routes>
            <Route exact path = "/" element = {<Login />}>/</Route>
            <Route exact path = "/Profile" element = {<Profile />}>/</Route>
            <Route exact path = "/ProfileMatch" element = {<ProfileMatch />}>/</Route>
        </Routes>
      </Router>
    }
    </>
  );
}

export default App;
