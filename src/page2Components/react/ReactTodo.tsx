import ReactTodoJPG from "../../imgs/react todo2.jpg";
import reactTodo from "../../imgs/gifs/react todo.gif";
import { ContentName, RightPreview } from "../../Page2";
import styled, { css } from "styled-components";
import { useState } from "react";

type props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalSwitch: React.Dispatch<React.SetStateAction<string>>;
};
export function ReactTodo({ setModal, setModalSwitch }: props) {
  const [preview, setPreview] = useState(false);
  return (
    <ReactTodoWrapper>
      <ContentName>TodoList</ContentName>
      <RightPreview src={reactTodo} alt="" preview={preview}></RightPreview>
      <ReactTodoImg
        src={ReactTodoJPG}
        alt=""
        onPointerOver={() => {
          setPreview(true);
        }}
        onPointerLeave={() => {
          setPreview(false);
        }}
        onClick={() => {
          setModal(true);
          setModalSwitch("ReactTodo");
        }}
      />
    </ReactTodoWrapper>
  );
}

export const ReactContentCSS = css`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ReactContentImgCSS = css`
  border-right: solid 2px #aaa;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 100px;
  height: 100px;
  cursor: pointer;
`;
const ReactTodoWrapper = styled.div`
  ${ReactContentCSS}
`;
const ReactTodoImg = styled.img`
  ${ReactContentImgCSS}
`;
