import React from 'react'
import './Generate.css'
import Navbar from './Navbar'

export default function Generate() {
  return (
    <>
        <Navbar/>
        <div className='generate-page'>
        <div className='left-side'>
            <span className='label'>Enter your text here</span>
            <textarea></textarea>
            <button>
            Interpret
            </button>
        </div>
        <div className='right-side'>
            <span className='label'>The topic is</span><span className='arrow-down'></span>
            <input readOnly></input>
        </div>
        </div>
    </>
  )
}