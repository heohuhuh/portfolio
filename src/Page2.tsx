import styled, { css } from "styled-components";
import {
  boxFadeInDown,
  boxFadeOutUP,
  boxFadeInUP,
  boxFadeOutDown,
} from "./App";
import { useState } from "react";
import { JStodo } from "./page2Components/js/JStodo";
import { JSWeather } from "./page2Components/js/JSWeather";
import { JSTyping } from "./page2Components/js/JSTyping";
import { JSPuzzle } from "./page2Components/js/JSPuzzle";
import { ProjectModal } from "./page2Components/ProjectModal";
import { ReactTodo } from "./page2Components/react/ReactTodo";
import { ReactBasebb } from "./page2Components/react/ReactBasebb";
import { ReactInstaclone } from "./page2Components/react/ReactInstaclone";
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
  width: 1004px;
  height: 744px;
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
  width: 512px;
  height: 640px;
`;
export const TitleCSS = css`
  width: 90%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-family: "omyu_pretty";
`;
export const WrapperCSS = css`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
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
