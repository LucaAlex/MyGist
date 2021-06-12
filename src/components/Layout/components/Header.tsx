import React, { useContext } from 'react';
import { GlobalContext } from '../../../contexts/GlobalContext';
import './Header.css';
export default function Header() {
  const global = useContext(GlobalContext);

  return (
    <div className="Navbar">
      <div className="leftSide"></div>
      <div className="rightSide">
        <input
          type="text"
          placeholder="Search as you type..."
          onChange={(event: any) => {
            global.setUserName(event.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}
