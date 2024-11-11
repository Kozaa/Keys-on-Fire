import React from "react";
import styled from "styled-components";
import ActionText from "./ActionText";

const StyledFooter = styled.footer`
  width: 100%;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  text-align: center;
  gap: 24px;
`;

const goTo = (route: string) => (window.location = route as any);

const Footer = () => (
  <StyledFooter>
    <ActionText
      handleClick={() => goTo("https://github.com/Kozaa/Keys-on-Fire")}
    >
      code
    </ActionText>

    <ActionText handleClick={() => goTo("https://www.datamuse.com/api/")}>
      words
    </ActionText>
  </StyledFooter>
);

export default Footer;
