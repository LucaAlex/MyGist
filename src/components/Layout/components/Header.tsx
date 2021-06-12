import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className="Navbar">
      <div className="leftSide"></div>
      <div className="rightSide">
        <input type="text" placeholder="Search..."></input>
      </div>
    </div>
  );
}
