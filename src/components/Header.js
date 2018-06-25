import React, { Component } from 'react';
import NavLinks from './Navlinks';
import Searchform from './Searchform';

//returns header elements of searchbox and navigation
class Header extends Component {
    render() { 
    return(
    <div>
    <Searchform />
    <NavLinks />
    </div>
)
}
}
export default Header;