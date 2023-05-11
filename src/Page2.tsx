import styled, { css } from "styled-components";
import {
  boxFadeInDown,
  boxFadeOutUP,
  boxFadeInUP,
  boxFadeOutDown,
} from "./App";

type propsType = {
  upDown: boolean;
  firstToSecondPage: boolean;
  secondToThirdPage: boolean;
};
export function Page2({
  upDown,
  firstToSecondPage,
  secondToThirdPage,
}: propsType) {
  return (
    <Page2Wrapper
      upDown={upDown}
      firstToSecondPage={firstToSecondPage}
      secondToThirdPage={secondToThirdPage}
    >
      <VanilaJS>
        <JavaScript>JavaScript</JavaScript>
        <JStodo>todo</JStodo>
        <JSweather>weather</JSweather>
        <JStyping>typing</JStyping>
        <JSpuzzle>puzzle</JSpuzzle>
      </VanilaJS>

      <ReactWrapper>
        <React>React</React>
        <ReactTodo>todo</ReactTodo>
        <ReactBase>numberbaseball</ReactBase>
        <ReactClone>insta clone</ReactClone>
      </ReactWrapper>
    </Page2Wrapper>
  );
}

const Page2Wrapper = styled.div<{
  upDown: boolean;
  firstToSecondPage: boolean;
  secondToThirdPage: boolean;
}>`
  background-color: #ddffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  ${({ upDown, firstToSecondPage }) =>
    upDown &&
    firstToSecondPage &&
    css`
      animation: ${boxFadeInDown} 0.5s 0s linear;
    `}
  ${({ upDown, firstToSecondPage }) =>
    !upDown &&
    firstToSecondPage &&
    css`
      animation: ${boxFadeOutUP} 0.5s 0s linear;
    `}
    
  ${({ upDown, secondToThirdPage }) =>
    !upDown &&
    secondToThirdPage &&
    css`
      animation: ${boxFadeInUP} 0.5s 0s linear;
    `}
    
  ${({ upDown, secondToThirdPage }) =>
    upDown &&
    secondToThirdPage &&
    css`
      animation: ${boxFadeOutDown} 0.5s 0s linear;
    `}
`;

const VanilaJS = styled.div`
  border: solid 1px black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 460px;
  height: 640px;
`;

const JavaScript = styled.div`
  top: 10%;
`;

const JStodo = styled.div``;
const JSweather = styled.div``;
const JStyping = styled.div``;
const JSpuzzle = styled.div``;

const ReactWrapper = styled.div`
  border: solid 1px black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 460px;
  height: 640px;
`;

const React = styled.div``;
const ReactTodo = styled.div``;
const ReactBase = styled.div``;
const ReactClone = styled.div``;
