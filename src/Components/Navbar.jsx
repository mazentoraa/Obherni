import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
        <div className="logo">
            <img src="src/img/logo.png" alt="logo"/>
            <span>Obherni</span>
        </div>
      <div className='nav-items'>
        <Link to='/'>
            <div className='nav-item'>
            Home
            <img src="src/img/gen-icon.png" width="20px" alt="exp-icon"/>
            </div>
        </Link>
        <Link to='/generate'>
            <div className='nav-item'>
                Generate
                <img src="src/img/gen-icon.png" width="20px" alt="gen-icon"/>
            </div>
        </Link>
        <Link>
            <div className='nav-item'>
                Login
            </div>
        </Link>
        </div>
    </nav>
  )
}