import React from "react";
import styled from "styled-components";

const Image = styled.img`
  object-fit: contain;
  width: 30vw;
`;

const InfoText = styled.div`
  width: 40vw;
  font-size: calc(10px + 1.2vmin);
  color: white;
  line-height: 3em;
  margin: 2vh auto;
`;

const NoDoggo = () => (
  <InfoText>
    You haven't fetched any images yet
    <Image src={"/cat00003.jpg"} alt="a random cat or dog" />
  </InfoText>
);

export default NoDoggo;
