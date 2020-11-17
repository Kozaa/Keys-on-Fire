import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: ${({ theme }) => theme.font.secondary};
  background-color: black;
`;

const Footer: React.FC = () => (
  <StyledFooter>Keys on Fire | copyright 2020</StyledFooter>
);

export default Footer;
