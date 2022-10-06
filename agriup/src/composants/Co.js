import React from 'react';

const Co = () => {
    return (
        <div class="container">
            <div class="form form--signup">
                <div class="form--heading">Souscrivez !</div>
                <form autocomplete="off">
                    <input type="text" placeholder="Nom" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Mot de passe" />
                    <button class="button">Souscrire</button>
                    <br />
                    <br />
                    <a href="">Vous avez déjà un compte ?</a>
                </form>
            </div>
        </div>
    );
};

export default Co;