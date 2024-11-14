import React, { useState } from 'react';
import './topnavbar.css'; // Import the CSS file for styling
import SearchIcon from './Assets/search.png'; // Corrected import name for clarity
import { Link } from 'react-router-dom';

const TopNavbar = () => {
  const [selected, setSelected] = useState(null); // State for tracking selected menu item

  const handleSelect = (index) => {
    setSelected(index);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="app-title">
          <h1>Unity Money Manager</h1>
        </div>
        <div className="navbar-links">
          <ul>
            <li 
              className={selected === 0 ? 'active' : ''}
              onClick={() => handleSelect(0)}
            >
              <Link to="/homepage">Expenditure</Link>
            </li>
            <li 
              className={selected === 1 ? 'active' : ''}
              onClick={() => handleSelect(1)}
            >
              <Link to="/total">Total</Link>
            </li>
            <li 
              className={selected === 2 ? 'active' : ''}
              onClick={() => handleSelect(2)}
            >
              <Link to="/note">Notes</Link>
            </li>
          </ul>
        </div>
        <div className="language-search">
          <select className="language-selector">
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
          <div className="search-container">
            <input type="text" className="search-bar" placeholder="Search" />
            <button className="search-button">
              <img src={SearchIcon} alt="Search Icon" className="search-icon" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;