import React, { useState } from "react";
import styled from "styled-components";
import Button_Qtd from "./Button_Qtd";
import { connect } from "react-redux";
const InfoProdutoContainer = styled.div`
  width: 100%;
  padding: 20px;

  @media screen and (min-width: 700px) {
    width: 50%;
    padding: 50px;
  }
  .company_sector {
    color: #e2833a;
    font-size: 12px;
    letter-spacing: 2px;
  }
  .product_name {
    margin-top: 12px;
    line-height: 32px;
  }
  .product_description {
    color: gray;
    margin-top: 16px;
    font-size: 12px;
    margin-bottom: 16px;
  }
  .container_values {
    display: flex;
    justify-content: space-between;
    font-family: sans-serif;
    @media screen and (min-width: 700px) {
      flex-direction: column;
    }
    .container_value_discont {
      display: flex;
      .product_discont {
        background-color: #f9ebdf;
        height: fit-content;
        padding: 3px 7px 3px 7px;
        border-radius: 5px;
        color: #e2833a;
        font-size: 16px;
        margin-left: 15px;
      }
    }
    .product_original_value {
      color: gray;
      text-decoration: line-through;
      font-size: 12px;
      @media screen and (min-width: 700px) {
        margin-top: 6px;
      }
    }
  }
  .container_buttons {
    display: flex;

    flex-direction: column;
    margin-top: 15px;
    @media screen and (min-width: 700px) {
      flex-direction: row;
    }
    .container_Qtd {
      display: flex;
      align-items: center;
      width: 100%;
      background-color: #fdede5;
      justify-content: space-between;
      border-radius: 10px;
      height: 50px;
      @media screen and (min-width: 700px) {
        flex-direction: row;
        width: 30%;
        min-width: 100px;
      }
      .buttonSetQtd {
        width: 60px;
        height: 50px;

        background-color: transparent;
        border: none;
        font-size: 28px;
        color: #e2833a;
        cursor: pointer;
      }
    }
    .buttonAddCart {
      margin-top: 20px;
      height: 50px;
      border-radius: 10px;
      border: none;
      background-color: #ff8426;
      color: white;
      cursor: pointer;
      :hover {
        background-color: #ffb67e;
      }
      @media screen and (min-width: 700px) {
        margin-top: 0px;
        width: 60%;
        margin-left: 20px;
      }
    }
  }
`;
// lembrar de criar variavel de produto selecionado e substituir o 0
function InfoProduto(props) {
  const ProductsInfo = props.products_list;
  return (
    <InfoProdutoContainer>
      <h3 className="company_sector">{ProductsInfo[0].category}</h3>
      <h1 className="product_name">{ProductsInfo[0].title}</h1>
      <p className="product_description">{ProductsInfo[0].description}</p>
      <div className="container_values">
        <div className="container_value_discont">
          <h2 className="product_value">
            {ProductsInfo[0].price.toLocaleString("en-US", {
              currency: "USD",
              style: "currency",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h2>
          <h3 className="product_discont">{ProductsInfo[0].discont}%</h3>
        </div>
        <h4 className="product_original_value">
          {ProductsInfo[0].original_value.toLocaleString("en-US", {
            currency: "USD",
            style: "currency",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h4>
      </div>

      <Button_Qtd />
    </InfoProdutoContainer>
  );
}
const mapStateToProps = (state) => ({
  products_list: state.products_list,
});

export default connect(mapStateToProps)(InfoProduto);
