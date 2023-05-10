import styled, { css } from "styled-components";
import { boxFadeInDown, boxFadeOutUP } from "./App";

type propsType = {
  upDown: boolean;
  secondToThirdPage: boolean;
};
export function Page3({ upDown, secondToThirdPage }: propsType) {
  return (
    <Page3Wrapper upDown={upDown} secondToThirdPage={secondToThirdPage}>
      자기소개
    </Page3Wrapper>
  );
}

export const Page3Wrapper = styled.div<{
  upDown: boolean;
  secondToThirdPage: boolean;
}>`
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  ${({ upDown, secondToThirdPage }) =>
    upDown &&
    secondToThirdPage &&
    css`
      animation: ${boxFadeInDown} 0.5s 0s linear;
    `}

  ${({ upDown, secondToThirdPage }) =>
    !upDown &&
    secondToThirdPage &&
    css`
      animation: ${boxFadeOutUP} 0.5s 0s linear;
    `}
`;
