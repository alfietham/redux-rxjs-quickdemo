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

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const InputBoxLabel = styled.label`
  font-size: calc(10px + 1.2vmin);
  color: white;
  line-height: 3em;
  margin: 2vh;
`;

const InputBox = styled.input`
  width: 5vmin;
  height: 2.5em;
  font-size: calc(5px + 2vmin);
  border: none;
  margin: 2vmin;
  display: block;
`;

class LoopGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loopInterval: 3
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({
      loopInterval: e.target.value
    });
  }

  render() {
    const {
      soloImg,
      mainButtonAction,
      mainButtonText,
      secButtonAction,
      secButtonText
    } = this.props;
    const { loopInterval } = this.state;

    return (
      <>
        {soloImg === "" ? (
          <NoDoggo />
        ) : (
          <ImgWrapper>
            <Image src={soloImg} alt="a random cat or dog" />
          </ImgWrapper>
        )}
        <InputContainer>
          <InputBoxLabel>Time Interval:</InputBoxLabel>
          <InputBox
            type="number"
            onChange={this.onInputChange}
            value={loopInterval}
          />
        </InputContainer>
        <Button onClick={() => mainButtonAction(loopInterval)}>
          {mainButtonText}
        </Button>
        <Button onClick={() => secButtonAction()}>{secButtonText}</Button>
      </>
    );
  }
}

export default LoopGallery;
