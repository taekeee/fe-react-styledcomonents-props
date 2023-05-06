import React from "react";
import styled from "styled-components";

const BoxEach = styled.div`
  width: 200px;
  height: 200px;
  margin: 50px;
  border-radius: 50%;
  background-color: ${(props) => (props.CircleColor ? props.CircleColor : "green")};
  display: inline-block;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const BoxText = styled.p`
  font-size: 30px;
  font-weight: 500;
`;

const Circle = (props) => {
  return (
    <>
      <BoxEach CircleColor={props.CircleColor}>
        <BoxText></BoxText>
        
      </BoxEach>
    </>
  );
};

export default Circle;