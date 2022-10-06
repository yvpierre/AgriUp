import React, {useState} from 'react';
import Parcelle from "./Parcelle";

const ListParcelles = () => {

    const [count, setList] = useState(0)

    const getTab = () => {
        for(let i=0; i<count; i++) {
            <Parcelle/>
        }
    }


    return (
        <div>
            <React.Fragment>
            </React.Fragment>
            <Parcelle/>
            <button type={"button"} onClick={() => setList(count + 1)}>Clic</button>
            <div>Nombre de clics {count}</div>
        </div>
    );
};

export default ListParcelles;