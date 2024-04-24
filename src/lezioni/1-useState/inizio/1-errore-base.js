import React from "react";
//Far vedere che il componente non si riaggiorna ma la variabile si
//Spiegare che cosa è un React Fragment e che è possibile abbreviarlo
const ErroreBase = () => {
  let titolo = "Hello world!";

  const cambiaTitolo = () => {
    titolo = "Nuovo titolo";
    console.log(titolo);
  };
  return (
    <React.Fragment>
      <h2>{titolo}</h2>
      <button
        type="button"
        className="btn btn-info my-3"
        onClick={cambiaTitolo}
      >
        Change me
      </button>
    </React.Fragment>
  );
};

export default ErroreBase;
