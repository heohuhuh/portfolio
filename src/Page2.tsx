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
      <JS>
        <JSTitle>JavaScript</JSTitle>
        <JSWrapper>
          <JStodo setModal={setModal} setModalSwitch={setModalSwitch} />
          <JSWeather setModal={setModal} setModalSwitch={setModalSwitch} />
          <JSTyping setModal={setModal} setModalSwitch={setModalSwitch} />
          <JSPuzzle setModal={setModal} setModalSwitch={setModalSwitch} />
        </JSWrapper>
      </JS>

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
  min-width: 920px;
  width: 100%;
  height: 100%;
  position: relative;
  @font-face {
    font-family: "omyu_pretty";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
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
export const LeftPreview = styled.img<{ preview: boolean }>`
  margin-left: 100px;
  width: 300px;
  height: 300px;
  background-color: #000000;
  position: absolute;
  display: none;
  display: ${({ preview }) => preview && "block"};
`;
export const RightPreview = styled.img<{ preview: boolean }>`
  margin-right: 100px;
  width: 300px;
  height: 300px;
  background-color: #000000;
  position: absolute;
  display: none;
  display: ${({ preview }) => preview && "block"};
`;
const MainCSS = css`
  border: solid 1px black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 460px;
  height: 640px;
`;
export const WrapperCSS = css`
  border: solid 1px black;
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
export const TitleCSS = css`
  border: solid 1px black;
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
