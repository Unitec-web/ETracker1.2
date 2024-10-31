import React from 'react'
import './Welcome.css'
import finance from    "../../Icons/finance1.png";
import ellipDack from  '../../Icons/ellipse1.png'
import ellipLight from '../../Icons/ellipse2.png'
import rightArrow from '../../Icons/Arrow_right.png'
import { Link } from 'react-router-dom';

function WelcomePage1() {
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
           Unity Money manager is web and mobile application that help you to manege your finance in a simple way
          </p>
        </div>
      </div>
      <div className="right-column">
        <img src={finance} alt="" />
      </div>
    </div>

    <div className="flex-container2">
      <div className="ellipse">
      <div className="ellipses-img">
        
      <div className="ellipseForwelcome1"> <img src={ellipDack} alt="" width={7} height={7} /></div>
     
   <div className="ellipseForwelcome1"><img src={ellipLight} alt=""width={7} height={7} /></div>
    </div>
      </div>

      <div className="rigt-arrow">
       <Link to="/welcomepage2" style={{color:"white", textDecoration:"none"}}> <img src={rightArrow} alt="" width={20} height={20}/></Link>
      </div>
      
    </div>
  </div>
  )
}

export default WelcomePage1
