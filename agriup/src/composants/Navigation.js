import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active--logo" : "")}>AgriUp</NavLink>
                <div className={'header--right'}>
                    <NavLink to="/pricing" className={(nav) => (nav.isActive ? "nav-active" : "")}> <li>Pricing</li></NavLink>
                    <NavLink to="/forms" className={(nav) => (nav.isActive ? "nav-active" : "")}> <li>Simulation</li></NavLink>
                    <NavLink to="/firstarticle" className={(nav) => (nav.isActive ? "nav-active" : "")}> <li>Article du jour</li></NavLink>
                    <NavLink to="/team" className={(nav) => (nav.isActive ? "nav-active" : "")}> <li>L'équipe</li></NavLink>
                    <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}> <li>Mentions légales</li></NavLink>
                    <NavLink to="/account" className={(nav) => (nav.isActive ? "nav-active" : "")}> <li><img src={require("./../assets/img/compte.png")} alt="youtube_page" /></li></NavLink>
                </div>
            </ul>
        </div >
    );
};

export default Navigation;