import ReactNumberbbJPG from "../imgs/ReactNumberbase3.jpg";
import numberBB from "../imgs/gifs/numberbb.gif";
import { ContentName, Test } from "../Page2";
import { ContentCSS, ContentImgCSS } from "../js/JStodo";
import styled from "styled-components";
import { useState } from "react";

type props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export function ReactBasebb({ setModal }: props) {
  const [preview, setPreview] = useState(false);
  return (
    <ReactBasebbWrapper>
      <ContentName>숫자야구</ContentName>
      <Test src={numberBB} alt="" preview={preview}></Test>
      <ReactBaseballImg
        src={ReactNumberbbJPG}
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
    </ReactBasebbWrapper>
  );
}

export const ReactBasebbWrapper = styled.div`
  ${ContentCSS}
`;
export const ReactBaseballImg = styled.img`
  ${ContentImgCSS}
`;
