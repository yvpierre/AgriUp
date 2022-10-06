import React from 'react';

const Parcelle = (index) => {


    return (
        <div className="parcelle">
            <div id="controls">
                <div></div>
                <hr />
                <br />
                <div class="form-control">
                    <label for="name" id="label-name">
                        Taille de la parcelle
                        <p class="required">* nécessaire</p>
                    </label>
                    <div id="area">
                        <input type="number"
                            placeholder="Entrez la superficie" />
                        <p id="unite">m²</p></div>
                </div>
                <div class="form-control">
                    <label for="region" id="label-region">
                        Où se trouve cette parcelle ?
                        <p class="required">* nécessaire</p>
                    </label>
                    <select name="region" id="region">
                        <option value="null">Séléctionner</option>
                        <option value="but">Nouvelle-Aquitaine</option>
                    </select>
                </div>
                <div class="form-control">
                    <label for="plant" id="label-plant">
                        Que cultivez-vous sur cette parcelle ?
                        <p class="required">* nécessaire</p>
                    </label>
                    <select name="plant" id="plant">
                        <option value="null">Séléctionner</option>
                        <option value="Le maïs">Le maïs</option>
                        <option value="Le soja">Le soja</option>
                        <option value="Le blé">Le blé</option>
                        <option value="Les vignes">Les vignes</option>
                    </select>
                </div>
                <div class="form-control">
                    <label for="ground" id="label-ground">
                        Quel type de sols composent votre parcelle ?
                        <p class="required">* nécessaire</p>
                    </label>
                    <select name="ground" id="ground">
                        <option value="null">Séléctionner</option>
                        <option value="1.85">Argiles</option>
                        <option value="1.80">Limons</option>
                        <option value="0.70">Sables</option>
                        <option value="1.65">Argiles - sableuses</option>
                        <option value="1.95">Argiles - limoneux</option>
                        <option value="1.25">Limons - sableux</option>
                        <option value="1.70">Argiles - sablo - limoneux</option>
                    </select>
                </div>
                <div class="form-control">
                    <label for="climat" id="label-climat">
                        Quel climat correspond le plus à celui de votre parcelle
                        <p class="required">* nécessaire</p>
                    </label>
                    <select name="climat" id="climat">
                        <option value="null">Séléctionner</option>
                        <option value="ocean">Climat océanique</option>
                        <option value="continent">Climat continental</option>
                        <option value="mediterranee">Climat méditerranéen</option>
                        <option value="mountain">Climat de montagne</option>
                    </select>
                </div>
                <div class="form-control">
                    <label for="name" id="label-name">
                        Combien consommez-vous actuellement ?
                    </label>
                    <div id="area">
                        <input type="number"
                            placeholder="Entrez la consommation" />
                        <p id="unite">m³</p></div>
                </div>
            </div>
            <div id="delControl">
                <button class="delete-control"> <img src={require("./../assets/img/close.png")} alt="delete_button" /> </button>
            </div>

        </div >
    );
};

export default Parcelle;