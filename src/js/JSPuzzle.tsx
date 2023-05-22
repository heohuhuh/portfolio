import styled from "styled-components";
import puzzleGif from "../imgs/gifs/puzzle.gif";
import { LeftPreview, ContentName } from "../Page2";
import { ContentCSS, ContentImgCSS } from "./JStodo";
import JSPuzzleJPG from "../imgs/JSPuzzle2.jpg";
import { useState } from "react";

type props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalSwitch: React.Dispatch<React.SetStateAction<string>>;
};
export function JSPuzzle({ setModal, setModalSwitch }: props) {
  const [preview, setPreview] = useState(false);
  return (
    <JSPuzzleWrapper>
      <JSpuzzleImg
        src={JSPuzzleJPG}
        alt=""
        onPointerOver={() => {
          setPreview(true);
        }}
        onPointerLeave={() => {
          setPreview(false);
        }}
        onClick={() => {
          setModal(true);
          setModalSwitch("JSPuzzle");
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
      <LeftPreview src={puzzleGif} alt="" preview={preview}></LeftPreview>
      <ContentName>퍼즐 게임</ContentName>
    </JSPuzzleWrapper>
  );
}

const JSPuzzleWrapper = styled.div`
  ${ContentCSS}
`;
const JSpuzzleImg = styled.img`
  ${ContentImgCSS}
`;