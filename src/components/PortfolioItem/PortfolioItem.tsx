import React, { useState } from 'react';
import './PortfolioItem.scss';
import PortfolioSection from './PortfolioSection';

export interface Project {
  id: string;
  name: string;
  period: string;
  contribution: string;
  description: string;
  troubleshooting?: {
    title: string;
    items: Array<{
      type: 'problem' | 'solution' | 'learning';
      text: string;
      code?: string;
    }>;
    code?: {
      title: string;
      code: string;
    };
  };
}

interface PortfolioItemProps {
  project: Project;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ project }) => {
  const [showCodeIndex, setShowCodeIndex] = useState<number | null>(null);
  const [showSitemap, setShowSitemap] = useState<boolean>(false);
  const [showDevelop, setShowDevelop] = useState<boolean>(false);

  // 트러블 슈팅 번호 계산 함수 (현재 항목이 속한 그룹의 problem 번호 반환)
  const getTroubleshootingNumber = (currentIndex: number, items: Array<{ type: 'problem' | 'solution' | 'learning'; text: string; code?: string }> | undefined) => {
    if (!items) return 0;
    // 현재 인덱스에서 뒤로 가면서 가장 가까운 problem을 찾음
    for (let i = currentIndex; i >= 0; i--) {
      if (items[i]?.type === 'problem') {
        // 이 problem의 번호를 계산
        let count = 0;
        for (let j = 0; j <= i; j++) {
          if (items[j]?.type === 'problem') {
            count++;
          }
        }
        return count;
      }
    }
    return 0;
  };

  return (
    <div className="portfolioItemContent">
      <div className="portfolioImageContainer">
        <div className="portfolioImagePlaceholder">
          <span>960 x 540</span>
        </div>
      </div>
      <div className="portfolioInfo">
        <div className="portfolioProjectId">{project.id}.</div>
        <h3 className="portfolioProjectName">{project.name}</h3>
        <div className="portfolioProjectDetails">
          <div className="portfolioDetailItem">
            <span className="portfolioDetailLabel">작업기간:</span>
            <span className="portfolioDetailValue">{project.period}</span>
          </div>
          <div className="portfolioDetailItem">
            <span className="portfolioDetailLabel">팀 기여도:</span>
            <span className="portfolioDetailValue">{project.contribution}</span>
          </div>
        </div>
        <p className="portfolioProjectDescription">{project.description}</p>
        {project.id === 'Project03' && (
          <div className="portfolioButtons">
            <a
              href="https://docs.google.com/spreadsheets/d/1HK-g0uL9euwb4qoEPNCRDX2HBMFpkOIlnR2XA7MTJyQ/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolioSpecButton"
            >
              기능 정의서 보기
            </a>
            <button
              className="portfolioSpecButton"
              onClick={() => setShowSitemap(true)}
            >
              사이트맵 보기
            </button>
            <button
              className="portfolioSpecButton"
              onClick={() => setShowDevelop(true)}
            >
              개발환경 보기
            </button>
            <a
              href="https://www.erdcloud.com/d/gMtycE9XbjNz5gDT5"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolioSpecButton"
            >
              테이블 정의서 보기
            </a>
          </div>
        )}
        {showSitemap && (
          <div className="portfolioSitemapModal" onClick={() => setShowSitemap(false)}>
            <div className="portfolioSitemapModalContent" onClick={(e) => e.stopPropagation()}>
              <button
                className="portfolioSitemapCloseButton"
                onClick={() => setShowSitemap(false)}
              >
                ✕
              </button>
              <img src="/img/interviewdot/sitemap.png" alt="사이트맵" className="portfolioSitemapImage" />
            </div>
          </div>
        )}
        {showDevelop && (
          <div className="portfolioSitemapModal" onClick={() => setShowDevelop(false)}>
            <div className="portfolioSitemapModalContent" onClick={(e) => e.stopPropagation()}>
              <button
                className="portfolioSitemapCloseButton"
                onClick={() => setShowDevelop(false)}
              >
                ✕
              </button>
              <img src="/img/interviewdot/develop.png" alt="개발환경" className="portfolioSitemapImage" />
            </div>
          </div>
        )}
        {project.id === 'Project03' && (
          <PortfolioSection title="프로젝트 소개">
            <img src="/img/interviewdot/main1.png" alt="Interviewdot Main 1" className="portfolioImage" />
            <h5 className="portfolioSectionTitle">면접 연습을 하고싶은데 어떻게 해야할지 모르겠어</h5>
            <img src="/img/interviewdot/main2.png" alt="Interviewdot Main 2" className="portfolioImage" />
            <div className="portfolioSection">
              <h5 className="portfolioSectionTitle">점점 늘어나는 AI면접</h5>
              <div className="portfolioBoxes">
                <div className="portfolioBox">
                  <h6 className="portfolioBoxTitle">면접 질문 구성의 어려움</h6>
                  <p className="portfolioBoxText">현직 인사담당자 83%가 면접에 어려움을 느끼고 있었다.</p>
                </div>
                <div className="portfolioBox">
                  <h6 className="portfolioBoxTitle">시간과 비용 절감</h6>
                  <p className="portfolioBoxText">
                    AI가 지원자의 자기소개서를 평가하는 데 소요되는 시간은 평균 3초로
                  </p>
                  <p className="portfolioBoxText">
                    1만 명의 자기소개서를 평가하는데 걸리는 시간은 단 8시간이 소요
                  </p>
                </div>
                <div className="portfolioBox">
                  <h6 className="portfolioBoxTitle">공정하고 직무 중심의 채용</h6>
                  <p className="portfolioBoxText">
                    채용 과정에서 공정성이 더욱 강조되고, 직무 중심의 인재 채용이 확산
                  </p>
                </div>
              </div>
            </div>
            <img src="/img/interviewdot/main3.png" alt="Interviewdot Main 3" className="portfolioImage" />
            <div className="portfolioSection">
              <h5 className="portfolioSectionTitle">AI면접 응시자의 이점</h5>
              <div className="portfolioBoxes">
                <div className="portfolioBox">
                  <h6 className="portfolioBoxTitle">공정한 채용</h6>
                  <p className="portfolioBoxText">
                    인공지능(AI)는 기업이 미리 설정해 놓은 객관적인 데이터로만 구직자를 평가하기 때문에 보다 공정한 채용 전형 진행이 가능
                  </p>
                </div>
                <div className="portfolioBox">
                  <h6 className="portfolioBoxTitle">면접 응시 횟수 증가</h6>
                  <p className="portfolioBoxText">
                    사람 면접관이 일일이 면접을 보지 않아도 되기 때문에, 면접전형 응시자수를 대폭 늘릴 수 있어요.
                  </p>
                </div>
                <div className="portfolioBox">
                  <h6 className="portfolioBoxTitle">응시자에게 맞춘 면접시간</h6>
                  <p className="portfolioBoxText">
                    응시자들의 시간적, 공간적 상황에 맞춰 면접을 준비하고 기기에 상관없이 편하게 임할 수 있는 장점
                  </p>
                </div>
              </div>
            </div>
            <div className="portfolioSection">
              <h5 className="portfolioSectionTitle">프로젝트 주요 기능</h5>
              <div className="portfolioFeatures">
                <div className="portfolioFeatureItem">
                  <img src="/img/interviewdot/ai_interview.png" alt="AI 면접 연습" className="portfolioFeatureImage" />
                  <h6 className="portfolioFeatureTitle">AI 면접 연습</h6>
                  <p className="portfolioFeatureText">실제 면접 질문을 시뮬레이션하여 지원자들이 실전에 대비할 수 있도록 도와줍니다.</p>
                </div>
                <div className="portfolioFeatureItem">
                  <img src="/img/interviewdot/resume.png" alt="자기소개서" className="portfolioFeatureImage" />
                  <h6 className="portfolioFeatureTitle">자기소개서</h6>
                  <p className="portfolioFeatureText">AI가 효과적인 자기소개서를 작성해주어, 지원자들이 고품질의 자기소개서를 손쉽게 준비할 수 있도록 지원합니다.</p>
                </div>
                <div className="portfolioFeatureItem">
                  <img src="/img/interviewdot/community.png" alt="커뮤니티" className="portfolioFeatureImage" />
                  <h6 className="portfolioFeatureTitle">커뮤니티</h6>
                  <p className="portfolioFeatureText">지원자들이 서로 정보를 교류하고 지식을 공유할 수 있는 장을 마련하고 있습니다.</p>
                </div>
                <div className="portfolioFeatureItem">
                  <img src="/img/interviewdot/job_info.png" alt="채용정보" className="portfolioFeatureImage" />
                  <h6 className="portfolioFeatureTitle">채용정보</h6>
                  <p className="portfolioFeatureText">채용 정보를 한 곳에 모아 제공하여, 여러 기업의 채용 공고를 효율적으로 비교하고 분석할 수 있게 합니다.</p>
                </div>
              </div>
            </div>
          </PortfolioSection>
        )}
        {project.troubleshooting && (
          <div className="portfolioTroubleshooting">
            <h4 className="portfolioTroubleshootingTitle">{project.troubleshooting.title}</h4>
            <div className="portfolioTroubleshootingContent">
              {project.troubleshooting.items.map((item, index) => {
                // 모든 타입에 대해 번호 계산 (현재 인덱스까지의 problem 개수)
                const troubleshootingNumber = getTroubleshootingNumber(index, project.troubleshooting?.items);

                // item에 code가 있는 경우 코드 표시
                const hasCode = !!item.code;
                const codeToShow = item.code;
                
                return (
                  <div key={index} className="portfolioTroubleshootingItemWrapper">
                    <div className={`portfolioTroubleshootingItem portfolioTroubleshootingItem--${item.type}`}>
                      <span className="portfolioTroubleshootingIcon">
                        {item.type === 'problem' && '✕'}
                        {item.type === 'solution' && '✓'}
                        {item.type === 'learning' && '•'}
                      </span>
                      <span className="portfolioTroubleshootingText">
                        {troubleshootingNumber > 0 && `${troubleshootingNumber}. `}
                        {item.text}
                      </span>
                    </div>
                    {hasCode && codeToShow && (
                      <>
                        <button
                          className="portfolioCodeToggleButton"
                          onClick={() => setShowCodeIndex(showCodeIndex === index ? null : index)}
                        >
                          {showCodeIndex === index ? '코드 숨기기' : '코드 보기'}
                        </button>
                        {showCodeIndex === index && (
                          <div className="portfolioTroubleshootingCode">
                            <pre className="portfolioCodeBlock">
                              <code>{codeToShow}</code>
                            </pre>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {project.id === 'Project03' && (
          <PortfolioSection title="주요 기술">
            <div className="portfolioSection">
              <h5 className="portfolioSectionTitle">AI면접</h5>
              <img src="/img/interviewdot/tech_ai.png" alt="AI면접" className="portfolioTechImage" />
            </div>
            <div className="portfolioSection">
              <h5 className="portfolioSectionTitle">Spring Security / JWTUtil</h5>
              <img src="/img/interviewdot/tech_jwt.png" alt="Spring Security / JWTUtil" className="portfolioTechImage" />
            </div>
            <div className="portfolioSection">
              <h5 className="portfolioSectionTitle">공공 데이터포털 API</h5>
              <img src="/img/interviewdot/tech_api.png" alt="공데이터포털 API" className="portfolioTechImage" />
            </div>
          </PortfolioSection>
        )}
        {project.id === 'Project03' && (
          <PortfolioSection title="시퀀스 다이어그램">
            <div className="portfolioSection">
              <h5 className="portfolioSectionTitle">JWTUtil</h5>
              <img src="/img/interviewdot/seq_jwt.png" alt="JWTUtil 시퀀스 다이어그램" className="portfolioTechImage" />
            </div>
            <div className="portfolioSection">
              <h5 className="portfolioSectionTitle">1:1문의</h5>
              <img src="/img/interviewdot/seq_qna.png" alt="1:1문의 시퀀스 다이어그램" className="portfolioTechImage" />
            </div>
            <div className="portfolioSection">
              <h5 className="portfolioSectionTitle">면접, 합격자 후기 게시판</h5>
              <img src="/img/interviewdot/seq_success.png" alt="면접, 합격자 후기 게시판 시퀀스 다이어그램" className="portfolioTechImage" />
            </div>
            <div className="portfolioSection">
              <h5 className="portfolioSectionTitle">신고 처리</h5>
              <img src="/img/interviewdot/seq_report.png" alt="신고 처리 시퀀스 다이어그램" className="portfolioTechImage" />
            </div>
          </PortfolioSection>
        )}
        {project.id === 'Project03' && (
          <PortfolioSection title="플로우차트">
            <div className="portfolioFlowchartItem">
              <h5 className="portfolioSectionTitle">로그인</h5>
              <img src="/img/interviewdot/flow_login.png" alt="로그인 플로우차트" className="portfolioFlowchartImage" />
            </div>
            <div className="portfolioFlowchartItem">
              <h5 className="portfolioSectionTitle">AI면접</h5>
              <img src="/img/interviewdot/flow_ai.png" alt="AI면접 플로우차트" className="portfolioFlowchartImage" />
            </div>
            <div className="portfolioFlowchartItem">
              <h5 className="portfolioSectionTitle">결제</h5>
              <img src="/img/interviewdot/flow_card.png" alt="결제 플로우차트" className="portfolioFlowchartImage" />
            </div>
            <div className="portfolioFlowchartItem">
              <h5 className="portfolioSectionTitle">이력서</h5>
              <img src="/img/interviewdot/flow_fob.png" alt="이력서 플로우차트" className="portfolioFlowchartImage" />
            </div>
          </PortfolioSection>
        )}
      </div>
    </div>
  );
};

export default PortfolioItem;

