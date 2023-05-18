import JSTypingJPG from "../imgs/typing2.jpg";
import typingGif from "../imgs/gifs/typing.gif";
import styled from "styled-components";
import { Test, ContentName } from "../Page2";
import { ContentCSS, ContentImgCSS } from "./JStodo";
import { useState } from "react";

type props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export function JSTyping({ setModal }: props) {
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
      <Test src={typingGif} alt="" preview={preview}></Test>
      <ContentName>타자 게임</ContentName>
    </JSTypingWrapper>
  );
}

const JSTypingWrapper = styled.div`
  ${ContentCSS}
`;
const JStypingImg = styled.img`
  ${ContentImgCSS}
`;
