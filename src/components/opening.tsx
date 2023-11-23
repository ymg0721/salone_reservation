import React from "react";
import styled from "@emotion/styled";

const Opening: React.FC = () => {
  return (
    <div>
      {/* <h1>Hello, {name}!</h1> */}
      <Test>This is a simple React component.</Test>
    </div>
  );
};

const Test = styled.p`
  color: red;
`;

export default Opening;
