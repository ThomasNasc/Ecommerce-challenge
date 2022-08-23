import React, { useState } from "react";

function Button_Qtd(props) {
  const [Qtd, setQtd] = useState(0);
  return (
    <div className="container_buttons">
      <div className="container_Qtd">
        <button
          className="buttonSetQtd"
          onClick={() => setQtd(Qtd === 0 ? 0 : Qtd - 1)}
        >
          -
        </button>
        <h3>{Qtd}</h3>
        <button className="buttonSetQtd" onClick={() => setQtd(Qtd + 1)}>
          +
        </button>
      </div>
      <button className="buttonAddCart">Add to Cart</button>
    </div>
  );
}

export default Button_Qtd;
