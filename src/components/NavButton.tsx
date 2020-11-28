import React from "react";
import styled from "styled-components";

const StyledNavButton = styled.button`
  width: 20%;
  height: 50%;
  background-color: ${({ theme }) => theme.colors.secondaryDark};
  padding: 20px 10px;

  :hover {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

interface TextProps {
  selected: boolean;
}

const StyledText = styled.span<TextProps>`
  border-bottom: ${({ theme, selected }) =>
    selected ? `${theme.colors.red} 2px solid` : "none"};
  transition: border-width 0.2s ease-in-out;
`;

interface Props {
  children: string;
  selected: boolean;
  handleSetPage: (newPage: string) => void;
}

const NavButton = ({ children, selected, handleSetPage }: Props) => {
  return (
    <StyledNavButton onClick={() => handleSetPage(children)}>
      <StyledText selected={selected}>{children}</StyledText>
    </StyledNavButton>
  );
};

export default NavButton;
