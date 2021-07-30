import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {

  return (
    <div className="wrapper">
      <Link to="/" className="list all">
        All Tasks
          </Link>
      <Link to="/complete" className="list complete">
        Complete Tasks
          </Link>
      <Link to="/incomplete" className="list incomplete">
        Incomplete Tasks
          </Link>
    </div>
  )
}

export default Navbar