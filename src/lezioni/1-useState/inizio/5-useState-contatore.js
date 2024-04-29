import React, {useState} from "react";

const CounterComponent = () => {
  const [contatore, setContatore] = useState(0);

  const reset = () => {

    setContatore(0);
  }

  const dimContatore = () => {

    setContatore( contatore - 1);

  }

  const aumenta = () => {

    // setContatore((oldValue) => {

    //  console.log(oldValue);
    //  return oldValue + 1;
    // })

      setTimeout( function () {

        setContatore(oldValue => {

          return oldValue + 1;

        });

      }, 2000);

  }

  return (
    <div className="bg-white shadow rounded py-5 w-75 col-6 offset-3">
      <h3> {contatore}</h3>
      <div className="d-flex justify-content-between">

        <button className="button my-2" onClick={dimContatore}>Diminuisci</button>
        <button className="button my-2" onClick={aumenta}>Aumenta</button>

      </div>
      <button className="button reset-button my-2" onClick={reset}>Resetta</button>
    </div>

  );
};

export default CounterComponent;

