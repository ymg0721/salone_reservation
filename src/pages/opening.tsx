import React from "react";
import styled from "@emotion/styled";

const MyComponent: React.FC = () => {
  return (
    <Wrapper>
      {/* <h1>Hello, {name}!</h1> */}
      <Test>This is a simple React component.</Test>
    </Wrapper>
  );
};

const Test = styled.p`
  color: red;
`;

const Wrapper = styled.div`
  background: black;
`;

export default MyComponent;
