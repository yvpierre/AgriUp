import React from 'react';
import Parcelle from '../composants/Parcelle';
import $ from "jquery";
import ReactDOM from "react-dom";
import ListParcelles from "./ListParcelles";

const Form = () => {

    return (
        <form id="formCalc">
            <ListParcelles/>
            <div className={"listeParcelles"}>

            </div>


            <div class="form-control" id="email-control">
                <label for="email" id="label-email">
                    Email
                </label>
                <p class="optionnel">Si vous souhaitez recevoir les résultats par mail</p>
                <input type="email"
                    id="email"
                    placeholder="Enrez votre email" />
            </div>
            <div className={"form--btnSubmit"}>
                Consulter mes résultats
            </div>
        </form>

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

$(document).on("click", ".form--btnSubmit", function() {
    console.log(getUserResponse());
    // window.open("result", "_self")
})




export default Form;