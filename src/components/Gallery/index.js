import { connect } from "react-redux";
import {
  fetchImages,
  fetchMultiImages,
  startTimer,
  stopTimer
} from "../../store/images/action";

import Gallery from "./Gallery";

const mapStateToProps = state => ({
  soloImg: state.images.soloImg,
  multiImg: state.images.multiImg,
  activeTab: state.navigation.activeTab
});

const mapDispatchToProps = dispatch => ({
  fetchNewImage: imgSize => dispatch(fetchImages(imgSize)),
  fetchNewImagesMulti: numImages => dispatch(fetchMultiImages(numImages)),
  startTimer: interval => dispatch(startTimer(interval)),
  stopTimer: () => dispatch(stopTimer())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
