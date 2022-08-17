import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";

const Cabecalho = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  @media screen and (min-width: 700px) {
  padding-bottom: 30px;
  padding-top: 30px;
  box-shadow: 0px 2px #a09f9f4c;
    }
  .Logo {
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
      padding: 15px;
      width: 20px;
      height: 20px;
    }
    .Link-Img-Avatar {
      padding: 10px;
      .Avatar-Img {
        width: 30px;
        height: 30px;
      }
    }
  }
`;

function Header(props) {
  const [toggle, useToggle] = useState(true);

  return (
    <Cabecalho>
      <a onClick={() => useToggle(!toggle)}>
        <FontAwesomeIcon className="Link-icon" icon={faBars} />
      </a>
      <img className="Logo" src="/logo.svg" alt="" />
      <Menu toggle={toggle} changeToggle={useToggle} />
      <div className="Cart-Avatar-Container">
        <a href="">
          <FontAwesomeIcon className="Link-Cart" icon={faCartShopping} />
        </a>
        <a href="" className="Link-Img-Avatar">
          <img className="Avatar-Img" src="/image-avatar.png" alt="" />
        </a>
      </div>
    </Cabecalho>
  );
}

export default Header;
