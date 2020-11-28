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

interface Props {
  handleSetPage: (newPage: string) => void;
  page: string;
}

const Header = ({ handleSetPage, page }: Props) => (
  <StyledHeader>
    <NavButton handleSetPage={handleSetPage} selected={page === "Practice"}>
      Practice
    </NavButton>
    <Logo />
    <NavButton handleSetPage={handleSetPage} selected={page === "Race"}>
      Race
    </NavButton>
  </StyledHeader>
);

export default Header;
