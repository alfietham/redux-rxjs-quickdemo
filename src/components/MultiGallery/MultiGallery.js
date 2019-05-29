import React from "react";
import styled from "styled-components";

import NoDoggo from "../NoDoggo";

const ImgWrapper = styled.div`
  display: grid;
  margin: 5vh 10vw;
  grid-template-columns: repeat(3, 2fr);
  grid-gap: 20px;
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
`;

const Button = styled.button`
  width: 50vmin;
  height: 3em;
  margin: 2vmin;
  font-size: calc(5px + 2vmin);
  background-color: #ccc;
  border: none;
  :focus {
    outline: black;
    border-color: #38bdbf;
    box-shadow: 0 0 10px #38bdbf;
  }
`;

const MultiGallery = ({ multiImg, fetchNewImagesMulti }) => (
  <>
    {multiImg && multiImg.length === 0 ? (
      <NoDoggo />
    ) : (
      <ImgWrapper>
        {multiImg.map((img, index) => (
          <Image key={`${img}_${index}`} src={img} alt="a random cat or dog" />
        ))}
      </ImgWrapper>
    )}
    <Button onClick={() => fetchNewImagesMulti(9)}>Fetch more</Button>
  </>
);

export default MultiGallery;
