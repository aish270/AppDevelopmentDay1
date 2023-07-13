
import React from 'react'
import Login from './components/Login'
import Attendance from './components/Attendance'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SideBar from './components/SideBar';
import Signup from './components/Signup';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Home from './components/Home';
import Policy from './Policy';
import Employees from './components/Employees';
import Progress from './components/Progress';
import Project from './components/Project';

function App() {
  return (
    
    <div>
     
     <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top"  style={{background:'black'}}>
          <div className="container">
          <div className="App" id="outer-container">
      <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
        
      </div>
    </div>
            <Link className="navbar-brand" to={'/sign-in'} style={{color:'white'}}>
              HR PORTAL
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item" >
                  <Link className="nav-link" to={'/sign-in'} style={{color:'white'}}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}  style={{color:'white'}}>
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/home'}  style={{color:'white'}}>
                    Home
                  </Link>
                </li>
                <li className="nav-item" >
                <Link className="nav-link" to={'/home'}  style={{color:'white'}}>
                   Profile
                  </Link>
                  
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<Signup/>} />
              <Route path="/home" element={<Home/>} />
              <Route path='/policy' element={<Policy/>}/>
              <Route path='/employee' element={<Employees/>}/>
              <Route path='/progress' element={<Progress/>}/>
              <Route path='/attendance' element={<Attendance/>}/>
              <Route path='/project' element={<Project/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
   
   </div>
  )
}

export default App