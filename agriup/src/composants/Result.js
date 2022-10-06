import React, {useEffect, useState} from 'react';
import Data from "../composants/Data";
import Navigation from "../composants/Navigation";
import Footer from "../composants/Footer";

const Result = (enter_surface, enter_plant, enter_land, enter_actual_used_water) => {

    const TableBasedPlants = [
        {plantes:"Le blé", racine:1.50, kc:0.90, etref:4.0, nbJours: 270},
        {plantes:"La betterave sucrière", racine:0.35, kc:0.80, etref:4.0, nbJours: 60},
        {plantes:"Le tournesol", racine:2.00, kc:0.60, etref:4.0, nbJours: 130},
        {plantes:"Le soja", racine:1.00, kc:0.80, etref:4.0, nbJours: 130},
        {plantes:"Le maïs", racine:0.45, kc:0.80, etref:4.0, nbJours: 180},
        {plantes:"Le sorgho", racine:1.00, kc:0.85, etref:4.0, nbJours: 130},
        {plantes:"Les Vignes", racine:3.00, kc:0.55, etref:4.0, nbJours: 335},
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
    const needWater = (arrayConst, enter_plant) => {
        let plant = getPlant(arrayConst, enter_plant)

        return plant[2] * plant[3] * plant[4]

    }

    // 4. Volumne d'eau nécessaire
    const volumeNeed= (arrayConst, enter_plant, enter_surface) => {
        let plant = getPlant(arrayConst, enter_plant)

        let water = plant[2]*plant[3]*plant[4]

        return water*(enter_surface/10000)*10
    }

    // 5. Check Irrigation
    const checkIrrigationNeeded =(enter_actual_used_water, arrayConst, enter_plant, enter_surface) => {
        let volume = volumeNeed(arrayConst, enter_plant, enter_surface)
        let plant = getPlant(arrayConst, enter_plant)

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


    // Real methods
    // {getPlant(TableBasedPlants,enter_plant)[0]}
    // {stockWater(TableBasedPlants,TableSoilTypes,enter_plant,enter_land)} mm
    // {volumeStock(TableBasedPlants,TableSoilTypes,enter_plant,enter_land,enter_surface)} m3
    // {needWater(10,TableBasedPlants, enter_plant)} mm
    // {volumeNeed(150, TableBasedPlants, enter_plant,enter_surface)} m3
    // {checkIrrigationNeeded(100, 150, TableBasedPlants, enter_plant,enter_surface)}

    /*<div className={"resultBody"}>
                <div className={"fermerResult"}>X</div>
                <div>getPlan</div>
                {getPlant(TableBasedPlants,enter_plant)[0]}
                <div>stockWater</div>
                {stockWater(TableBasedPlants,TableSoilTypes,enter_plant,enter_land)} mm
                <div>volumeStock</div>
                {volumeStock(TableBasedPlants,TableSoilTypes,enter_plant,enter_land,enter_surface)} m3
                <div>needWater</div>
                {needWater(10,TableBasedPlants, enter_plant)} mm
                <div>volumeNeed</div>
                {volumeNeed(150, TableBasedPlants, enter_plant,enter_surface)} m3
                <div>checkIrrigationNeeded</div>
                {checkIrrigationNeeded(100, 150, TableBasedPlants, enter_plant,enter_surface)}
            </div>*/
    return (
        <div>
            <Navigation/>
            <div className={"resultBody"}>
                <div className={"fermerResult"}>X</div>
                <div>getPlan</div>
                204
                <div>Stock d'eau</div>
                45.3 mm
                <div>Volume du stock</div>
                541 m3
                <div>Eau necéssaire</div>
                98.4 mm
                <div>Volume necéssaire</div>
                78 m3
                <div>Irrigation necéssaire</div>
                32
            </div>

        </div>
    );
};

export default Result;