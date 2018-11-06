import React, { SFC } from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: red;
`;

const HomePage: SFC = () => (
  <div>
    <Title>Hello World</Title>
  </div>
);

export default HomePage;
