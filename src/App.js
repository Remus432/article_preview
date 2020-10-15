import React, { useState } from 'react';
import Avatar from "./images/avatar-michelle.jpg";
import Share from "./images/icon-share.svg";
import Facebook from "./images/icon-facebook.svg";
import Twitter from "./images/icon-twitter.svg";
import Pinterest from "./images/icon-pinterest.svg";
import "./App.scss";


function App() {
  const [ toggled, setToggle ] = useState(false);

  function togglePop() {
    setToggle(!toggled);
  }

  return (
    <div className="article">
      <div className="article__img">
        
      </div>
      <div className="article__info">
        <h1 className="article__info-headline">
          Shift the overall look and feel by adding these  wonderful touches to furniture in your home
        </h1>
        <p className="article__info-description">
          Ever been in a room and felt like something was missing? Perhaps it felt slightly  bare and uninviting. I've got some simple tips to help you make any room feel complete.
        </p>
        <div className="article__info-author">
          <div className="article__info-author-container">
            <img className="article__info-author-pic" src={Avatar} alt="User Pic"/>
            <div className="article__info-author-name">
              <p>Michelle Appleton</p>
              <span>28 Jun 2020</span>
            </div>
          </div>
          <div className="article__info-share">
            <div className={`article__info-share-popup ${toggled ? "show" : "hidden"}`}>
              <span>SHARE</span>
              <img src={Facebook} alt="Facebook Icon" />
              <img src={Twitter} alt="Twitter Icon" />
              <img src={Pinterest} alt="Pinterest Icon" />
            </div>
            <span onClick={togglePop} className={`article__info-author-btn ${toggled ? "active" : "non-active"}`}>
              <img src={Share} alt="Share Icon"/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
