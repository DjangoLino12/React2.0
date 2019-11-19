import React from "react";
import styled from "styled-components";

import Top from "./Top";
import Rodape from "./Rodape";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routers";

export default function App() {
  return (
    <BrowserRouter>
      <Main>
        <Top />
        <Routes />
        <Rodape />
      </Main>
    </BrowserRouter>
  );
}

const Main = styled.main`
  width: 800px;
  height: 500px;
  text-align: center;
  font-family: sans-serif;
  margin: 0 auto;
  background: tomato;
`;
