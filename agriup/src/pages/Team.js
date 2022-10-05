import React from 'react';
import Navigation from "../composants/Navigation";
import Footer from "../composants/Footer";

const Team = () => {
    const team = [
        {nom: "Raphaël Bailhet", age:"20", job:"Dév", urlPic: require("../assets/img/team/default.jpeg")},
        {nom: "Begum Cetin", age:"20", job:"Dév", urlPic: require("../assets/img/team/default.jpeg")},
        {nom: "Tudor Coman", age:"20", job:"Dév", urlPic: require("../assets/img/team/default.jpeg")},
        {nom: "Abdel Maha", age:"20", job:"Dév", urlPic: require("../assets/img/team/default.jpeg")},
        {nom: "Zainab Lahmar", age: "20", job: "Dév", urlPic: require("../assets/img/team/zainab.jpeg")},
        {nom: "Melwyne Mouroux", age: "20", job: "Dév", urlPic: require("../assets/img/team/melwyne.jpeg")},
        {nom: "Yanis Periand", age: "20", job: "Dév", urlPic: require("../assets/img/team/yanis.jpeg")},
        {nom: "Sangmin Shim", age: "20", job: "Dév", urlPic: require("../assets/img/team/sangmin.jpeg")},
        {nom: "Pierre Yvenou", age: "20", job: "Dév", urlPic: require("../assets/img/team/pierre.jpeg")},

    ];

    return (
        <div>
            <Navigation/>
            <div className={"team--body"}>
                <div className={"team--hero"}>
                    <div className={"hero--left"}>
                        <h1 className={"hero--title"}>Nous sommes Agri'Up</h1>
                        <q className={"hero--text"}>
                            "Les meilleures choses qui arrivent dans le monde de l'entreprise ne sont pas le résultat du travail d'un seul homme.<br />C'est le travail d'une équipe."
                        </q>
                        <p>- Barack Obama</p>
                    </div>
                    <div className={"hero--right"}></div>
                </div>
                <div className={"team--members"}>
                    <h2>Découvrez l'équipe</h2>
                    <div className={"tabTeam"}>
                        {team.map(personne => (
                            <div className={"teamMember"}>
                                <img className={"member--picture"} src={personne.urlPic} width={175} height={175}/>
                                <div className={"member--body"}>
                                    <div className={"member--name"}>{personne.nom}</div>
                                    <div className={"member--age"}>{personne.age} ans</div>
                                    <div className={"member--job"}>{personne.job}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Team;