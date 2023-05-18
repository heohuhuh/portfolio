import styled from "styled-components";
import JStodo from "./imgs/gifs/todo.gif";
import { useState } from "react";

type props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export function ProjectModal({ setModal }: props) {
  const [modalSwitch, setModalSwitch] = useState("JSTodo");
  const ModalType: any = {
    JSTodo: (
      <img style={{ width: "95%", height: "95%" }} src={JStodo} alt=""></img>
    ),
  };
  return (
    <ProjectModalWrapper
      onClick={() => {
        setModal(false);
      }}
    >
      <button
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          cursor: "pointer",
          fontSize: "25px",
          color: "#dddddd",
          background: "none",
          border: "none",
        }}
      >
        X
      </button>
      <ModalMain onClick={(e) => e.stopPropagation()}>
        <ModalImg>{ModalType[modalSwitch]}</ModalImg>
        <ModalAccount>사진과 동영상을 여기다 끌어다 놓으세요</ModalAccount>
      </ModalMain>
    </ProjectModalWrapper>
  );
}

const ProjectModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ModalMain = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  border: none;
  max-width: 820px;
  max-height: 900px;
  width: 80%;
  height: 80%;
`;

const ModalImg = styled.div`
  width: 100%;
  height: 640px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dddddd;
  font-weight: bold;
  font-size: "14px";
`;

const ModalAccount = styled.div`
  width: 100%;
  height: calc(100% - 640px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
`;
