import React from "react";
import { Provider } from "react-redux";
import styled from "styled-components";

import store from "./store";
import NavBar from "./components/NavBar";

const Header = styled.header`
  background-color: #282c34;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const App = () => (
  <Provider store={store}>
    <Header>Furry Friends</Header>
    <NavBar />
  </Provider>
);

export default App;
