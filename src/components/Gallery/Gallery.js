import React from "react";

import SoloGallery from "../SoloGallery";
import MultiGallery from "../MultiGallery";

const Gallery = ({
  activeTab,
  soloImg,
  fetchNewImage,
  multiImg,
  fetchNewImagesMulti
}) => (
  <div>
    {activeTab === "solo" && (
      <SoloGallery
        soloImg={soloImg}
        buttonAction={() => fetchNewImage("480")}
        buttonText="Random"
      />
    )}
    {activeTab === "multi" && (
      <MultiGallery
        multiImg={multiImg}
        fetchNewImagesMulti={fetchNewImagesMulti}
      />
    )}
  </div>
);

export default Gallery;
