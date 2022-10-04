import React from 'react';
import Logo from '../composants/Logo';
import Navigation from '../composants/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Logo />
            <div className={"heroBanner"}>
                <h1>Économisez votre eau.<br/>Optimisez votre exploitation</h1>
            </div>
        </div>
    );
};

export default Home;