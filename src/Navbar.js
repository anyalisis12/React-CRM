import React from 'react'
import './Navbar.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import NewEntry from './components/NewEntry';
import Dashboard from './components/Dashboard';
import Sales from './components/Sales';
import ASTS from './components/ASTS';
import Agronomy from './components/Agronomy';
import Complaint from './components/Complaint';
import Home from './components/Home';
const Navbar = () => {
  return (
    <Router>
    <div>
      <nav className="navbar navbar-expand-lg">
      
      <div className="container-fluid">
        <a className="navbar-brand " href="#"> <img src="https://static.wixstatic.com/media/6cff20_5885981ac02d45a4af8edc5a4079dcd1~mv2.png/v1/fill/w_1000,h_262,al_c,q_85,usm_0.66_1.00_0.01/6cff20_5885981ac02d45a4af8edc5a4079dcd1~mv2.png" 
        alt="Netafim Logo" width="160" height="50" className="me-2"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" as={Link} to={"/home"} role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
              
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={"/dashboard"}>Dashboard</Link></li>
                <li><a className="dropdown-item" href="#">Report</a></li>
                <li><a className="dropdown-item" href="#">User Profile</a></li>
                <li><a className="dropdown-item" href="#">Support</a></li>
                <li><a className="dropdown-item" href="#">campaign Request</a></li>
                <li><a className="dropdown-item" href="#">Setting</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" as={Link} to={"/menu"} role="button" data-bs-toggle="dropdown" aria-expanded="false">Menu</a>
              <ul className="dropdown-menu">
                <li><Link  className="dropdown-item" to={"/newentry"}>New Entry</Link></li>
                
                <li><a className="dropdown-item" href="#">Customer List</a></li>
              </ul>
            </li>
            <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to={"/sales"}>Sales</Link>
             
            </li>
            <li class="nav-item">
            <Link class="nav-link active" aria-current="page" as={Link} to={"/asts"}>ASTS</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" as={Link} to={"/agronomy"}>Agronomy</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link active" aria-current="page" as={Link} to={"/complaint"}>Complaint</Link>
            </li>
           
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2 bg-white text-dark" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    </div>
    <div>
    
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/NewEntry' element={<NewEntry/>} />
<Route path='/Dashboard' element={<Dashboard/>} />
<Route path='/sales' element={<Sales/>} />
<Route path='/asts' element={<ASTS/>} />
<Route path='/agronomy' element={<Agronomy/>} />
<Route path='/complaint' element={<Complaint/>} />
</Routes>  
    </div>
    </Router>

  )
}

export default Navbar
