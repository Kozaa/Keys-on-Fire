import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 8px 24px;
  border-radius: 8px;
  width: fit-content;
  font-size: 24px;

  :hover {
    cursor: pointer;
  }
`;

interface Props {
  children: string;
  style?: React.CSSProperties;
  handleClick?: () => void;
}

const Button = ({ children, style, handleClick }: Props) => (
  <StyledButton style={style} onClick={handleClick}>
    {children}
  </StyledButton>
);

export default Button;
