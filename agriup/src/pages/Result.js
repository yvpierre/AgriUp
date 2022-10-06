import React, {useEffect, useState} from 'react';
import Data from "../composants/Data";
import Navigation from "../composants/Navigation";
import Footer from "../composants/Footer";

const Result = () => {

    const TableBasedPlants = [
        ["blé", 5500, 270, 1.50, 0.90, 4.00, 0, ""],
        ["betterave sucrière", 6500, 60, 0.35, 0.80, 4.00, 0, ""],
        ["tournesol", 1000, 130, 2.00, 0.60, 4.00, 2800, ""],
        ["soja", 6370, 130, 1.00, 0.70, 4.00, 0, ""],
        ["mais", 4000, 180, 0.45, 0.80, 4.00, 8100, ""],
        ["sorgho", 4750, 130, 1.00, 0.85, 4.00, 13330, ""],
        ["vignes", 5500, 270, 1.50, 0.90, 4.00, 0, "Le sol le plus adapté à la vigne sera pierreux, sablonneux, si possible argilo-calcaire, et bien drainé"],
    ]

    const TableSoilTypes = [
        ["Argiles", 1.85, "retient de facon efficace l'eau / une terre dure à travailler"],
        ["Limons", 1.80, "Intermédiaire entre argiles et sables"],
        ["Sables", 0.70, "Séche facilement donc les apports doivent être fréquents"],
        ["Argiles - sableuses", 1.65, ""],
        ["Argiles - limoneux", 1.95, ""],
        ["Limons - sableux", 1.25, ""],
        ["Argiles - sablo-limoneux", 1.70, ""]
    ]

    const TablePrecipitations = [
        [1,39.6],
        [2,48.9],
        [3,34.4],
        [4,62.4],
        [5,19.1],
        [6,99.8],
        [7,3.0],
        [8,26.3],
        [9,39.4],
        [10,6.4],
        [11,38],
        [12,38]
    ]


    /*  Line : desired line in the database
        Column : desired column in the database
        arrayConst : desired array amid all thoses in the result.js file
     */
    const getData = (line,column, arrayConst) => {
        for(let i in arrayConst){
            if(parseInt(i) === line){
                let elem = arrayConst[i]
                for(let j in elem){
                    // console.log(`i : ${i}, j : ${j}, col : ${column}`)
                    if(parseInt(j) === column){
                        console.log(elem[j])
                        return elem[j]
                    }
                }
            }
        }
    }

    const getLine = (lineIndex, arrayConst) => {
        let res = []
        for(let i in arrayConst){
            if(parseInt(i) === lineIndex){
                let elem = arrayConst[i]
                for(let j in elem){
                    // console.log(`i : ${i}, j : ${j}, col : ${column}`)
                    res.push(elem[j])
                }
            }
        }
        return res;
    }

    const getColumn = (colIndex, arrayConst) => {
        let res = []
        for(let i in arrayConst){
            for(let j in arrayConst[i]){
                // console.log(`i : ${i}, j : ${j}, col : ${column}`)
                if(parseInt(j) === colIndex){
                    res.push(arrayConst[i][j])
                }
            }

        }
        return res;
    }



    return (
        <div>
            <Navigation/>
            <div className={"resultBody"}>
                <h1>Vos résultats</h1>
                <h2>Specific data (e.g : data [3,4])</h2>
                {getData(3, 4, TableBasedPlants)}

                <h2>Specific line (e.g : line 3)</h2>
                {getLine(3, TableBasedPlants).map(elem => (
                    <p>{elem}</p>
                ))}

                <h2>Specific column (e.g : col 2)</h2>
                {getColumn(2, TableBasedPlants).map(elem => (
                    <p>{elem}</p>
                ))}
            </div>
            <Footer/>
        </div>
    );
};

export default Result;