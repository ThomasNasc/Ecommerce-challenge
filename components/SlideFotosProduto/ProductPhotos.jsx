import React, { useState } from "react";
import styled from "styled-components";
import { Products } from "../../core/Products/productsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Thumbnail from "./Thumbnail";
const SlideProductPhotos = styled.div`
  width: 100%;

  @media screen and (min-width: 700px) {
    width: 80%;
  }
  div {
    position: relative;
  }
  .ImagemPrincipal {
    width: 100%;
    @media screen and (min-width: 700px) {
      border-radius: 30px;
    }
  }
  .botao {
    position: absolute;
    top: calc(50% - 25px);
    width: 50px;
    height: 50px;
    border-radius: 50px;
    border: none;
    font-size: 24px;
  }
  .avancar {
    right: 2vw;
  }
  .voltar {
    left: 2vw;
  }
`;

function ProductPhotos(props) {
  const [actualImage, setActualImage] = useState(0);
  const [Thumbref, setThumbRerf] = useState("");
  function CatchThumbRef(ref) {
    setThumbRerf(ref);
    console.log(ref.current.offsetWidth);
  }
  console.log(Products["0001"].value_with_discont);
  return (
    <SlideProductPhotos>
      <div>
        <img
          className="ImagemPrincipal"
          src={Products["0001"].Image_Product[actualImage]}
          alt=""
        />
        <button
          onClick={() => {
            actualImage === 0
              ? [
                  setActualImage(Products["0001"].Image_Product.length - 1),
                  Thumbref.current.scrollTo(Thumbref.current.offsetWidth + 1000, 0),
                ]
              : [setActualImage(actualImage - 1), Thumbref.current.scrollBy(
                 -(Thumbref.current.offsetWidth / 100) * 25,
                0
              ),];
          }}
          className="botao voltar"
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button
          onClick={() => {
            actualImage === Products["0001"].Image_Product.length - 1
              ? [setActualImage(0), Thumbref.current.scrollTo(0, 0)]
              : [
                  setActualImage(actualImage + 1),
                  Thumbref.current.scrollBy(
                    (Thumbref.current.offsetWidth / 100) * 25,
                    0
                  ),
                ];
          }}
          className="botao avancar"
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
      <Thumbnail
        setActualImage={setActualImage}
        setDarkShow={props.setDarkShow}
        actualImage={actualImage}
        CatchThumbRef={CatchThumbRef}
      />
    </SlideProductPhotos>
  );
}

export default ProductPhotos;
