import React from 'react';

const Articles = props => {
    const article = [
        { id: 0, name: "L'agriculture va-t-elle manquer d'eau ?", urlPic: require("../assets/img/article/article1.jpg"), urlPage: "/about" },
        { id: 1, name: "L’agriculture contribue aux risques liés à l’eau", urlPic: require("../assets/img/article/article2.jpg"), urlPage: "https://sites.google.com/view/workshop7epsi/articles/lagriculture-contribue-aux-risques-li%C3%A9s-%C3%A0-leau" },
        { id: 2, name: "Les 10 fruits les plus riches en eau", urlPic: require("../assets/img/article/article3.jpg"), urlPage: "https://sites.google.com/view/workshop7epsi/articles/les-10-fruits-les-plus-riches-en-eau" },
        { id: 3, name: "Origine et domestication du maïs", urlPic: require("../assets/img/article/article4.jpg"), urlPage: "https://sites.google.com/view/workshop7epsi/articles/origine-et-domestication-du-ma%C3%AFs" },
    ];
    return (
        <div>

            <div className={"articlesTitle"}>Découvrez nos derniers articles</div>
            <div className={"articles"}>
                {article.map(content => (
                    <div className="card">
                        <img className={"card--picture"} src={content.urlPic}></img>
                        <div className={"card--body"}>
                            <div className={"card--title"}>{content.name}</div>
                            <a href={content.urlPage}>
                                <div className={"card--btn"}>
                                    Découvrir
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    );
}

export default Articles;