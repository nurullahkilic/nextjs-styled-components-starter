import styled from "styled-components";

const ButtonInterface = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  flex-direction: ${({ reverse }) =>
    !reverse ? "row" : "row-reverse"};
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 6px;
  gap: 4px;
  min-height: 40px;
`;

export const ButtonContent = styled(ButtonInterface)`
  background: rgba(226, 240, 253, 0.082);
  border: 1px solid rgba(223, 239, 254, 0.137);

  color: rgba(239, 247, 255, 0.616);

  & > .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  & > .children {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: rgba(239, 247, 255, 0.616);
  }
`;

export const HighlightedButtonContent = styled(ButtonInterface)`
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: -8px 0px 20px rgba(5, 162, 194, 0.3),
    0px 0px 20px rgba(112, 225, 200, 0.3), 8px 0px 20px rgba(255, 178, 36, 0.3);
  color: #000000;
  transition: 200ms ease-in-out box-shadow background-color;

  &:hover {
    background-color: #e8e8e8;

    box-shadow: 8px 0px 20px rgba(255, 178, 36, 0.3),
      0px 0px 20px rgba(112, 225, 200, 0.3),
      -8px 0px 20px rgba(5, 162, 194, 0.3);
  }

  & > .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
  }

  & > .children {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: rgba(239, 247, 255, 0.616);
  }
`;

export const SubmitButtonContent = styled.button`
  cursor: pointer;
  min-height: 40px;
  width: 100%;

  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(229, 231, 235, 0.7)	;
  border-radius: 6px;
  transition: 300ms ease-in-out background-color;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
  }

  & > .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
  }

  & > .children {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: rgba(239, 247, 255, 0.616);
  }
`;
