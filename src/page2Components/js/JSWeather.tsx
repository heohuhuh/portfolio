import JSWeatherJPG from "../../imgs/JSweather2.jpg";
import weatherGif from "../../imgs/gifs/weather.gif";
import styled from "styled-components";
import { LeftPreview, ContentName } from "../../Page2";
import { JSContentCSS, JSContentImgCSS } from "./JStodo";
import { useState } from "react";

type props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalSwitch: React.Dispatch<React.SetStateAction<string>>;
};
export function JSWeather({ setModal, setModalSwitch }: props) {
  const [preview, setPreview] = useState(false);
  return (
    <JSWeatherWrapper>
      <JSweatherImg
        src={JSWeatherJPG}
        alt=""
        onPointerOver={() => {
          setPreview(true);
        }}
        onPointerLeave={() => {
          setPreview(false);
        }}
        onClick={() => {
          setModal(true);
          setModalSwitch("JSWeather");
        }}
      />
      <LeftPreview src={weatherGif} alt="" preview={preview}></LeftPreview>
      <ContentName>날씨 확인</ContentName>
    </JSWeatherWrapper>
  );
}

const JSWeatherWrapper = styled.div`
  ${JSContentCSS}
`;
const JSweatherImg = styled.img`
  ${JSContentImgCSS}
`;
