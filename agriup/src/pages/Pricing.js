import React from 'react';
import Navigation from '../composants/Navigation';
import Footer from '../composants/Footer';
import Prices from '../composants/Prices';
import Co from '../composants/Co';

const Pricing = () => {
    return (
        <div>
            <Navigation />
            <Prices />
            <Co />
            <Footer />
        </div>
    );
};

export default Pricing;