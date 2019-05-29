import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MultiGallery from "./MultiGallery";

Enzyme.configure({ adapter: new Adapter() });

describe("MultiGallery component", () => {
  const mountedMultiGallery = mount(
    <MultiGallery
      multiImg={new Array(9).fill("/cat00003.jpg")}
      fetchNewImagesMulti={() => {}}
    />
  );
  it("should render the number of images propped to it", () => {
    const actual = mountedMultiGallery.find("img");
    expect(actual).toHaveLength(9);
  });
});
