import Image from "next/image";
import Head from "next/head";
import styled from "styled-components";

import MichealScoot from "@/assets/boss.gif";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next & styled-components Starter</title>
        <meta name="description" content="Generated Next & styled-components Starter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <StarterTitle>Welcome to Next/styled-components Template</StarterTitle>
        <Description>
          Created by
          <a href="https://github.com/nurullahkilic" target="_blank">
            @nurullahkilic
          </a>
        </Description>
        <ImageContent
          src={MichealScoot}
          alt="Home Image"
          width={300}
          height={200}
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: white;
`;

const StarterTitle = styled.h1`
  margin: 0;
  font-family: "CabinetGrotesk-Extrabold";
  font-size: 3rem;
  line-height: 100%;
  font-weight: 900;
  text-align: center;
  max-width: 650px;
  padding: 0 30px;
`;

const Description = styled.h5`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 300;
  text-align: center;
  color: #dedede;
  margin-bottom: 20px;

  & a {
    margin-left: 5px;
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    font-weight: 600;
    transition: 300ms ease-in-out color;

    &:hover {
      color: #fff;
    }
  }
`;

const ImageContent = styled(Image)`
  object-fit: cover;
`;
