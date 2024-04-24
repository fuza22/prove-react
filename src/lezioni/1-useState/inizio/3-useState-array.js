import React, { useState } from "react";
import { data } from "../../../data"; // importo array di oggetti

const ArrayState = () => {
  const [people, setPeople] = useState(data); //dichiarato useState

  const removeItem = (id =>{

    let newPeople = people.filter(el => el.id !== id) // creato un removeItem che accetta un parametro in ingresso
    setPeople(newPeople) //imposta un nuovo valore dello state

  })

  return (
    <>
      {people.map((el) => {
        const { id, name } = el;
        return (
          <div key={id} className="item shadow">
            <h5>{name}</h5>
            <button type="button" className="button delete-button" onClick={() => removeItem(id)}>
              x
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ArrayState;
