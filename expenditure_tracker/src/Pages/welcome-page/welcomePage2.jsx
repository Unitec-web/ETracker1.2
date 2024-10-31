import React from 'react'
import './Welcome.css'
import ellipDack from "../../Icons/ellipse1.png";
import ellipLight from "../../Icons/ellipse2.png";
import sportTeam from "../../Icons/sport-team 1.png";
import rightArrow from "../../Icons/Arrow_right.png";
import leftArrow from "../../Icons/Left Arrow.png";
import { Link } from 'react-router-dom';

function WelcomePage2() {
  return (
    <div className="container">

    <div className="flex-container">
      <div className="left-column">
        <div className="welcome-message">
          <div className="welcome-heading">
            {" "}
            <h1>Unity</h1>
            <h1>Money Manager</h1>
          </div>
          <p className="welcome-paragraph">
            Unity money Manager is a web and mobile application that can help
            you manage your finance in a simple way
          </p>
        </div>
      </div>
      <div className="right-column">
        <img src={sportTeam} alt="" />
      </div>
    </div>

    <div className="flex-container2">
      <div className="ellipse">
      <div className="ellipses-img">
        <div className="left-arrow">
        <Link to="/" style={{color:"white", textDecoration:"none"}}> <img className="left-arrow" src={leftArrow} alt=""width={20} height={20} /> </Link>
        </div>
     
    
      <div> <img src={ellipDack} alt="" width={10} height={10} /></div>
     
   <div><img src={ellipLight} alt=""width={10} height={10} /></div>
    </div>
      </div>
      <div className="right-btn">
     
        <div className="btn-create-Acount">
        <Link id='b1' to="/register" style={{color:"white", textDecoration:"none"}}> <button htmlFor ="b1"> Create Acount</button></Link></div>
        <div className="btn-login"> 
          <Link to="/login" style={{color:"white", textDecoration:"none"}}> <button>Login</button></Link></div>

        
 
      </div>
      <Link to="/" style={{color:"white", textDecoration:"none"}}><img className="leftarrow" src={leftArrow} alt=""width={10} height={30} /></Link>
    </div>
  </div>
  )
}

export default WelcomePage2
