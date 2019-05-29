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
    {activeTab === "loop" && (
      <SoloGallery
        soloImg={soloImg}
        buttonAction={() =>
          console.log("Woof! You haven't implemented this yet!")
        }
        buttonText="Turn up the Loop"
      />
    )}
  </div>
);

export default Gallery;
