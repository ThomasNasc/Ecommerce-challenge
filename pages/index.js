import styled from "styled-components";
import Header from "../components/header";

const EcommerceDisplay = styled.div`
 width: 100vw;
 max-width: 1400px;
 margin-left: auto;
 margin-right: auto;
`;

export default function Home() {
  return (
    <EcommerceDisplay>
      <Header />
    </EcommerceDisplay>
  );
}
