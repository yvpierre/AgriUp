import React from 'react';
import Parcelle from '../composants/Parcelle';
import $ from "jquery";
import ReactDOM from "react-dom";
import ListParcelles from "./ListParcelles";
import Result from "./Result";
import Footer from "./Footer";

const Form = () => {

    let propsRes;
    $(document).on("click", ".form--btnSubmit", function() {
        console.log(propsRes)
        propsRes = {
            enter_surface: $('.form--parcelleTaille').val(),
            enter_plant: $('#plant option:selected').val(),
            enter_land: $('#ground option:selected').val(),
            enter_actual_used_water: $('.form--conso').val()
        }

        $('.resultBody').css("display", "none") ? $('.resultBody').css("display", "flex") : console.log("display ok")

        $('.fermerResult').on("click", function() {
            $('.resultBody').css("display", "none")
        })


    })



    return (
        <div className={"bodyForm"}>
            <form id="formCalc">
                <ListParcelles/>
                <div className={"listeParcelles"}></div>

                <div className="form-control" id="email-control">
                    <label htmlFor="email" id="label-email">
                        Email
                    </label>
                    <p className="optionnel">Si vous souhaitez recevoir les résultats par mail</p>
                    <input type="email"
                           id="emshowResultail"
                           placeholder="Enrez votre email"/>
                </div>
                <div className={"form--btnSubmit"}>
                    Consulter mes résultats
                </div>
            </form>
            <Result props={propsRes}/>

            <div className={"footer--spe"}>
                <Footer />

            </div>

        </div>
    );
};



const getUserResponse = () => {

    let res = []
    // Taille parcelle
    res.push($('.form--parcelleTaille').val())
    // Location parcelle
    res.push($('#region option:selected').val())
    // Type plantation
    res.push($('#plant option:selected').val())
    // Type soil
    res.push($('#ground option:selected').val())
    // Type climate
    res.push($('#climat option:selected').val())
    // Conso soil
    res.push($('.form--conso').val())

    return res
}






export default Form;