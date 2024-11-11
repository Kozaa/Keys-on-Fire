import React from "react";
import styled from "styled-components";
import ActionText from "./ActionText";
import Logo from "../assets/Logo";

const StyledHeader = styled.header`
  width: 100%;
  padding: 32px 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    padding: 8px 16px;
    flex-direction: column;
  }
`;

interface Props {
  handleSetPage: (newPage: string) => void;
  page: string;
}

const Header = ({ handleSetPage, page }: Props) => (
  <StyledHeader>
    <Logo />
    <ActionText
      handleClick={() =>
        handleSetPage(page === "Practice" ? "Race" : "Practice")
      }
    >
      {page === "Practice" ? "race mode" : "practice mode"}
    </ActionText>
  </StyledHeader>
);

export default Header;
