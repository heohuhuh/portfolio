import ReactInstacloneJPG from "../imgs/ReactInstaclone.jpg";
import instaclone from "../imgs/gifs/instaclone.gif";
import { ContentName, RightPreview } from "../Page2";
import { ReactContentCSS, ReactContentImgCSS } from "./ReactTodo";
import styled from "styled-components";
import { useState } from "react";

type props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalSwitch: React.Dispatch<React.SetStateAction<string>>;
};
export function ReactInstaclone({ setModal, setModalSwitch }: props) {
  const [preview, setPreview] = useState(false);
  return (
    <ReactInstacloneWrapper>
      <ContentName>인스타 클론코딩</ContentName>
      <RightPreview src={instaclone} alt="" preview={preview}></RightPreview>
      <ReactInstacloneImg
        src={ReactInstacloneJPG}
        alt=""
        onPointerOver={() => {
          setPreview(true);
        }}
        onPointerLeave={() => {
          setPreview(false);
        }}
        onClick={() => {
          setModal(true);
          setModalSwitch("ReactInstaclone");
        }}
      />
    </ReactInstacloneWrapper>
  );
}

export const ReactInstacloneWrapper = styled.div`
  ${ReactContentCSS}
`;
export const ReactInstacloneImg = styled.img`
  ${ReactContentImgCSS}
`;
