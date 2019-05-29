import { connect } from "react-redux";
import { fetchImages, fetchMultiImages } from "../../store/images/action";

import Gallery from "./Gallery";

const mapStateToProps = state => ({
  soloImg: state.images.soloImg,
  multiImg: state.images.multiImg,
  activeTab: state.navigation.activeTab
});

const mapDispatchToProps = dispatch => ({
  fetchNewImage: imgSize => dispatch(fetchImages(imgSize)),
  fetchNewImagesMulti: numImages => dispatch(fetchMultiImages(numImages))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
