import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => (
    <div className="hero is-info">
        <div className="hero-head">
            <div className="container">
                <nav className="nav">
                    <div className="nav-left">
                        <a className="nav-item is-brand">
                            Pluto
                        </a>
                        <a className="nav-item">
                            Home
                        </a>
                        <a className="nav-item">
                            Simulator
                        </a>
                    </div>
                    <div className="nav-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="nav-right nav-menu">
                        <div className="nav-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <a className="button">
                                    <span className="icon">
                                        <i className="fa fa-sign-in"></i>
                                    </span>
                                        <span>Login</span>
                                    </a>
                                </p>
                                <p className="control">
                                    <NavLink
                                        to="/register"
                                        activeClassName="is-active"
                                        className="button"
                                    >
                                        <span className="icon">
                                            <i className="fa fa-registered"></i>
                                        </span>
                                        <span>Register</span>
                                    </NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
)

export default Navbar
