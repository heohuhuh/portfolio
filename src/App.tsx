import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";
// import myGif from "./gifs/Scroll.gif";

function App() {
  const [firstPage, setFirstPage] = useState(true);
  const [secondPage, setSecondPage] = useState(false);
  const [thirdPage, setThirdPage] = useState(false);
  const [upDown, setUpDown] = useState(true);
  const [firstToSecondPage, setFirstToSecondPage] = useState(true);
  const [secondToThirdPage, setSecondToThirdPage] = useState(false);
  const [modal, setModal] = useState(false);
  const [scrollable, setScrollable] = useState(true);

  const mainDivRef = useRef();
  useEffect(() => {
    const wheelHandler = (e: any) => {
      e.stopPropagation();
      const { deltaY } = e;
      if (deltaY > 0 && !modal && scrollable) {
        setUpDown(true);
        // 스크롤 내릴 때
        if (firstPage) {
          setFirstPage(!firstPage);
          setSecondPage(!secondPage);
        } else if (secondPage) {
          setSecondPage(!secondPage);
          setThirdPage(!thirdPage);
          setSecondToThirdPage(true);
          setFirstToSecondPage(false);
        }
      } else if (deltaY <= 0 && !modal && scrollable) {
        setUpDown(false);
        // 스크롤 올릴 때
        if (thirdPage) {
          setThirdPage(!thirdPage);
          setSecondPage(!secondPage);
        } else if (secondPage) {
          setSecondPage(!secondPage);
          setFirstPage(!firstPage);
          setFirstToSecondPage(true);
          setSecondToThirdPage(false);
        }
      }
    };
    const mainDivRefCurrent: any = mainDivRef.current;
    mainDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      mainDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  });
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
    <Wrapper ref={mainDivRef} modal={modal}>
      {firstPage ? (
        <>
          <Page1 upDown={upDown} firstToSecondPage={firstToSecondPage} />
          <Page2
            upDown={upDown}
            firstToSecondPage={firstToSecondPage}
            secondToThirdPage={secondToThirdPage}
            modal={modal}
            setModal={setModal}
          />
        </>
      ) : secondPage ? (
        <>
          {upDown ? (
            <>
              <Page2
                upDown={upDown}
                firstToSecondPage={firstToSecondPage}
                secondToThirdPage={secondToThirdPage}
                modal={modal}
                setModal={setModal}
              />
              <Page1 upDown={upDown} firstToSecondPage={firstToSecondPage} />
            </>
          ) : (
            <>
              <Page2
                upDown={upDown}
                firstToSecondPage={firstToSecondPage}
                secondToThirdPage={secondToThirdPage}
                modal={modal}
                setModal={setModal}
              />
              <Page3
                upDown={upDown}
                secondToThirdPage={secondToThirdPage}
                setScrollable={setScrollable}
              />
            </>
          )}
        </>
      ) : (
        <>
          <Page3
            upDown={upDown}
            secondToThirdPage={secondToThirdPage}
            setScrollable={setScrollable}
          />
          <Page2
            upDown={upDown}
            firstToSecondPage={firstToSecondPage}
            secondToThirdPage={secondToThirdPage}
            modal={modal}
            setModal={setModal}
          />
        </>
      )}
      {/* <Footer src={myGif} /> */}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div<{ ref: any; modal: boolean }>`
  min-width: 1024px;
  min-height: 764px;

  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
`;
export const boxFadeInUP = keyframes`
   0%{
  transform: translateY(-100%);
  opacity: 1;
}
50%{ 
  transform: translateY(-50%);
}
100%{
  transform: translateY(0%);
  opacity: 1;
}
`;
export const boxFadeInDown = keyframes`
   0%{
  transform: translateY(100%);
  opacity: 1;
}
50%{ 
  transform: translateY(50%);
}
100%{
  transform: translateY(0%);
  opacity: 1;
}
`;
export const boxFadeOutUP = keyframes`
   0%{
  transform: translateY(-100%);
  opacity: 1;
}
50%{ 
  transform: translateY(-50%);
}
100%{
  transform: translateY(0%);
  opacity: 1;
}
`;
export const boxFadeOutDown = keyframes`
   0%{
  transform: translateY(-100%);
  opacity: 1;
}
50%{ 
  transform: translateY(-150%);
}
100%{
  transform: translateY(-200%);
  opacity: 1;
}
`;

// const Footer = styled.img`
//   position: absolute;
//   bottom: 0;
// `;
