import Image from "next/image";
import styled from "styled-components";

import OutOf from "@/assets/outOf.gif";

export default function WithLayout() {
  return (
    <Container>
      <InnerContent>
        <StarterTitle>This page is with layout.</StarterTitle>
        <Image
          src={OutOf}
          alt="out of layout"
          width={300}
          height={200}
          style={{ objectFit: "cover" }}
        />
      </InnerContent>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  width: 100%;
  min-height: fit-content;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: black;
`;

const InnerContent = styled.div`
  flex: 1;
  min-height: calc(100% - 70px);
  min-height: fit-content;
  max-width: 500px;
  padding: 20px 20px 100px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StarterTitle = styled.h1`
  margin: 0;
  font-family: "CabinetGrotesk-Extrabold";
  font-size: 3rem;
  line-height: 100%;
  font-weight: 900;
  text-align: center;
  color: white;
  margin-bottom: 20px;
`;
