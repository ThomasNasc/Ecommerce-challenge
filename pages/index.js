import styled from "styled-components";
import Header from "../components/Header/header";
import InfoProduto from "../components/InfoProduto/InfoProduto";
import DarkShowSlide from "../components/SlideFotosProduto/DarkShowSlide";
import ImagesStructure from "../components/SlideFotosProduto/ImagesStructure";

const EcommerceDisplay = styled.div`
  width: 100vw;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 700px) {
     flex-direction: row;
    }
  }
`;

export default function Home() {
  return (
    <EcommerceDisplay>
      <Header />
      <div className="content">
        <ImagesStructure />
        <InfoProduto />
      </div>
    </EcommerceDisplay>
  );
}
