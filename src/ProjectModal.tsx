import styled from "styled-components";
import JStodo from "./imgs/gifs/todo.gif";
import JSweather from "./imgs/gifs/weather.gif";
import JStyping from "./imgs/gifs/typing.gif";
import JSpuzzle from "./imgs/gifs/puzzle.gif";
import Reacttodo from "./imgs/gifs/react todo.gif";
import ReactnumberBB from "./imgs/gifs/numberbb.gif";
import Reactinstaclone from "./imgs/gifs/instaclone.gif";
import {
  ProjectAccountsContainer,
  ProjectSummaryContainer,
} from "./ProjectContents";

type props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalSwitch: string;
};
export function ProjectModal({ setModal, modalSwitch }: props) {
  const projectImgs: any = {
    JSTodo: <ProjectImg src={JStodo} alt=""></ProjectImg>,
    JSWeather: <ProjectImg src={JSweather} alt=""></ProjectImg>,
    JSTyping: <ProjectImg src={JStyping} alt=""></ProjectImg>,

    JSPuzzle: <ProjectImg src={JSpuzzle} alt=""></ProjectImg>,

    ReactTodo: <ProjectImg src={Reacttodo} alt=""></ProjectImg>,

    ReactNumberBB: <ProjectImg src={ReactnumberBB} alt=""></ProjectImg>,

    ReactInstaclone: (
      <img
        style={{ width: "95%", height: "80%" }}
        src={Reactinstaclone}
        alt=""
      ></img>
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
        <ModalImgContainer>{projectImgs[modalSwitch]}</ModalImgContainer>
        <ModalFooterContainer>
          <ProjectAccountsContainer modalSwitch={modalSwitch} />
          <Hr />
          <ProjectSummaryContainer modalSwitch={modalSwitch} />
        </ModalFooterContainer>
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
  min-width: 400px;
  max-width: 800px;
  min-height: 440px;
  max-height: 880px;
  aspect-ratio: 1/1;
  height: 80%;
`;

const ModalImgContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dddddd;
  font-weight: bold;
  font-size: "14px";
`;

const ModalFooterContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
`;

const ProjectImg = styled.img`
  height: 95%;
  aspect-ratio: 1/1;
`;

const Hr = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.35);
  width: 1px;
  height: 90%;
`;
