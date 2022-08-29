import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Products } from "../../core/Products/productsList";
const ThumbnailContainer = styled.div`
  display: none;
  max-width: 100%;
  overflow: scroll hidden;
  justify-content: space-between;
  margin-top: 30px;
  gap: 6.6%;
  ::-webkit-scrollbar {
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #838282;
    border-radius: 15px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 15px;
    background-color: #c5c5c528;
  }
  img {
    max-width: 20%;

    border-radius: 15px;
    margin-bottom: 15px;
  }
  @media screen and (min-width: 700px) {
    display: flex;
  }
  .ActiveImage {
    filter: brightness(0.7);
    border: 3px solid #ff5e00;
  }
`;

function Thumbnail(props) {
  const ThumbRef = useRef();
  const passarRefThumb = () => props.CatchThumbRef(ThumbRef);
  useEffect(() => passarRefThumb());
  return (
    <ThumbnailContainer actualImage={props.actualImage} ref={ThumbRef}>
      {Products[0].image.map((item, index) => (
        <img
          alt={index}
          key={index}
          src={item}
          className={props.actualImage === index ? "ActiveImage" : ""}
          onClick={(e) => {
            props.setDarkShow ? props.setDarkShow(true) : "";
            props.setActualImage(index);
            props.actualImage === index ? e.target.scrollIntoView() : "";
          }}
        />
      ))}
    </ThumbnailContainer>
  );
}

export default Thumbnail;
