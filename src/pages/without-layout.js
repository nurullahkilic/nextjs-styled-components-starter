import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import { RightArrow } from "@/components/icons";
import { Button } from "@/shared/Button";

import OutOf from "@/assets/outOf.gif";

export default function WithoutLayout() {
  return (
    <Container>
      <TopBar>
        <Button as={Link} href="/" title={"Home"} reverse={"true"}>
          <RightArrow style={{ transform: "rotate(180deg)" }} />
        </Button>
      </TopBar>
      <InnerContent>
        <StarterTitle>This page is out of layout.</StarterTitle>
        <Image
          src={OutOf}
          alt="out of layout"
          width={300}
          height={200}
          style={{objectFit: "cover"}}
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

const TopBar = styled.div`
  min-height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 3rem;
  z-index: 999;

  @media (max-width: 1200px) {
    padding: 0 3rem;
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
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
