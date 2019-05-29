import React from "react";
import styled from "styled-components";

import NoDoggo from "../NoDoggo";

const ImgWrapper = styled.div`
  padding: 3vmin;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  object-fit: contain;
  width: 50vmin;
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

const SoloGallery = ({ soloImg, buttonAction, buttonText }) => (
  <>
    {soloImg === "" ? (
      <NoDoggo />
    ) : (
      <ImgWrapper>
        <Image src={soloImg} alt="a random cat or dog" />
      </ImgWrapper>
    )}
    <Button onClick={() => buttonAction()}>{buttonText}</Button>
  </>
);

export default SoloGallery;
