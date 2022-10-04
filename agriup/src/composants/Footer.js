import React from 'react';

const Form = () => {
    return (

        <footer class="footer-distributed">
            <div class="footer-left">
                <p class="footer-links">
                    <a class="link-1" href="#">Accueil</a>
                    <a href="#">À propos de nous </a>
                    <a href="#">Pricing</a>
                    <a href="#">About</a>
                    <a href="#">Faq</a>
                    <a href="#">Contact</a>
                </p>
                <p>Agri'UP | Raphaël Bailhet, Begum Cetin, Tudor Coman, Abdel Maha, Melwyne Mouroux, Yanis Periand, Sangmin Shim, Pierre Yvenou, Zainab Lahmar &copy; 2022</p>
            </div>
            <div class="footer-right">
                <a href="https://fr.linkedin.com/in/agri-up-493649252"><img src={require("./../assets/img/linkedin.png")} alt="linkedIn_page" /></a>
                <a href="https://www.instagram.com/agri_up33/?hl=fr"><img src={require("./../assets/img/instagram.png")} alt="instagram_page" /></a>
                <a href=""><img src={require("./../assets/img/youtube.png")} alt="youtube_page" /></a>
            </div>
        </footer>
    );
};

export default Form;
