import styled, { css } from "styled-components";
import {
  boxFadeInDown,
  boxFadeOutUP,
  boxFadeInUP,
  boxFadeOutDown,
} from "./App";
import { useEffect, useRef, useState } from "react";
import { JStodo } from "./js/JStodo";
import { JSWeather } from "./js/JSWeather";
import { JSTyping } from "./js/JSTyping";
import { JSPuzzle } from "./js/JSPuzzle";
import { ProjectModal } from "./ProjectModal";
import { ReactTodo } from "./react/ReactTodo";
import { ReactBasebb } from "./react/ReactBasebb";
import { ReactInstaclone } from "./react/ReactInstaclone";
import { Font } from "./Page1";

type propsType = {
  upDown: boolean;
  firstToSecondPage: boolean;
  secondToThirdPage: boolean;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export function Page2({
  upDown,
  firstToSecondPage,
  secondToThirdPage,
  modal,
  setModal,
}: propsType) {
  const [modalSwitch, setModalSwitch] = useState("JSTodo");

  return (
    <Page2Wrapper
      upDown={upDown}
      firstToSecondPage={firstToSecondPage}
      secondToThirdPage={secondToThirdPage}
    >
      {modal ? (
        <ProjectModal setModal={setModal} modalSwitch={modalSwitch} />
      ) : (
        <></>
      )}
      <Container>
        <JS>
          <JSTitle>JavaScript</JSTitle>
          <JSWrapper>
            <JStodo setModal={setModal} setModalSwitch={setModalSwitch} />
            <JSWeather setModal={setModal} setModalSwitch={setModalSwitch} />
            <JSTyping setModal={setModal} setModalSwitch={setModalSwitch} />
            <JSPuzzle setModal={setModal} setModalSwitch={setModalSwitch} />
          </JSWrapper>
        </JS>

        <Hr />
        <React>
          <ReactTitle>React</ReactTitle>
          <ReactWrapper>
            <ReactTodo setModal={setModal} setModalSwitch={setModalSwitch} />
            <ReactBasebb setModal={setModal} setModalSwitch={setModalSwitch} />
            <ReactInstaclone
              setModal={setModal}
              setModalSwitch={setModalSwitch}
            />
          </ReactWrapper>
        </React>
      </Container>
    </Page2Wrapper>
  );
}

const Page2Wrapper = styled.div<{
  upDown: boolean;
  firstToSecondPage: boolean;
  secondToThirdPage: boolean;
}>`
  background-color: #fffd95;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 920px;
  width: 100%;
  height: 100%;
  position: relative;
  ${Font}
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
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1020px;
  height: 740px;
  background-color: #ffffff;
  border-radius: 20px;
`;

const Hr = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.35);
  width: 2px;
  height: 80%;
`;

export const LeftPreview = styled.img<{ preview: boolean }>`
  margin-left: 100px;
  width: 300px;
  height: 300px;
  background-color: #000000;
  position: absolute;
  display: none;
  display: ${({ preview }) => preview && "block"};
  border-right: solid 2px #aaa;
  border-top: solid 2px #aaa;
  border-bottom: solid 2px #aaa;
  border-radius: 20px;
`;
export const RightPreview = styled.img<{ preview: boolean }>`
  margin-right: 100px;
  width: 300px;
  height: 300px;
  background-color: #000000;
  position: absolute;
  display: none;
  display: ${({ preview }) => preview && "block"};
  border-left: solid 2px #aaa;
  border-top: solid 2px #aaa;
  border-bottom: solid 2px #aaa;
  border-radius: 20px;
`;
const MainCSS = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 460px;
  height: 640px;
`;
export const WrapperCSS = css`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
export const TitleCSS = css`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-family: "omyu_pretty";
`;
// export const ContentCSS = css`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// export const ContentImgCSS = css`
//   width: 100px;
//   height: 100px;
//   cursor: pointer;
// `;
export const ContentName = styled.div`
  width: calc(100% - 100px);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "omyu_pretty";
  font-size: 20px;
`;
const JS = styled.div`
  ${MainCSS}
`;
const JSTitle = styled.div`
  ${TitleCSS}
`;
const JSWrapper = styled.div`
  ${WrapperCSS}
`;

const React = styled.div`
  ${MainCSS}
`;
const ReactTitle = styled.div`
  ${TitleCSS}
`;
const ReactWrapper = styled.div`
  ${WrapperCSS}
`;
