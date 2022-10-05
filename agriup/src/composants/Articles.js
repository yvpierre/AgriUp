import React from 'react';

const Articles = props => {
    const titres = ["Une meilleure production de maïs grâce aux nouvelles technologies.", "Une nouvelle maladie fauche les champs de blé.", "Un agriculteur touche le gros lot en labourant son champ !", "Nos astuces pour les terreins en pente."];

    return (
        <div>
            <div className={"articlesTitle"}>Découvrez nos derniers articles</div>
            <div className={"articles"}>
                {titres.map(titre => (
                    <div className="card">
                        <div className={"card--picture"}></div>
                        <div className={"card--body"}>
                            <div className={"card--title"}>{titre}</div>
                            <div className={"card--btn"}>Découvrir</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Articles;