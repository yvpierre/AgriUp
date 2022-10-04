import React from 'react';
import Logo from '../composants/Logo';
import Navigation from '../composants/Navigation';

const About = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <div className="aboutTV">
                <h1>A Propos</h1>
                <br />
                <p>oai.</p>
            </div>
        </div>
    );
};

export default About;
