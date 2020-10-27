import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (

            <nav id="mainNavbar" className="navbar navbar-dark navbar-expand-md py-0 fixed-top">

                <a href="/#" className="navbar-brand">CANDY</a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#NavLinks" aria-label="Toggle Navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="NavLinks">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="/#h" className="nav-link">HOME</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="/#" className="nav-link">ABOUTS</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="/#" className="nav-link">TICKETS</a>
                        </li>
                    </ul>
                </div>

            </nav>

        );
    }
}

export default Navigation;