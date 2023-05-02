import React, { useEffect, useRef } from "react";

import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

function App() {
  const outerDivRef = useRef();
  useEffect(() => {
    const wheelHandler = (e: any) => {
      e.preventDefault();
      const { deltaY } = e;
      if (deltaY > 0) {
        // 스크롤 내릴 때
        console.log("1");
      } else {
        // 스크롤 올릴 때
        console.log("2");
      }
    };
    const outerDivRefCurrent: any = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Wrapper ref={outerDivRef}>
      <Page1>gd</Page1>
      <Page2>gd</Page2>
      <Page3>gd</Page3>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div<{ ref: any }>`
  overflow-y: auto;
`;
const Page1 = styled.div`
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  position: relative;
`;
const Page2 = styled.div`
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  position: relative;
`;
const Page3 = styled.div`
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  position: relative;
`;
