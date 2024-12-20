import React, { useState } from 'react';
import './Generate.css';
import Navbar from './Navbar';

export default function Generate() {
  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [isActive, setActive] = useState(false);

  const interpret = () => {
    setActive(true); 
    setDisplayText(""); 
    showResult(() => {
      setTimeout(() => {
        setActive(false); 
      }, text.length * 500);
    });
  };

  const showResult = (callback) => {
    let i = 0;

    const typeWriter = () => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
        setTimeout(typeWriter, 30);
      } else if (callback) {
        callback(); 
      }
    };

    typeWriter();
  };

  return (
    <>
      <Navbar />
      <div className="generate-page">
        <div className="left-side">
          <span className="label">Enter your text here</span>
          <textarea 
            onChange={(e) => setText(e.target.value)}
            value={text}
          ></textarea>
          <button onClick={interpret}>Interpret</button>
        </div>
        <div className="right-side">
          <span className="label">The topic is</span>
          <span className="arrow-down"></span>
          <input readOnly></input>
        </div>
      </div>
      <div className={isActive ? "anim result" : "result"}>
        {displayText}
      </div>
    </>
  );
}
