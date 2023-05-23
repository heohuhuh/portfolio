import { useEffect, useRef } from "react";
import styled from "styled-components";

type props = {
  modalSwitch: string;
};

export function ProjectAccountsContainer({ modalSwitch }: props) {
  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (e: any) => {
      e.stopPropagation();
    };

    const scrollableDiv: any = projectRef.current;

    scrollableDiv.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      scrollableDiv.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const projectAccounts: any = {
    JSTodo: (
      <ProjectAccount ref={projectRef}>
        <Text>처음 개발에 입문하게 되면서 만든 투두리스트입니다.</Text>
        <Text>
          기본적인 HTML,CSS 구조와 JavaScript의 작성법 등 알게되는 계기가
          되었습니다.
        </Text>
      </ProjectAccount>
    ),
    JSWeather: (
      <ProjectAccount ref={projectRef}>
        <Text>오픈API를 활용하여 날씨를 확인하는 어플을 만들어보았습니다.</Text>
        <Text>
          Axios를 활용하여 오픈API의 소스를 활용하는 경험을 하였습니다.
        </Text>
      </ProjectAccount>
    ),
    JSTyping: (
      <ProjectAccount ref={projectRef}>
        <Text>
          간단한 타자게임을 만들며 초기에 만든 결과물에서 제가 평소 알던
          타자게임에 부족한 기능들이 보였습니다.
        </Text>
        <Text>
          그런 기능들을 추가하며 보완하며 결과물의 완성도가 올라가는 경험을 하며
          성취감을 느꼈습니다.
        </Text>
      </ProjectAccount>
    ),

    JSPuzzle: (
      <ProjectAccount ref={projectRef}>
        <Text>
          해당 앱에서도 타자게임과 같이 처음 요구했던 기능들 외에도 추가로
          필요로 느껴지는 기능들이 보였습니다.
        </Text>
        <Text>
          그런 기능들을 추가하고 기존에 필요없는 기능들도 삭제하는 등 애자일
          방식의 개발에 흥미를 가지게되었습니다.
        </Text>
      </ProjectAccount>
    ),

    ReactTodo: (
      <ProjectAccount ref={projectRef}>
        <Text>
          React를 통해 처음 만들며 LocalForage를 사용하여 본 투두리스트입니다.
        </Text>
        <Text>
          바닐라JS와 비교하여 완료한 목록도 추가하였으며, 이름 수정기능도
          추가하였습니다.
        </Text>
        <Text>
          해당 프로젝트는 지인에게 공개하여 부족한 점을 보완하며 애자일방식에
          재미를 알게된 프로젝트입니다.
        </Text>
      </ProjectAccount>
    ),

    ReactNumberBB: (
      <ProjectAccount ref={projectRef}>
        <Text>
          다른 지인과 함께 공부를 위해 시작한 머리쓰며 재밌었던 게임을
          만들고자했습니다.
        </Text>
        <Text>
          시작은 같이 하였으나 흥미를 느끼지 못한 지인이 중도하차하여 혼자
          완성하게되었습니다.
        </Text>
        <Text>
          Vercel을 통해 간단하게 배포해보았으며, 친구에게 공개하여 피드백을 받고
          몇몇 기능 추가 및 수정을 진행하며 React에 더 익숙해지고 배포의 경험을
          알게된 프로젝트입니다.
        </Text>
      </ProjectAccount>
    ),

    ReactInstaclone: (
      <ProjectAccount ref={projectRef}>
        <Text>
          클론코딩을 진행해보고자하여 인스타그램으로 선택하여 만들었습니다.
        </Text>
        <Text>
          스타일링에 대해 좀 더 알아가는 계기가 되었으며 반응형 웹 제작 방법에
          대해 더 공부하게 된 프로젝트였습니다.
        </Text>
      </ProjectAccount>
    ),
  };
  return projectAccounts[modalSwitch];
}

export function ProjectSummaryContainer({ modalSwitch }: props) {
  const projectSummary: any = {
    JSTodo: (
      <ProjectSummary>
        <Text>주요 기능 : 투두리스트 관리,추가,삭제</Text>
        <Text>사용한 기술 : HTML, CSS, JavaScript</Text>
      </ProjectSummary>
    ),
    JSWeather: (
      <ProjectSummary>
        <Text>주요 기능 : 지역별 날씨 확인</Text>
        <Text>사용한 기술 : HTML, CSS, JavaScript</Text>
      </ProjectSummary>
    ),
    JSTyping: (
      <ProjectSummary>
        <Text>주요 기능 : 한 단어별 제한시간 5초의 타자게임</Text>
        <Text>사용한 기술 : HTML, CSS, JavaScript</Text>
      </ProjectSummary>
    ),

    JSPuzzle: (
      <ProjectSummary>
        <Text>
          주요 기능 : 미리보기 3초의 시간 후 30초 안에 퍼즐을 완성하는 게임
        </Text>
        <Text>사용한 기술 : HTML, CSS, JavaScript</Text>
      </ProjectSummary>
    ),

    ReactTodo: (
      <ProjectSummary>
        <Text>주요 기능 : 투두리스트 관리,추가,수정,삭제,저장</Text>
        <Text>사용한 기술 : React, TypeScript, LocalForage</Text>
      </ProjectSummary>
    ),

    ReactNumberBB: (
      <ProjectSummary>
        <Text>주요 기능 : 3~5자리 선택하여 진행하는 숫자야구 게임</Text>
        <Text>사용한 기술 : React, TypeScript</Text>
      </ProjectSummary>
    ),

    ReactInstaclone: (
      <ProjectSummary>
        <Text>주요 기능 : 인스타그램 클론 코딩</Text>
        <Text>사용한 기술 : React, TypeScript</Text>
      </ProjectSummary>
    ),
  };

  return projectSummary[modalSwitch];
}

const ProjectAccount = styled.div`
  padding: 0px 20px 0 20px;
  width: 100%;
  height: calc(100% - 30px);
  justify-content: center;
  align-items: center;
  overflow: auto;
  overflow: overlay;
`;

const ProjectSummary = styled.div`
  padding: 0 20px 0 20px;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const Text = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
`;
