import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  height: 5vh;
  padding: 0 20px;

  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  justify-content: center;

  font-family: ${({ theme }) => theme.font.primary};
  font-size: 0.6em;
  text-align: center;
  background-color: black;

  @media screen and (max-width: 768px) {
    grid-template-columns: 100px 1fr 100px;
  }
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
      <span>words: </span>
      <a href="https://www.datamuse.com/api/" target="_blank" rel="noreferrer">
        Datamuse
      </a>
    </div>
  </StyledFooter>
);

export default Footer;
