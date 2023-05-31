import styled from "styled-components";

export function Year2015To2018() {
  return (
    <ElementWrapper>
      <Years>2015년 ~ 2018년</Years>
      <Responsibility>공군 하사</Responsibility>
      <WorksContainer>
        <Works>임관</Works>
        <Works>고양시 근무</Works>
        <Works>차량형 위성통신장비 관리 담당</Works>
        <Works>예비 지휘통신망 지원(5개 기지)</Works>
      </WorksContainer>
    </ElementWrapper>
  );
}

export const ElementWrapper = styled.div`
  padding: 0 0 0 15px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 60%;
`;

export const HrRow = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.35);
  width: 75%;
  height: 1px;
`;
export const Years = styled.div`
  color: rgba(90, 0, 0, 0.9);
  padding: 15px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  height: 25px;
  font-family: "omyu_pretty";
  font-size: 20px;
`;
export const Responsibility = styled.div`
  color: rgba(0, 0, 90, 0.9);
  padding: 5px 0 5px 0;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 60%;
  height: 20px;
  font-family: "omyu_pretty";
  font-size: 18px;
`;
export const WorksContainer = styled.div`
  padding: 10px 10px 20px 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  font-size: 16px;

  ::-webkit-scrollbar {
    width: 5px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }
`;
export const Works = styled.li`
  font-family: "omyu_pretty";
  font-size: 20px;
`;
