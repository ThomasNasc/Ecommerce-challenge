import React, { useState } from "react";
import ProductPhotos from "./ProductPhotos";
import Thumbnail from "./Thumbnail";
import styled from "styled-components";
import DarkShowSlide from "./DarkShowSlide";

const DisplayImages = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 700px) {
    width: 50%;
    margin-top: 8vh;
  }
`;
function ImagesStructure(props) {
  const [darkShow, setDarkShow] = useState(false);

  return (
    <DisplayImages>
      <ProductPhotos setDarkShow={setDarkShow} />
      {darkShow ? <DarkShowSlide setDarkShow={setDarkShow} /> : ""}
    </DisplayImages>
  );
}

export default ImagesStructure;
