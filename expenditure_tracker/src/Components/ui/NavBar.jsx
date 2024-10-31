import React from 'react';
import './navbar.css'; // Import the CSS file for styling
import Home from './Assets/home.png';
import Stats from './Assets/stats.png';
import Reco from './Assets/reco.png';
import More from './Assets/more.png';
const NavBar = () => {
  return (
    <nav className="bnavbar">
      <ul>
        <li><a href="/"><img src={Home} alt="Home" /></a></li>
        <li><a href="/statistics"><img src={Stats} alt="Statistics" /></a></li>
        <li><a href="/recommendations"><img src={Reco} alt="Recommendations" /></a></li>
        <li><a href="/more"><img src={More} alt="More" /></a></li>
      </ul>
    </nav>
  );
};

export default NavBar;