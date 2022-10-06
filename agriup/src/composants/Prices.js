import React from 'react';

const Prices = () => {
    return (
        <div>
            <h1 class="title ">Nos prix</h1>
            <div class="price-plan-wrapper">
                <div class="col-lg-4  col-md-6 ">
                    <div class="pricing-table-4">
                        <div class="price-header">
                            <div class="icon"><i class="fa fa-paper-plane"></i></div>
                            <h3 class="title">Simulation</h3>
                            <div class="price"><span class="dollar">€</span>0<span class="month">/Mois</span></div>
                        </div>

                        <div class="price-body">
                            <ul>
                                <li>Simulations illimitées</li>
                                <li>Comparaisons et résultats</li>
                                <li>Un choix de cultures limité</li>
                                <li>Contact mail</li>
                                <li>X</li>
                                <li>X</li>
                            </ul>
                        </div>
                        <div class="price-footer">
                            <a class="order-btn" href="">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4  col-md-6 ">
                    <div class="pricing-table-4">
                        <div class="price-header">
                            <div class="icon"><i class="fa fa-rocket"></i></div>
                            <h3 class="title">Soft-Power</h3>
                            <div class="price"><span class="dollar">€</span>50<span class="month">/Mois</span></div>
                        </div>

                        <div class="price-body">
                            <ul>
                                <li><b>Free</b> Forfait Simulation</li>
                                <li>Sauvegarde de données</li>
                                <li>Un choix de cultures plus large</li>
                                <li>Service client téléphonique</li>
                                <li>Conseillés disponible 5j/7</li>
                                <li>Calculs prévisionnels </li>
                            </ul>
                        </div>
                        <div class="price-footer">
                            <a class="order-btn" href="">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prices;
