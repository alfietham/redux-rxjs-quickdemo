import React from "react";

import SoloGallery from "../SoloGallery";
import MultiGallery from "../MultiGallery";
import LoopGallery from "../LoopGallery";

const Gallery = ({
  activeTab,
  soloImg,
  fetchNewImage,
  multiImg,
  fetchNewImagesMulti,
  startTimer,
  stopTimer
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
    {activeTab === "loop" && (
      <LoopGallery
        soloImg={soloImg}
        mainButtonAction={interval => startTimer(interval)}
        mainButtonText="Start"
        secButtonAction={() => stopTimer()}
        secButtonText="Stop"
      />
    )}
  </div>
);

export default Gallery;
