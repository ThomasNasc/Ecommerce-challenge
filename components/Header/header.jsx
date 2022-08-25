import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";
import Cart from "./cart";

const Cabecalho = styled.div`
  width: 100%;
  display: flex;
  height: 75px;
  background-color: white;
  align-items: center;
  justify-content: space-between;

  padding-right: 10px;
  position: relative;
  @media screen and (min-width: 700px) {
    height: 120px;
    padding-top: 30px;
    box-shadow: 0px 2px #a09f9f4c;
    align-items: flex-start;
  }
  .Logo {
    margin-top: 10px;
    margin-right: auto;
    display: flex;
    align-items: center;
    height: 20px;
    margin-bottom: 7px;
    @media screen and (min-width: 700px) {
      margin-right: 30px;
    }
  }

  .Link-icon {
    padding: 15px;
    width: 20px;
    height: 20px;
    color: gray;
    @media screen and (min-width: 700px) {
      display: none;
    }
  }

  .Cart-Avatar-Container {
    width: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .Link-Cart {
      padding: 12px;
      width: 20px;
      height: 20px;
    }
    .Link-Img-Avatar {
      padding: 12px;
      .Avatar-Img {
        width: 20px;
        height: 20px;
        @media screen and (min-width: 700px) {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
`;

function Header(props) {
  const [toggleMenu, useToggleMenu] = useState(true);
  const [toggleCart, useToggleCart] = useState(false);

  return (
    <Cabecalho>
      <a onClick={() => useToggleMenu(!toggleMenu)}>
        <FontAwesomeIcon className="Link-icon" icon={faBars} />
      </a>
      <img className="Logo" src="/logo.svg" alt="" />
      <Menu toggle={toggleMenu} changeToggle={useToggleMenu} />
      <div className="Cart-Avatar-Container">
        <a onClick={() => useToggleCart(!toggleCart)}>
          <FontAwesomeIcon className="Link-Cart" icon={faCartShopping} />
        </a>
        <a href="" className="Link-Img-Avatar">
          <img className="Avatar-Img" src="/image-avatar.png" alt="" />
        </a>
      </div>
      {toggleCart ? <Cart  /> : ""}
    </Cabecalho>
  );
}

export default Header;
