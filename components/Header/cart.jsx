import React from "react";
import styled from "styled-components";
import { Products } from "../../core/Products/productsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
const Cart_Container = styled.div`
  width: 98vw;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  z-index:2;
  top: 104%;
  border-radius: 10px;
  min-height: 200px;
  background-color: white;
  padding: 16px;
  box-shadow: 0px 10px 20px  #afaeae;
@media screen  and (min-width:700px){
    width: 350px;
    right: 10px;
    transform: translateX(0);

}
  .cart_Tittle {
    width: 100%;
    margin-bottom: 25px;
    padding-bottom: 16px;
    border-bottom: 1px solid #94949476;
    font-size: 16px;
  }
  .Item_Cart {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    .product_img {
      width: 60px;
      height: 60px;
      border-radius: 10px;
      margin-right: 20px;
    }
    .trash_icon{
        padding: 15px;
    }
    .product_info {
      width: 50%;

      .product_name {
        font-weight: 400;
        text-overflow: ellipsis;
        width: 100%;
        max-width: 200px;
        height: 25px;
        overflow: hidden;
        white-space: nowrap;
      }

      .qtd_value_total {
        display: flex;
        .qtdxvalue {
          font-weight: 400;
          padding-right: 5px;
        }
      }
    }
  }
  .checkout_button{
    width: 100%;
    height: 45px;
    border: none;
    background-color: #ff8426;
    color: white;
    font-weight: 700;
    border-radius: 10px;
  }
`;
function Cart(props) {
  return (
    <Cart_Container>
      <h2 className="cart_Tittle">Cart</h2>
      <div className="Item_Cart">
        <img
          className="product_img"
          src={Products[0].Image_Product[0]}
          alt=""
        />
        <div className="product_info">
          <h4 className="product_name">Fall Limite Edition Sneakers</h4>
          <div className="qtd_value_total">
            <h4 className="qtdxvalue">$125 x 3</h4>
            <h4 className="total">$375</h4>
          </div>
        </div>
        <a className="trash_icon" >
          <FontAwesomeIcon icon={faTrashCan} />
        </a>
      </div>
      <button className="checkout_button">Checkout</button>
    </Cart_Container>
  );
}

export default Cart;
