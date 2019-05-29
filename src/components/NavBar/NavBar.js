import React from "react";

import NavButton from "./NavButton";

const NavBar = ({ setActiveTab, activeTab }) => (
  <div>
    <NavButton
      text="Solo Doggo"
      clickAction={() => setActiveTab("solo")}
      isActive={activeTab === "solo"}
    />
    <NavButton
      text="Multi Doggo"
      clickAction={() => setActiveTab("multi")}
      isActive={activeTab === "multi"}
    />
    <NavButton
      text="Loop Doggo"
      clickAction={() => setActiveTab("loop")}
      isActive={activeTab === "loop"}
    />
  </div>
);

export default NavBar;
