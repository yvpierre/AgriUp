import React from 'react';
import Parcelle from '../composants/Parcelle';

const Form = () => {
    return (

        <form id="form">
            <Parcelle />
            <Parcelle />
            <button id="new" value="submit" disabled="">
                Nouvelle parcelle
            </button>
            <div className="form-control" id="email-control">
                <label for="email" id="label-email">
                    Email
                </label>
                <p className="optionnel">Si vous souhaitez recevoir les résultats par mail</p>
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