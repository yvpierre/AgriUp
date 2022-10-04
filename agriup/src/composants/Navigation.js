import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active--logo" : "")}>AgriUp</NavLink>
                <div className={'header--right'}>
                    <NavLink to="/forms" className={(nav) => (nav.isActive ? "nav-active" : "")}> <li>Simulation</li></NavLink>
                    <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}> <li>Articles</li></NavLink>
                    <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}> <li>L'équipe</li></NavLink>
                    <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}> <li>Mentions légales</li></NavLink>
                </div>
            </ul>
        </div >
    );
};

export default Navigation;