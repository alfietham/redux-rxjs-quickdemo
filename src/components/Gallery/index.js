import { connect } from "react-redux";
import { fetchImages } from "../../store/images/action";

import Gallery from "./Gallery";

const mapStateToProps = state => ({
  soloImg: state.images.soloImg
});

const mapDispatchToProps = dispatch => ({
  fetchNewImage: imgSize => dispatch(fetchImages(imgSize))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
