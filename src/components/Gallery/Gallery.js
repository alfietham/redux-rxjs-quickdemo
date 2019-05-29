import React from "react";

import SoloGallery from "../SoloGallery";

const Gallery = ({ soloImg, fetchNewImage }) => (
  <div>
    <SoloGallery soloImg={soloImg} fetchNewImage={fetchNewImage} />
  </div>
);

export default Gallery;
