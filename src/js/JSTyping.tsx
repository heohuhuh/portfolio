import JSTypingJPG from "../imgs/typing2.jpg";
import typingGif from "../imgs/gifs/typing.gif";
import styled from "styled-components";
import { LeftPreview, ContentName } from "../Page2";
import { JSContentCSS, JSContentImgCSS } from "./JStodo";
import { useState } from "react";

type props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalSwitch: React.Dispatch<React.SetStateAction<string>>;
};
export function JSTyping({ setModal, setModalSwitch }: props) {
  const [preview, setPreview] = useState(false);
  return (
    <JSTypingWrapper>
      <JStypingImg
        src={JSTypingJPG}
        alt=""
        onPointerOver={() => {
          setPreview(true);
        }}
        onPointerLeave={() => {
          setPreview(false);
        }}
        onClick={() => {
          setModal(true);
          setModalSwitch("JSTyping");
        }}
      />
      <LeftPreview src={typingGif} alt="" preview={preview}></LeftPreview>
      <ContentName>타자 게임</ContentName>
    </JSTypingWrapper>
  );
}

const JSTypingWrapper = styled.div`
  ${JSContentCSS}
`;
const JStypingImg = styled.img`
  ${JSContentImgCSS}
`;
