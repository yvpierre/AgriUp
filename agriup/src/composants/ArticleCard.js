import React from 'react';

const ArticleCard = ({ nom }) => {
    return (
        <div className="card">
            <div className={"card--picture"}></div>
            <div className={"card--body"}>
                <div className={"card--title"}>{nom}</div>
                <div className={"card--btn"}>Découvrir</div>
            </div>
        </div>
    );
};

export default ArticleCard;