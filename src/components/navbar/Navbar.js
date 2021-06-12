import React from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { Sidebar } from '../sidebar/Sidebar';
import '../../shared.css';
import './navbar.css';

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-wrapper">
                <div className="navbar-wrapper-logo">
                    Fincoin
                </div>
                <Sidebar />
                <div className="hamburger-menu-icon">
                    <BiMenuAltRight />
                </div>
                <div className="navbar-wrapper-links">
                    <a className="navbar-wrapper-links-link--regular" href="#pricing">
                        Pricing
                    </a>
                    <a className="navbar-wrapper-links-link--regular" href="#products&tools">
                        Products & Tools
                    </a>
                    <a className="navbar-wrapper-links-link--regular" href="#support">
                        Support
                    </a>
                    <div className="navbar-wrapper-links-buttonlinks">
                        <a className="navbar-wrapper-links-link-buttonlinks-colored" href="#createaccount">
                            Create Account
                        </a>
                        <a className="navbar-wrapper-links-link-buttonlinks-plain" href="#signin">
                            Sign in
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

