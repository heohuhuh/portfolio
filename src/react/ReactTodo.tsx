import ReactTodoJPG from "../imgs/react todo2.jpg";
import reactTodo from "../imgs/gifs/react todo.gif";
import { ContentName, RightPreview } from "../Page2";
import { ContentCSS, ContentImgCSS } from "../js/JStodo";
import styled from "styled-components";
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
    </ReactTodoWrapper>
  );
}

const ReactTodoWrapper = styled.div`
  ${ContentCSS}
`;
const ReactTodoImg = styled.img`
  ${ContentImgCSS}
`;
