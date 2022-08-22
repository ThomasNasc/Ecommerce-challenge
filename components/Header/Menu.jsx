import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const Menu_Style = styled.div`
  position: absolute;
  width: 60vw;
  min-width: 150px;
  top: 0;
  z-index: 3;
  transition: 1s;
  left: ${(props) => (props.toggle ? "-60vw" : "0")};
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  color: black;
  font-size: 24px;
  .Option-Menu {
    padding: 8px;
    padding-left: 15px;
  }
  @media screen and (min-width: 700px) {
    position: static;
    height: 100%;
    font-size: 16px;
    flex-direction: row;
    align-items: center;
    margin-right: auto;
    .Option-Menu {
      padding: 5px 10px 50px 10px;
      height: 100%;
      display: flex;
      align-items: center;
      width: 100%;
      width: auto;

      :hover {
        box-shadow: inset 0px -5px 0px 0px #ff7300;
      }
    }
  }
`;

function Menu(props) {
  return (
    <Menu_Style toggle={props.toggle}>
      <a onClick={() => props.changeToggle(!props.toggle)}>
        <FontAwesomeIcon className="Link-icon" icon={faXmark} />
      </a>
      <a className="Option-Menu" href="">
        Collections
      </a>
      <a className="Option-Menu" href="">
        Men
      </a>
      <a className="Option-Menu" href="">
        Women
      </a>
      <a className="Option-Menu" href="">
        About
      </a>
      <a className="Option-Menu" href="">
        Contact
      </a>
    </Menu_Style>
  );
}

export default Menu;
