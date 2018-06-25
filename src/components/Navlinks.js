import React from 'react';
import {NavLink} from 'react-router-dom';
const NavLinks = () =>{
    return(
        <nav className="main-nav">
        <ul>
          <li><NavLink to ='/search/bread'>Bread</NavLink></li>
          <li><NavLink to ='/search/chessboard'>Chessboard</NavLink></li>
          <li><NavLink to ='/search/waterfall'>Waterfall</NavLink></li>
        </ul>
      </nav>
    )
}
export default NavLinks;