import React from 'react';
import Parcelle from '../composants/Parcelle';
import $ from "jquery";

const Form = () => {
    return (
        <form id="form">
            <Parcelle />
            <button id="new" value="submit" disabled="">
                Nouvelle parcelle
            </button>
            <div class="form-control" id="email-control">
                <label for="email" id="label-email">
                    Email
                </label>
                <p class="optionnel">Si vous souhaitez recevoir les résultats par mail</p>
                <input type="email"
                    id="email"
                    placeholder="Enrez votre email" />
            </div>
            <div className={"btnSubmit"}>
                Consulter mes résultats
            </div>
        </form>

    );
};


export default Form;