import React from "react";
import styled from "styled-components";

const MainPage = (): JSX.Element => {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  const css = {
    fontSize: "15px",
  };

  const css2 = {
    color: "white",
    backgroundColor: "red",
  };

  const Test = styled.p(css, css2);

  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;

  return (
    <Wrapper>
      <Title onClick={() => console.log("test")}>
        Hello World, this is my first styled component!
      </Title>
      <Test>Trying to test a paragraph here 2</Test>
    </Wrapper>
  );
};

export default MainPage;
