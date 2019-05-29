import React from "react";
import styled from "styled-components";

const NavButton = styled.button`
  width: 100%;
  height: 3em;
  font-size: calc(8px + 2vmin);
  background-color: ${props => (props.isActive ? "#888" : "#ccc")};
  :focus {
    outline: black;
    border-color: #38bdbf;
    box-shadow: 0 0 10px #38bdbf;
  }
`;

const NavButtonComponent = ({ text, clickAction, isActive }) => (
  <NavButton onClick={clickAction} isActive={isActive}>
    {text}
  </NavButton>
);

export default NavButtonComponent;
