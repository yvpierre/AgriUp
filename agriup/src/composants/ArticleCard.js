import React from 'react';

const ArticleCard = () => {
    return (
        <div className="card">
            <div className={"card--picture"}></div>
            <div className={"card--body"}>
                <div className={"card--title"}>L’agriculture contribue aux risques liés à l’eau.
                </div>
                <div className={"card--btn"}>Découvrir</div>
            </div>
        </div>
    );
};

export default ArticleCard;