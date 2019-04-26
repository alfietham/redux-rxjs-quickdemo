import React from "react";
import { connect } from "react-redux";

import { setActiveTab } from "../../store/nav/action";
import NavButton from "./parts/NavButton";

const NavBar = ({ setActiveTab, activeTab }) => (
  <div>
    <NavButton
      text="Solo"
      clickAction={() => setActiveTab("solo")}
      isActive={activeTab === "solo"}
    />
    <NavButton
      text="Multi"
      clickAction={() => setActiveTab("multi")}
      isActive={activeTab === "multi"}
    />
  </div>
);

const mapStateToProps = state => ({
  activeTab: state.navigation.activeTab
});

const mapDispatchToProps = dispatch => ({
  setActiveTab: tabName => dispatch(setActiveTab(tabName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
