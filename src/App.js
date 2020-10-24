import React, { useState } from 'react';
import './App.css';

function App() {

  const bgColorCode = '#8e44ad'
  const [bgColor, setBgColor] = useState(bgColorCode)

  const buttonTitle = 'Click Here'
  const [btnTitle, setBtnTitle] = useState(buttonTitle)

  const bgChange = () => {
    // console.log('clicked')
    let newBgColorCode = '#34495e';
    setBgColor(newBgColorCode);

    let newBtnTitle = 'Oppss!! 😮 ';
    setBtnTitle(newBtnTitle);
  }

  const doubleClick = () => {
    let newBgColorCode = '#033669';
    setBgColor(newBgColorCode);
    setBtnTitle('Congrats!! ㊗️ ');
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <button onMouseEnter={bgChange} onMouseLeave={doubleClick}>{btnTitle}</button>
    </div>
  );
}

export default App;
