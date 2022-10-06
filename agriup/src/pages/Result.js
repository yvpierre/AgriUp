import React, {useEffect, useState} from 'react';
import Data from "../composants/Data";
import Navigation from "../composants/Navigation";
import Footer from "../composants/Footer";

const Result = () => {

    const TableBasedPlants = [
        {plantes:"Le blé", racine:1.50, kc:0.90, etref:4.0},
        {plantes:"La betterave sucrière", racine:0.35, kc:0.80, etref:4.0},
        {plantes:"Le tournesol", racine:2.00, kc:0.60, etref:4.0},
        {plantes:"Le soja", racine:1.00, kc:0.80, etref:4.0},
        {plantes:"Le maïs", racine:0.45, kc:0.80, etref:4.0},
        {plantes:"Le sorgho", racine:1.00, kc:0.85, etref:4.0},
        {plantes:"Les Vignes", racine:3.00, kc:0.55, etref:4.0},
    ]

    const TableSoilTypes = [
        {type_sol:"Argiles", ru:1.85},
        {type_sol:"Limons",  ru:1.80},
        {type_sol:"Sables",  ru:0.70},
        {type_sol:"Argiles - sableuses",  ru:1.65},
        {type_sol:"Argiles - limoneux",  ru:1.95},
        {type_sol:"Limons - sableux",  ru:1.25},
        {type_sol:"Argiles - sablo-limoneux",  ru:1.70}
    ]

    const TablePrecipitations = [
        {mois: 1,precipitations:39.6},
        {mois: 2,precipitations:48.9},
        {mois: 3,precipitations:34.4},
        {mois: 4,precipitations:62.4},
        {mois: 5,precipitations:19.1},
        {mois: 6,precipitations:99.8},
        {mois: 7,precipitations:3.0},
        {mois: 8,precipitations:26.3},
        {mois: 9,precipitations:39.4},
        {mois: 10,precipitations:6.4},
        {mois: 11,precipitations:38},
        {mois: 12,precipitations:38}
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

    // Formulaire
    // Il faut les supprimer dès que l'on réussit à recevoir les données de formulaire
    // const enter_plant = "Le maïs"
    // const enter_land = "Argiles"
    // const enter_nb_day=150
    // const enter_surface = 15689
    // const enter_actual_used_water = 590

    const getPlant = (arrayConst, enter_plant) => {
        let result = []
        for (let i in arrayConst){
                if (arrayConst[i].plantes === enter_plant){
                    for(let j in arrayConst[i]){
                        result.push(arrayConst[i][j])
                    }
                }
            
        }
        return result
    }

    // 1. Stockage d'eau 
    const stockWater = (arrayConst1, arrayConst2, enter_plant, enter_land) => {
        let result = []
        let racine = getPlant(arrayConst1, enter_plant)[1]

        result.push(racine)

        for (let i in arrayConst2){
            if (arrayConst2[i].type_sol === enter_land){
                for(let j in arrayConst2[i]){
                    result.push(arrayConst2[i][j])
                }
            }
        
        }
        
        let result_calcul= racine*(2/3)*result[2]*1000

        return result_calcul
    }

    // 2. Volume de stockage 
    const volumeStock = (arrayConst1, arrayConst2, enter_plant, enter_land ,enter_surface) => {
        let stock_water = stockWater(arrayConst1, arrayConst2, enter_plant, enter_land)
        
        return stock_water*(enter_surface/10000)*10
    }

    // 3. Besoin d'eau
    const needWater = (enter_nb_day, arrayConst, enter_plant) => {
        let plant = getPlant(arrayConst, enter_plant)

        return enter_nb_day * plant[2] * plant[3]

    }

    // 4. Volumne d'eau nécessaire
    const volumeNeed= (enter_nb_day, arrayConst, enter_plant, enter_surface) => {
        let water = needWater(enter_nb_day, arrayConst, enter_plant)

        return water*(enter_surface/10000)*10
    }

    // 5. Check Irrigation 
    const checkIrrigationNeeded =(enter_actual_used_water, enter_nb_day, arrayConst, enter_plant, enter_surface) => {
        let volume = volumeNeed(enter_nb_day, arrayConst, enter_plant, enter_surface)

        let result ="result"
        if (enter_actual_used_water < volume || enter_actual_used_water === volume){
            result = "Il faut arroser"
            return result
        }
        else{
            result = "Vous consommez beaucoup d'eau"
            return result
        }
    }

    return (
        <div>
            <Navigation/>
            <div className={"resultBody"}>
                <div>getPlan</div>
                {getPlant(TableBasedPlants,"Le maïs")[0]}
                
                <div>stockWater</div>
                {stockWater(TableBasedPlants,TableSoilTypes,"Le maïs","Argiles")} mm
                
                <div>volumeStock</div>
                {volumeStock(TableBasedPlants,TableSoilTypes,"Le maïs","Argiles",15689)} m3
                
                <div>needWater</div>
                {needWater(10,TableBasedPlants, "Le maïs")} mm

                <div>volumeNeed</div>
                {volumeNeed(150, TableBasedPlants, "Le maïs",15689)} m3

                <div>checkIrrigationNeeded</div>
                {checkIrrigationNeeded(100, 150, TableBasedPlants, "Le maïs",15689)}

                

{/* 

                <h2>Specific line (e.g : line 3)</h2>
                {getLine(3, TableBasedPlants).map(elem => (
                    <p>{elem}</p>
                ))}

                <h2>Specific column (e.g : col 2)</h2>
                {getColumn(2, TableBasedPlants).map(elem => (
                    <p>{elem}</p>
                ))} */}
            </div>
            <Footer/>
        </div>
    );
};

export default Result;