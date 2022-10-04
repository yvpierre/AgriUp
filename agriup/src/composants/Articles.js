import React from 'react';
import ArticleCard from "./ArticleCard";

const Articles = props => {
    const animals = ["Dog", "Bird", "Cat", "Horse"];

    return (
        <div>
            <div className={"articlesTitle"}>Découvrez nos derniers articles</div>
            <div className={"articles"}>
                {animals.map(animal => (
                    <ArticleCard>{animal}</ArticleCard>
                ))}
            </div>
        </div>
    );
}

export default Articles;