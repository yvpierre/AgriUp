import React from 'react';
import Navigation from '../composants/Navigation';
import ArticleCard from "../composants/ArticleCard";
import Articles from "../composants/Articles";
import Footer from "../composants/Footer";

const Home = () => {
    return (
        <div>
            <Navigation />
            <div className={"heroBanner"}>
                <h1>Économisez votre eau.<br />Optimisez votre exploitation.</h1>
            </div>
            <div className={"body"}>
                <div className={"body--pres"}>
                    <div className={"body--presText"}>L'eau est une denrée inestimable. Notre vie est étroitement liée à cette composition d'oxygène et d'hydrogène, notamment notre alimentation. Entre 70 et 80 % de la consommation mondiale d'eau est utilisée pour l'agriculture. C'est pourquoi l'économie d'eau dans l'agriculture et son utilisation sont deux des questions les plus importantes de ces dernières années.<br /><br />
                        Agri’Up est une idée novatrice pour révolutionner l’univers agricole. Dans un monde où l’écologie prend une place de plus en plus importante, il est nécessaire de revoir notre consommation d’eau.
                    </div>
                    <div className={"body--presRight"}>
                        <div className={"body--presText2"}>C’est pour cela que nous proposons une solution afin d’accompagner les agriculteurs. Sous la forme d’un simulateur, l’agriculteur peut rentrer toutes les données nécessaires pour connaitre la consommation d’eau optimal dont il a besoin pour sa production.</div>
                        <div className={"body--presImg"}>
                            <div className={"body--presBtn"}>Simulez vos besoins</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"stats"}>
                <div className={"stat stats--3"}>
                    <div className={"stats--3--chiffre stat--head"}>70%</div>
                    <div className={"stats--3--text"}>De la consommation d'eau mondiale est dédiée à l'agriculture</div>
                </div>
                <div className={"stat stats--1"}>
                    <div className={"stats--1--chiffre stat--head"}>302</div>
                    <div className={"stats--1--text"}>Litres d'eau par kilo économisés grâce à AgriUp</div>
                </div>
                <div className={"stat stats--2"}>
                    <div className={"stats--2--chiffre stat--head"}>25%</div>
                    <div className={"stats--2--text"}>de dépenses en eau en moins pour les agriculteurs partenaires</div>
                </div>
            </div>
            <Articles />
            <Footer />
        </div>
    );
};

export default Home;