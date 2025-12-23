import React from "react";
import { Project } from "./types";
import "../../styles/portfolioItem/PortfolioInfo.css";

interface PortfolioInfoProps {
  project: Project;
  onShowSitemap: () => void;
  onShowDevelop: () => void;
  onShowTech: () => void;
  onShowSequence: () => void;
}

const PortfolioInfo: React.FC<PortfolioInfoProps> = ({
  project,
  onShowSitemap,
  onShowDevelop,
  onShowTech,
  onShowSequence,
}) => {
  return (
    <div className="portfolioInfo">
      <div className="portfolioProjectId">{project.id}.</div>
      <h3 className="portfolioProjectName">{project.name}</h3>

      <p className="portfolioProjectDescription">{project.description}</p>
      <div className="portfolioProjectDetails">
        <div className="portfolioDetailItem">
          <span className="portfolioDetailLabel">작업기간:</span>
          <span className="portfolioDetailValue">{project.period}</span>
        </div>
        <div className="portfolioDetailItem">
          <span className="portfolioDetailLabel">작업인원:</span>
          <span className="portfolioDetailValue">{project.teamSize}</span>
        </div>
        <div className="portfolioDetailItem">
          <span className="portfolioDetailLabel">팀 기여도:</span>
          <span className="portfolioDetailValue">{project.contribution}</span>
        </div>
        <div className="portfolioDetailItem">
          <ul className="portfolioProjectDescriptionList">
            <li className="portfolioProjectDescription">
              관리자 로그인 구현 및 BCYpasswordEncoder 사용한 비밀번호 암호화
            </li>
            <li className="portfolioProjectDescription">
              OPEN AI를 사용한 자기소개서 수정 기능 구현
            </li>
            <li className="portfolioProjectDescription">
              채용공고 API 연동을 통한 채용공고 조회 및 채용공고 즐겨찾기 기능
              구현
            </li>
            <li className="portfolioProjectDescription">
              풀캘린더를 이용해 일정관리 및 채용공고 동기화
            </li>
            <li className="portfolioProjectDescription">
              1:1문의 게시판 및 신고기능, STMP를 활용한 메일 구현
            </li>
            <li className="portfolioProjectDescription">
              면접 후기 게시판 및 댓글, 좋아요 등의 커뮤니티 기능 개발
            </li>
          </ul>
        </div>
      </div>
      {project.id === "Project03" && (
        <div className="portfolioButtons">
          <button className="portfolioSpecButton" onClick={onShowDevelop}>
            개발환경 보기
          </button>
          <button className="portfolioSpecButton" onClick={onShowTech}>
            주요 기술 보기
          </button>

          <a
            href="https://docs.google.com/spreadsheets/d/1HK-g0uL9euwb4qoEPNCRDX2HBMFpkOIlnR2XA7MTJyQ/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolioSpecButton"
          >
            기능 정의서 보기
          </a>

          <a
            href="https://www.erdcloud.com/d/gMtycE9XbjNz5gDT5"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolioSpecButton"
          >
            테이블 정의서 보기
          </a>
          <button className="portfolioSpecButton" onClick={onShowSequence}>
            시퀀스 다이어그램 보기
          </button>
          <button className="portfolioSpecButton" onClick={onShowSitemap}>
            사이트맵 보기
          </button>
        </div>
      )}
    </div>
  );
};

export default PortfolioInfo;
