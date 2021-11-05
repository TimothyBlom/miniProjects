import React, {useEffect, useState} from 'react';
import './style/App.css';
import Logo from "./images/3DLogo.png";
import boxArt from './images/boxArt/ratchet1box.png'

function App() {
  return (
    <div className="App">

    <div className="Header">
      <img src={Logo} className="headerLogo" alt="" />
    </div>

      <div className="exampleContainer">
        <img src={boxArt} className="boxButton" alt="" />
      </div>

    </div>
  );
}

export default App;