import { connect } from "react-redux";

import { setActiveTab } from "../../store/nav/action";
import NavBar from "./NavBar";

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
