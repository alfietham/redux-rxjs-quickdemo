import React from "react";
import styled from "styled-components";

import NavButton from "./NavButton";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const NavBar = ({ setActiveTab, activeTab }) => (
  <ButtonContainer>
    <NavButton
      text="One Doggo"
      clickAction={() => setActiveTab("solo")}
      isActive={activeTab === "solo"}
    />
    <NavButton
      text="Many Doggos"
      clickAction={() => setActiveTab("multi")}
      isActive={activeTab === "multi"}
    />
    <NavButton
      text="Loop Doggo"
      clickAction={() => setActiveTab("loop")}
      isActive={activeTab === "loop"}
    />
  </ButtonContainer>
);

export default NavBar;
