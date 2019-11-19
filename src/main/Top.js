import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Top() {
  return (
    <Header>
      <Link to="/">HOME</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/fotos">fotos</Link>
      <Link to="/contato">COntatos</Link>
      <Link to="/cadastro">cadastro</Link>
    </Header>
  );
}

const Header = styled.header`
  background: #0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
`;
