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
      결과물
    </Page2Wrapper>
  );
}

const Page2Wrapper = styled.div<{
  upDown: boolean;
  firstToSecondPage: boolean;
  secondToThirdPage: boolean;
}>`
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
