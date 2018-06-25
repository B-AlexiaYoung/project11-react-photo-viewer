import React, { Component } from 'react';
import NavLinks from './Navlinks';
import Searchform from './Searchform';
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