import React, {useRef} from 'react';
import Navigation from "../composants/Navigation";
import Footer from "../composants/Footer";

const Team = () => {
    const boxRef = useRef();

    const team = [
        {nom: "Raphaël Bailhet", age:"20", job:"Développeur", urlPic: require("../assets/img/team/default.jpeg")},
        {nom: "Begum Cetin", age:"21", job:"Dév", urlPic: require("../assets/img/team/begum.jpeg")},
        {nom: "Tudor Coman", age:"20", job:"SysOps", urlPic: require("../assets/img/team/tudor.jpeg")},
        {nom: "Abdel Maha", age:"24", job:"Dév", urlPic: require("../assets/img/team/default.jpeg")},
        {nom: "Zainab Lahmar", age: "25", job: "Dév", urlPic: require("../assets/img/team/zainab.jpeg")},
        {nom: "Melwyne Mouroux", age: "22", job: "Dév", urlPic: require("../assets/img/team/melwyne.jpeg")},
        {nom: "Yanis Periand", age: "19", job: "SysOps", urlPic: require("../assets/img/team/yanis.jpeg")},
        {nom: "Sangmin Shim", age: "29", job: "Dév", urlPic: require("../assets/img/team/sangmin.jpeg")},
        {nom: "Pierre Yvenou", age: "19", job: "Développeur React", urlPic: require("../assets/img/team/pierre.jpeg")},
    ];

    return (
        <div>
            <Navigation/>
            <div className={"team--body"}>
                <div className={"team--hero"}>
                    <div className={"hero--left"}>
                        <h1 className={"hero--title"}>Nous sommes Agri'Up </h1>
                        <q className={"hero--text"}>
                            Les meilleures choses qui arrivent dans le monde de l'entreprise ne sont pas le résultat du travail d'un seul homme.<br />C'est le travail d'une équipe.
                        </q>
                        <p>- Barack Obama</p>
                    </div>
                    <div className={"hero--right"}></div>
                </div>
                <div className={"team--members"}>
                    <h2>Découvrez l'équipe</h2>
                    <div className={"tabTeam"}>
                        {team.map(personne => (
                            <div ref={boxRef} className={"teamMember"}>
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