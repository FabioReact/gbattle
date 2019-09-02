import React from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import './App.css'
import Routes from './Routes'

const NavBar = () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/battle">Battle</NavLink>
    <NavLink to="/popular">Popular</NavLink>
  </nav>
)

const App = () => {
  return (
    <Router>
      <NavBar />   
      <Routes />
    </Router>
  );
}

export default App;
