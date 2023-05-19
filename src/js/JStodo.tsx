import styled, { css } from "styled-components";
import { LeftPreview, ContentName } from "../Page2";
import JSTodoJPG from "../imgs/todo2.jpg";
import todoGif from "../imgs/gifs/todo.gif";
import { useState } from "react";

type props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalSwitch: React.Dispatch<React.SetStateAction<string>>;
};
export function JStodo({ setModal, setModalSwitch }: props) {
  const [preview, setPreview] = useState(false);
  return (
    <JStodoWrapper>
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
          setModal(true);
          setModalSwitch("JSTodo");
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
      <LeftPreview src={todoGif} alt="" preview={preview}></LeftPreview>
      <ContentName>TodoList</ContentName>
    </JStodoWrapper>
  );
}

export const ContentCSS = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContentImgCSS = css`
  width: 100px;
  height: 100px;
  cursor: pointer;
`;

const JStodoWrapper = styled.div`
  ${ContentCSS}
`;

const JSTodoImg = styled.img`
  ${ContentImgCSS}
`;
