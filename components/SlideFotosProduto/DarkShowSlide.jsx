import React from "react";
import styled from "styled-components";
import ProductPhotos from "./ProductPhotos";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const DarkContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  background-color: #0000009d;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 700px) {
    display: flex;
  }
  .PhotosContainer {
    display: flex;
    justify-content: center;
    width: 40vw;

    position: relative;
    .closeDarkShow {
      position: absolute;
      top: -60px;
      left: 85%;
      width: 50px;
      height: 50px;
      background-color: transparent;
      border: none;
      font-size: 32px;
      cursor: pointer;
      :hover{
        color: white;
      }
    }
  }
`;

function DarkShowSlide(props) {
  return (
    <DarkContainer>
      <div className="PhotosContainer">
        <button onClick={()=>props.setDarkShow(false)} className="closeDarkShow">
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <ProductPhotos />
      </div>
    </DarkContainer>
  );
}

export default DarkShowSlide;
