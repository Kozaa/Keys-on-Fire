import React from "react";
import styled from "styled-components";
import NavButton from "./NavButton";
import Logo from "../assets/Logo";

const StyledHeader = styled.header`
  width: 70%;
  height: 25vh;

  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 1fr;
  }
`;

const Header = () => (
  <StyledHeader>
    <NavButton selected={true}>Practice</NavButton>
    <Logo />
    <NavButton selected={false}>Race</NavButton>
  </StyledHeader>
);

export default Header;
