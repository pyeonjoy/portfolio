import React from "react";
import "../../styles/projectItem/ProjectPlanning.css";

export interface Slide {
  src: string;
  alt: string;
  title?: string;
  content: React.ReactNode;
}

export const getProjectIntroImages = (projectId: string): Slide[] => {
  if (projectId === "Project01") {
    return Array.from({ length: 4 }, (_, i) => ({
      src: `/img/campyou/camp_main${i + 1}.jpg`,
      alt: `CampYou Main ${i + 1}`,
      content: null as React.ReactNode,
    }));
  }

  if (projectId === "Project03") {
    return Array.from({ length: 4 }, (_, i) => ({
      src: `/img/noovie/noovie_intro${i + 1}.jpg`,
      alt: `Noovie Intro ${i + 1}`,
      content: null as React.ReactNode,
    }));
  }

  if (projectId === "Project04") {
    return Array.from({ length: 17 }, (_, i) => ({
      src: `/img/okeydoggy/okeydoggy_intro${i + 1}.jpg`,
      alt: `Okeydoggy Intro ${i + 1}`,
      content: null as React.ReactNode,
    }));
  }

  if (projectId !== "Project02") return [];

  return [
    {
      src: "/img/interviewdot/main1.png",
      alt: "Interviewdot Main 1",
      content: (
        <>
          <div className="planningSection">
            <h5 className="planningSectionTitle">
              면접 연습을 하고싶은데 어떻게 해야할지 모르겠어
            </h5>
            <div className="features">
              <div className="featureItem">
                <img
                  src="/img/interviewdot/ai_interview.png"
                  alt="AI 면접 연습"
                  className="featureImage"
                />
                <h6 className="featureTitle">AI 면접 연습</h6>
                <p className="featureText">
                  실제 면접 질문을 시뮬레이션하여 지원자들이 실전에 대비할 수
                  있도록 도와줍니다.
                </p>
              </div>
              <div className="featureItem">
                <img
                  src="/img/interviewdot/resume.png"
                  alt="자기소개서"
                  className="featureImage"
                />
                <h6 className="featureTitle">자기소개서</h6>
                <p className="featureText">
                  AI가 효과적인 자기소개서를 작성해주어, 지원자들이 고품질의
                  자기소개서를 손쉽게 준비할 수 있도록 지원합니다.
                </p>
              </div>
              <div className="featureItem">
                <img
                  src="/img/interviewdot/community.png"
                  alt="커뮤니티"
                  className="featureImage"
                />
                <h6 className="featureTitle">커뮤니티</h6>
                <p className="featureText">
                  지원자들이 서로 정보를 교류하고 지식을 공유할 수 있는 장을
                  마련하고 있습니다.
                </p>
              </div>
              <div className="featureItem">
                <img
                  src="/img/interviewdot/job_info.png"
                  alt="채용정보"
                  className="featureImage"
                />
                <h6 className="featureTitle">채용정보</h6>
                <p className="featureText">
                  채용 정보를 한 곳에 모아 제공하여, 여러 기업의 채용 공고를
                  효율적으로 비교하고 분석할 수 있게 합니다.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      src: "/img/interviewdot/main2.png",
      alt: "Interviewdot Main 2",
      content: (
        <>
          <div className="planningSection">
            <h5 className="planningSectionTitle">점점 늘어나는 AI면접</h5>
            <div className="features">
              <div className="featureItem">
                <h6 className="featureTitle">면접 질문 구성의 어려움</h6>
                <p className="featureText">
                  현직 인사담당자 83%가 면접에 어려움을 느끼고 있었다.
                </p>
              </div>
              <div className="featureItem">
                <h6 className="featureTitle">시간과 비용 절감</h6>
                <p className="featureText">
                  AI가 지원자의 자기소개서를 평가하는 데 소요되는 시간은 평균
                  3초로, 1만 명의 자기소개서를 평가하는데 걸리는 시간은 단
                  8시간이 소요
                </p>
              </div>
              <div className="featureItem">
                <h6 className="featureTitle">공정하고 직무 중심의 채용</h6>
                <p className="featureText">
                  채용 과정에서 공정성이 더욱 강조되고, 직무 중심의 인재 채용이
                  확산
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      src: "/img/interviewdot/main3.png",
      alt: "Interviewdot Main 3",
      content: (
        <>
          <div className="planningSection">
            <h5 className="planningSectionTitle">AI면접 응시자의 이점</h5>
            <div className="features">
              <div className="featureItem">
                <h6 className="featureTitle">공정한 채용</h6>
                <p className="featureText">
                  인공지능(AI)는 기업이 미리 설정해 놓은 객관적인 데이터로만
                  구직자를 평가하기 때문에 보다 공정한 채용 전형 진행이 가능
                </p>
              </div>
              <div className="featureItem">
                <h6 className="featureTitle">면접 응시 횟수 증가</h6>
                <p className="featureText">
                  사람 면접관이 일일이 면접을 보지 않아도 되기 때문에, 면접전형
                  응시자수를 대폭 늘릴 수 있어요.
                </p>
              </div>
              <div className="featureItem">
                <h6 className="featureTitle">응시자에게 맞춘 면접시간</h6>
                <p className="featureText">
                  응시자들의 시간적, 공간적 상황에 맞춰 면접을 준비하고 기기에
                  상관없이 편하게 임할 수 있는 장점
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];
};
