import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  height: 50px;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: ${({ theme }) => theme.font.secondary};
  font-size: 0.6em;
  background-color: black;
`;

const Footer = () => (
  <StyledFooter>
    <div>
      <span>code: </span>
      <a
        href="https://github.com/Kozaa/Keys-on-Fire"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    </div>
    <span>Keys on Fire | copyright 2020</span>
    <div>
      <span>words from: </span>
      <a href="https://www.datamuse.com/api/" target="_blank" rel="noreferrer">
        Datamuse
      </a>
    </div>
  </StyledFooter>
);

export default Footer;
