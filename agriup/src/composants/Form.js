import React from 'react';
import Parcelle from '../composants/Parcelle';

const Form = () => {

    return (

        <form id="form">
            <Parcelle />
            <img id="okyanis" src={require("./../assets/img/fondForm.jpg")} alt="okyanis" />
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
            <button type="submit" value="submit" id="submit" disabled="">
                Consulter mes résultats
            </button>
        </form>

    );
};

export default Form;