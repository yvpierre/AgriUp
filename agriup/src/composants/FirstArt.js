import React from 'react';

const FirstArt = () => {
    return (
        <div id="wow">
            <main class="section-main">
                <h2>ORIGINE ET DOMESTICATION DU MAÏS
                </h2>
                <section class="row-wrap">

                    <div class="section-flex">
                        <div class="section-left">
                            <p class="section-left-text">L’histoire du maïs commence il y a 9.000 ans, dans une haute vallée du Mexique, où s’écoule le fleuve Rio Balsas.Une plante locale,
                                la téosinte, est cultivée sur les flancs de cette vallée par les premières civilisations amérindiennes,
                                à 1.500 m d’altitude. La téosinte est une plante adaptée au climat tropical et aux étés humides de cette vallée. La plante porte de nombreux épis composés chacun de quelques grains seulement. Les grains récoltés étaient alors broyés pour obtenir une farine consommée par les populations locales.
                            </p><br />
                            <p class="section-left-text-2">Le maïs a été découvert par les Européens pour la première fois en 1492 par Christophe Colomb et son équipage dans les Caraïbes. À son retour en Europe, il ramènera de nombreuses plantes indigènes dont des épis de maïs : sa culture commencera au début du XVIe siècle sur la péninsule ibérique. D’autres explorateurs ramèneront du maïs en Europe : Magellan lors de son voyage au Brésil en 1520, ainsi que Jacques Cartier depuis le Québec en 1535.
                                En France, le maïs est cultivé à partir du XVIIe siècle et se répand rapidement dans le Sud-Ouest.

                            </p>
                        </div>
                        <div class="section-right">
                            <p class="section-left-text">
                                <img src={require("./../assets/img/article/mais.jpg")} height="200px" width="400px" alt="" />
                            </p>
                            <br /><br />
                            <p class="section-left-text-2"> Lors des crises de disette, le maïs devient l’alimentation privilégiée des populations rurales et des artisans, grâce à sa productivité supérieure à celle du froment et à sa régularité de rendement. Au XVIIIe siècle, le maïs poursuit son expansion vers l’Europe centrale et dans les vallées continentales françaises, jusqu’en Alsace. Les variétés de maïs des climats tempérés des Etats-Unis et du Canada s’adaptent facilement en

                            </p>
                        </div>
                    </div>
                    <div class="section-footer"></div>
                    <p class="section-left-text-3"> Europe et en France : variété population « Jaune de Bade » en Alsace, le « Grand roux basque », la « Lacaune » dans le Tarn, les « Blancs dorés de pays » (Béarn) ou encore la « Millette du Lauragais ».
                        Les premières variétés hybrides sont cultivées aux Etats-Unis à partir de 1933 dans l’Iowa. Dix ans plus tard, 100% du maïs cultivé aux Etats-Unis est hybride. Ces variétés hybrides américaines sont introduites en France en 1947 pour être testées dans des stations expérimentales. Dès 1957, l’INRA (Institut National de la Recherche Agronomique – aujourd’hui INRAE, Institut national de recherche pour l’agriculture, l’alimentation et l’environnement) crée les premiers hybrides français à partir des variétés américaines et des variétés populations françaises. Alors que le rendement moyen des cultures de maïs en France évolue peu jusqu’au milieu du XXe siècle, les nouvelles variétés hybrides permettent de doubler le rendement en une dizaine d’années. Le rendement moyen de 14 quintaux par hectare en 1948, passe à 28 quintaux en 1960.
                    </p>
                </section>
            </main>
        </div>
    );
};

export default FirstArt;