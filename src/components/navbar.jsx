import React, { Component } from 'react';

//stateless Functional Component

const NavBar = ({ totalCounters}) => {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
            Navbar{" "}
            <span className="badge badge-pill badge-secondary">
                {totalCounters}</span>
        </a>
      </nav>
      );
};

// class  NavBar extends React.Component {
//     render() {

//     }
// }

export default NavBar;