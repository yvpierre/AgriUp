import React from 'react';
import Navigation from '../composants/Navigation';
import Form from '../composants/Form';
import Footer from '../composants/Footer';
import $ from "jquery";

const About = () => {
    return (
        <div>
            <Navigation />
            <Form />
            <Footer />
        </div>
    );
};

$('.btnSubmit').click(function(event) {
    console.log("trsd")
    window.open("result", "_self")
})

export default About;
