import React from "react";
import styled from "styled-components";

const StyledText = styled.span`
  :hover {
    cursor: pointer;
    border-bottom: ${({ theme }) => `${theme.colors.secondary} 2px solid`};
  }

  font-size: 24px;
`;

interface Props {
  children: string;
  handleSetPage: () => void;
}

const NavButton = ({ children, handleSetPage }: Props) => {
  return (
    <StyledText onClick={handleSetPage}>{children}</StyledText>
  );
};

export default NavButton;
