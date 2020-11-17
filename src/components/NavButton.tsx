import React from "react";
import styled from "styled-components";
import { DefaultTheme } from "styled-components";

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

const StyledText = styled.span`
  border-bottom: ${({
    theme,
    selected,
  }: {
    theme: DefaultTheme;
    selected: boolean;
  }) => (selected ? `${theme.colors.red} 2px solid` : "none")};
`;

interface Props {
  children: string;
  selected: boolean;
}

const NavButton = ({ children, selected }: Props) => {
  return (
    <StyledNavButton>
      <StyledText selected={selected}>{children}</StyledText>
    </StyledNavButton>
  );
};

export default NavButton;