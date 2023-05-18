import JSWeatherJPG from "../imgs/JSweather2.jpg";
import weatherGif from "../imgs/gifs/weather.gif";
import styled from "styled-components";
import { Test, ContentName } from "../Page2";
import { ContentCSS, ContentImgCSS } from "./JStodo";
import { useState } from "react";

type props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export function JSWeather({ setModal }: props) {
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
      <Test src={weatherGif} alt="" preview={preview}></Test>
      <ContentName>날씨 확인</ContentName>
    </JSWeatherWrapper>
  );
}

const JSWeatherWrapper = styled.div`
  ${ContentCSS}
`;
const JSweatherImg = styled.img`
  ${ContentImgCSS}
`;
