import React from "react";
import styled from "styled-components";

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

const SoloGallery = ({ soloImg, fetchNewImage }) => {
  // Initial fetch upon render
  fetchNewImage("480");

  return (
    <ImgWrapper>
      <Image src={soloImg} alt="a random cat or dog" />
      <Button onClick={() => fetchNewImage("480")}>Random</Button>
    </ImgWrapper>
  );
};

export default SoloGallery;
