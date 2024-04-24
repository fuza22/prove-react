import React, {useState} from "react";

const StateObject = () => {
  // const [name, setName] = useState("Dario");
  // const [age, setAge] = useState(24);
  // const [saluto, setSaluto] = useState("Ciao");

  const [person, setPerson] = useState({

    name: "Dario",
    age: 24,
    saluto: "Ciao"

  }


  )

const cambiaSaluto = () =>{

  setPerson({

    ...person, //questo è il precedente state e uso lo spread operator per fare una copia dell'oggetto non perdendo cosi il nome e poi modifico le chiavi che voglio modificare come ho fatto qui sotto senno l'oggetto non conterrebbe le chiavi non modificate
    age: 25,

  })
  // setSaluto("Ciao ho fatto gli anni");
  // setAge(25);

}

  return <div className="item shadow">

      <div className="text-left">

      <h5>{person.name}</h5>
      <h5>{person.age}</h5>
      <h6>{person.saluto}</h6>

      </div>

      <button className="button" onClick={cambiaSaluto}>
        Cambia il Saluto
      </button>

    </div>
};

export default StateObject;
