import React, {useState} from 'react';
import Parcelle from "./Parcelle";

const ListParcelles = () => {

    const [count, setList] = useState(0)

    const counter = "test";

    const getParcelles = () => {
        let res = []
        for(let j=0; j<count; j++) {
            res.push(toString(j))
        }
        return res;
    }

   /* const removePeople = (event) => {
        let array = [...this.state.people]; // make a separate copy of the array
        let index = array.indexOf(e.target.value)
        if (index !== -1) {
            array.splice(index, 1);
            this.setState({people: array});
        }
    }*/

    const supprParcelle = (id) => {
        let res = []
        for(let i=0; i<count; i++) {
            if(i !== id){
                res.push(toString(i))
            }
        }

        return res;
    }


    return (
        <div>
            {getParcelles().map((elem, i) => (
                <Parcelle id= {i}/>
            ))}

            <button className={"form--btnSubmit"} type={"button"} onClick={() => setList(count + 1)}>
                Nouvelle parcelle
            </button>
        </div>
    );
};

export default ListParcelles;