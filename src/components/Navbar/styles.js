import styled from "styled-components";

export const NavbarContent = styled.div`
  min-height: 85px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 4.5rem;
  z-index: 999;

  @media (max-width: 1200px) {
    padding: 0 3rem;
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

export const LogoLink = styled.a`
  height: 30px;
  width: 150px;
  text-decoration: none;
  cursor: pointer;
  object-fit: contain;

  & img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    & a:nth-child(2) {
      background-color: red;
      display: none;
    }
  }
`;
