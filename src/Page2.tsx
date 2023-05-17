import styled, { css } from "styled-components";
import {
  boxFadeInDown,
  boxFadeOutUP,
  boxFadeInUP,
  boxFadeOutDown,
} from "./App";
import JSTodoJPG from "./imgs/todo2.jpg";
import JSWeatherJPG from "./imgs/JSweather2.jpg";
import JSTypingJPG from "./imgs/typing2.jpg";
import JSPuzzleJPG from "./imgs/JSPuzzle2.jpg";
import ReactTodoJPG from "./imgs/react todo2.jpg";
import ReactNumberbbJPG from "./imgs/ReactNumberbase3.jpg";
import ReactInstacloneJPG from "./imgs/ReactInstaclone.jpg";
import { useState } from "react";

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
  const [modal, setModal] = useState(false);
  const [preview, setPreview] = useState(false);
  return (
    <Page2Wrapper
      upDown={upDown}
      firstToSecondPage={firstToSecondPage}
      secondToThirdPage={secondToThirdPage}
    >
      {modal ? (
        <ProjectModal
          onClick={() => {
            setModal(false);
          }}
        >
          <button
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              cursor: "pointer",
              fontSize: "25px",
              color: "#dddddd",
              background: "none",
              border: "none",
            }}
          >
            X
          </button>
          <ModalMain onClick={(e) => e.stopPropagation()}>
            <div
              style={{
                width: "100%",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderBottom: "1px solid #dddddd",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              새 게시물 만들기
            </div>
            <div
              style={{
                width: "100%",
                height: "calc(100% - 40px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              사진과 동영상을 여기다 끌어다 놓으세요
            </div>
          </ModalMain>
        </ProjectModal>
      ) : (
        <></>
      )}
      <JS>
        <JSTitle>JavaScript</JSTitle>
        <JSWrapper>
          <JStodo>
            <JSTodoImg
              src={JSTodoJPG}
              alt=""
              onPointerOver={() => {
                setPreview(true);
              }}
              onPointerLeave={() => {
                setPreview(false);
              }}
              onClick={() => {
                console.log("hi");
                setModal(true);
                return (
                  <div
                    style={{
                      width: "300px",
                      height: "300px",
                      backgroundColor: "#000000",
                      position: "absolute",
                    }}
                  >
                    하이
                  </div>
                );
              }}
            />
            <Test preview={preview}></Test>
            <ContentName>TodoList</ContentName>
          </JStodo>
          <JSweather>
            <JSweatherImg src={JSWeatherJPG} alt="" />
            <Test preview={preview}></Test>
            <ContentName>날씨 확인</ContentName>
          </JSweather>
          <JStyping>
            <JStypingImg src={JSTypingJPG} alt="" />
            <Test preview={preview}></Test>
            <ContentName>타자 게임</ContentName>
          </JStyping>
          <JSpuzzle>
            <JSpuzzleImg src={JSPuzzleJPG} alt="" />
            <Test preview={preview}></Test>
            <ContentName>퍼즐 게임</ContentName>
          </JSpuzzle>
        </JSWrapper>
      </JS>

      <React>
        <ReactTitle>React</ReactTitle>
        <ReactWrapper>
          <ReactTodo>
            <ContentName>TodoList</ContentName>
            <ReactTodoImg src={ReactTodoJPG} alt="" />
          </ReactTodo>
          <ReactBaseball>
            <ContentName>숫자야구</ContentName>
            <ReactBaseballImg src={ReactNumberbbJPG} alt="" />
          </ReactBaseball>
          <ReactInstaclone>
            <ContentName>인스타 클론코딩</ContentName>
            <ReactInstacloneImg src={ReactInstacloneJPG} alt="" />
          </ReactInstaclone>
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
const Test = styled.div<{ preview: boolean }>`
  width: 200px;
  height: 200px;
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
const WrapperCSS = css`
  border: solid 1px black;
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
const TitleCSS = css`
  border: solid 1px black;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-family: "omyu_pretty";
`;
const ContentCSS = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentImgCSS = css`
  width: 100px;
  height: 100px;
  cursor: pointer;
`;
const ContentName = styled.div`
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
const JStodo = styled.div`
  ${ContentCSS}
`;
const JSTodoImg = styled.img`
  ${ContentImgCSS}
`;
const JSweather = styled.div`
  ${ContentCSS}
`;
const JSweatherImg = styled.img`
  ${ContentImgCSS}
`;
const JStyping = styled.div`
  ${ContentCSS}
`;
const JStypingImg = styled.img`
  ${ContentImgCSS}
`;
const JSpuzzle = styled.div`
  ${ContentCSS}
`;
const JSpuzzleImg = styled.img`
  ${ContentImgCSS}
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
const ReactTodo = styled.div`
  ${ContentCSS}
`;
const ReactTodoImg = styled.img`
  ${ContentImgCSS}
`;
const ReactBaseball = styled.div`
  ${ContentCSS}
`;
const ReactBaseballImg = styled.img`
  ${ContentImgCSS}
`;
const ReactInstaclone = styled.div`
  ${ContentCSS}
`;
const ReactInstacloneImg = styled.img`
  ${ContentImgCSS}
`;

const ProjectModal = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ModalMain = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  border: none;
  max-width: 600px;
  max-height: 900px;
  width: 80%;
  height: 80%;
`;
