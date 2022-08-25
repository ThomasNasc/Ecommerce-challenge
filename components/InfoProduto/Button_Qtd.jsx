import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { addCart } from "../../core/redux/actions/cartAction";
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
      <button
        className="buttonAddCart"
        onClick={() =>
          props.addCart(
            props.products_list[0].id,
            Qtd,
            props.cart, props.products_list[0].value
          )
        }
      >
        Add to Cart
      </button>
    </div>
  );
}
const mapStateToProps = (state) => ({
  cart: state.Cart.cart,
  products_list: state.products_list,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addCart }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Button_Qtd);
