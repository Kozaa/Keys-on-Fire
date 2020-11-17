import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  height: calc(30vh - 50px);
`;

const Header: React.FC = () => <StyledHeader>header</StyledHeader>;

export default Header;
