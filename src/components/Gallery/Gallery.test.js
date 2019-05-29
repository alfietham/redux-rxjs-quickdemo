import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Gallery from "./Gallery";

import SoloGallery from "../SoloGallery";
import MultiGallery from "../MultiGallery";

Enzyme.configure({ adapter: new Adapter() });

describe("Gallery component", () => {
  const dummyProps = {
    soloImg: "",
    fetchNewImage: () => {},
    multiImg: [""],
    fetchNewImagesMulti: () => {}
  };
  describe("When activeTab is solo", () => {
    const mountedGallerySolo = mount(
      <Gallery activeTab="solo" {...dummyProps} />
    );
    it("should render the Solo Gallery", () => {
      expect(mountedGallerySolo.find(SoloGallery).exists()).toBeTruthy();
    });
    it("should NOT render the Multi Gallery", () => {
      expect(mountedGallerySolo.find(MultiGallery).exists()).toBeFalsy();
    });
  });
  describe("When activeTab is multi", () => {
    const mountedGalleryMulti = mount(
      <Gallery activeTab="multi" {...dummyProps} />
    );
    it("should render the Multi Gallery", () => {
      expect(mountedGalleryMulti.find(MultiGallery).exists()).toBeTruthy();
    });
    it("should NOT render the Solo Gallery", () => {
      expect(mountedGalleryMulti.find(SoloGallery).exists()).toBeFalsy();
    });
  });
  describe("When activeTab is loop", () => {
    const mountedGalleryMulti = mount(
      <Gallery activeTab="loop" {...dummyProps} />
    );
    it("should render the SoloGallery", () => {
      expect(mountedGalleryMulti.find(SoloGallery).exists()).toBeTruthy();
    });
    it("should NOT render the Multi Gallery", () => {
      expect(mountedGalleryMulti.find(MultiGallery).exists()).toBeFalsy();
    });
  });
});
