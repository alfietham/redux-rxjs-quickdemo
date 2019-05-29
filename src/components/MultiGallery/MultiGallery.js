import React from "react";
import styled from "styled-components";

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

const InfoText = styled.div`
  font-size: calc(10px + 1.2vmin);
  color: white;
  line-height: 3em;
  margin: 2vh 20vw;
`;

const MultiGallery = ({ multiImg, fetchNewImagesMulti }) => (
  <>
    {multiImg && multiImg.length === 0 ? (
      <>
        <InfoText>
          You haven't fetched any images yet
          <Image src={"/cat00003.jpg"} alt="a random cat or dog" />
        </InfoText>
      </>
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
