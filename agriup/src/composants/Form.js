import React from 'react';
import Parcelle from '../composants/Parcelle';
import $ from "jquery";
import ReactDOM from "react-dom";
import ListParcelles from "./ListParcelles";

const Form = () => {

    return (
        <form id="formCalc">
            <ListParcelles/>
            <div className={"form--btnParcelles"}>
                Nouvelle parcelle
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

$(document).on("click", ".form--btnSubmit", function() {
    console.log("trsfffd")
    window.open("result", "_self")
})

let listeParcelles =  [];

$(document).on('click', '.form--btnParcelles', function() {
    // ReactDOM.render(<Parcelle/>, $('.listParcelles'))
    console.log("clique")
    listeParcelles.push(<Parcelle/>)
    listeParcelles.map(parcelle => (
        ReactDOM.render(parcelle,document.querySelector(".listeParcelles"))
    ))
})






export default Form;