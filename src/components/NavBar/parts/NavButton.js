import React from "react";
import styled from "styled-components";

const NavButton = styled.button`
  width: 40vmin;
  height: 3em;
  background-color: ${props => (props.isActive ? "#888" : "#ccc")};
`;

const NavButtonComponent = ({ text, clickAction, isActive }) => (
  <NavButton onClick={clickAction} isActive={isActive}>
    {text}
  </NavButton>
);

export default NavButtonComponent;
