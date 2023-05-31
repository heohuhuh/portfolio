import ReactNumberbbJPG from "../../imgs/ReactNumberbase3.jpg";
import numberBB from "../../imgs/gifs/numberbb.gif";
import { ContentName, RightPreview } from "../../Page2";
import { ReactContentCSS, ReactContentImgCSS } from "./ReactTodo";
import styled from "styled-components";
import { useState } from "react";

type props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalSwitch: React.Dispatch<React.SetStateAction<string>>;
};
export function ReactBasebb({ setModal, setModalSwitch }: props) {
  const [preview, setPreview] = useState(false);
  return (
    <ReactBasebbWrapper>
      <ContentName>숫자야구</ContentName>
      <RightPreview src={numberBB} alt="" preview={preview}></RightPreview>
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
          setModal(true);
          setModalSwitch("ReactNumberBB");
        }}
      />
    </ReactBasebbWrapper>
  );
}

export const ReactBasebbWrapper = styled.div`
  ${ReactContentCSS}
`;
export const ReactBaseballImg = styled.img`
  ${ReactContentImgCSS}
`;
