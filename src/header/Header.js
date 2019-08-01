import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import './Header.scss'

const authenticatedOptions=(user) => (
  <React.Fragment >
      <Dropdown  >
  <Dropdown.Toggle id='modal' variant="success" id="dropdown-basic">
  Welcome {user.email}
  </Dropdown.Toggle>

  <Dropdown.Menu>
  <Dropdown.Item href="#/home">Categories</Dropdown.Item>
    <Dropdown.Item href="#/change-password">Setting</Dropdown.Item>
    <Dropdown.Item href="#/result">My games</Dropdown.Item>
    <Dropdown.Item href="#/sign-out">Sign Out</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
    
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/">Home</Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header id='title' className="">
    {/* main-header */}
    <h1 > Word Search </h1>
    <nav>
      {/* { user && <span>Welcome, {user.email}</span>} */}
      { user ? authenticatedOptions(user) : '' }
      {/* { alwaysOptions } */}
    </nav>
  </header>
)

export default Header
