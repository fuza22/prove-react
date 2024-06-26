import React, { useState } from "react"; 
// Gli Hooks devono essere usati con use davanti
// I componenti in cui usiamo gli hooks devono avere la prima lettera Maiuscola
// Gli Hook devono essere invocati all'interno del corpo/funzione del componente
// Gli Hook non possono essere utilizzati in maniera condizionale

const UsoBase = () => {
  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler);

  const [titolo, setTitolo] = useState("Hello World"); // dichiariamo useState destrutturandolo indicando valore(primo parametro) e la funzione (secondo parametro)
  const cambiaTitolo = () => {
    if(titolo === "Hello World"){

      setTitolo("React Magic");

    }
    else{

      setTitolo('Hello World')

    }
  };

  return (
    <>
      <h2> {titolo}</h2>
      <button
        type="button"
        className="btn btn-info shadow my-3"
        onClick={cambiaTitolo}
      >
        Cambiami
      </button>
    </>
  );
};

export default UsoBase;
