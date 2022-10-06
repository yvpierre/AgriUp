import React, {useState} from 'react';
import Parcelle from "./Parcelle";

const ListParcelles = () => {

    const [count, setList] = useState(0)

    const getParcelles = () => {
        let res = []
        for(let j=0; j<count; j++) {
            res.push(toString(j))
            console.log(j)
        }
        return res;
    }

    return (
        <div>
            {getParcelles().map(i => (
                <Parcelle />
            ))}

            <button className={"form--btnParcelles"} type={"button"} onClick={() => setList(count + 1)}>
                Nouvelle parcelle
            </button>
            <div>Nombre de clics {count}</div>
        </div>
    );
};

export default ListParcelles;