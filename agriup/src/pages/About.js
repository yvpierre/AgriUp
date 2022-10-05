import React from 'react';
import Navigation from '../composants/Navigation';
import Footer from '../composants/Footer';

const About = () => {
    return (
        <div>

            <Navigation />

            <div className="aboutTV" style={{ margin: 100 }}>
                <br />
                <br />
                <br />
                <br />
                <h1>Mentions légales</h1>
                <p>En vigueur au 05/10/2022</p>
                <br />
                <br />
                <p>Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la
                    Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et
                    visiteurs, ci-après l""Utilisateur", du site AgriUp33.fr , ci-après le "Site", les présentes mentions légales.
                    La connexion et la navigation sur le Site par l’Utilisateur implique acceptation intégrale et sans réserve
                    des présentes mentions légales.</p>
                <br />
                <br />
                <h2>ARTICLE 1 - L'EDITEUR</h2>
                <br />
                <br />
                <p>L'édition du Site est assurée par AgriUp saas au capital de 12 euros, immatriculée au Registre du
                    Commerce et des Sociétés de Bordeaux sous le numéro 123456789 dont le siège social est situé au 4
                    avenue de la place,
                    Numéro de téléphone 0612345678,
                    Adresse e-mail : agriup33@gmail.com.
                    N° de TVA intracommunautaire : 5
                </p>
                <br />
                <br />
                <h2>ARTICLE 2 - L'HEBERGEUR</h2>
                <br />
                <br />
                <p>L'hébergeur du Site est la société AgriUp33, dont le siège social est situé au
                    4 avenue de la place , avec le numéro de téléphone : 06.12.34.56.78
                </p>
                <br />
                <br />
                <h2>ARTICLE 3 - ACCES AU SITE</h2>
                <br />
                <br />
                <p>Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption
                    programmée ou non et pouvant découlant d’une nécessité de maintenance.
                    En cas de modification, interruption ou suspension du Site, l'Editeur ne saurait être tenu responsable.</p>
                <br />
                <br />
                <h2>ARTICLE 4 - COLLECTE DES DONNEES</h2>
                <br />
                <br />
                <p>Le Site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect
                    de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers
                    et aux libertés.En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un droit
                    d'accès, de rectification, de suppression et d'opposition de ses données personnelles. L'Utilisateur
                    exerce ce droit :
                    · via son espace personnel ;
                    Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site,
                    sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires
                    telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default About;
