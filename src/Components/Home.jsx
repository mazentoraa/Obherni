import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import Navbar from './Navbar'

export default function Home() {
  return (
    <>
        <Navbar />
        <div className='home-page'>
        <img src="src\img\logo.png" width="150px" alt="Logo"/>
        <div className='home-text'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis tempore laborum fugit explicabo esse corporis laudantium adipisci nihil cum aspernatur repellat nemo quia culpa possimus perspiciatis minima, assumenda quam. Corrupti!
        </div>
        <Link to='/generate'>
            <button>
            Generate
            <img src="src/img/gen-icon.png" width="25px" alt="gen-icon"/>
            </button>
        </Link>
        </div>
    </>
  )
}