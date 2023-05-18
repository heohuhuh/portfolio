import ReactTodoJPG from "../imgs/react todo2.jpg";
import reactTodo from "../imgs/gifs/react todo.gif";
import { ContentName, Test } from "../Page2";
import { ContentCSS, ContentImgCSS } from "../js/JStodo";
import styled from "styled-components";
import { useState } from "react";

type props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export function ReactTodo({ setModal }: props) {
  const [preview, setPreview] = useState(false);
  return (
    <ReactTodoWrapper>
      <ContentName>TodoList</ContentName>
      <Test src={reactTodo} alt="" preview={preview}></Test>
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
    </ReactTodoWrapper>
  );
}

const ReactTodoWrapper = styled.div`
  ${ContentCSS}
`;
const ReactTodoImg = styled.img`
  ${ContentImgCSS}
`;
