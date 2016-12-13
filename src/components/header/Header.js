import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return(
      <header>
        <div id="logo">
          <Link to="/"><img src="assets/logo.png" /></Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Works</Link></li>
            <li><Link to="about">About & Contacts</Link></li>
            <li><Link to="press">Press</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
