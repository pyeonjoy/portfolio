import React from "react";
import { Project } from "./types";
import "../../styles/projectItem/ProjectInfo.css";

interface PortfolioInfoProps {
  project: Project;
  onShowSitemap: () => void;
  onShowDevelop: () => void;
  onShowTech: () => void;
  onShowSequence: () => void;
  onShowErd?: () => void;
}

const PortfolioInfo: React.FC<PortfolioInfoProps> = ({
  project,
  onShowSitemap,
  onShowDevelop,
  onShowTech,
  onShowSequence,
  onShowErd,
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
          {project.contributionDetails && (
            <ul className="portfolioProjectDescriptionList">
              {project.contributionDetails.map((detail, index) => (
                <li key={index} className="portfolioProjectDescription">
                  {detail}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {(project.id === "Project01" || project.id === "Project02") && (
        <div className="portfolioButtons">
          <a
            href={
              project.id === "Project01"
                ? "https://github.com/pyeonjoy/ICT_02_Campyou"
                : "https://github.com/orgs/ict2jo/repositories"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="portfolioSpecButton"
          >
            깃허브
          </a>
          <button className="portfolioSpecButton" onClick={onShowDevelop}>
            개발환경 보기
          </button>
          {project.id !== "Project01" && (
            <button className="portfolioSpecButton" onClick={onShowTech}>
              주요 기술 보기
            </button>
          )}

          <a
            href={
              project.id === "Project01"
                ? "https://docs.google.com/spreadsheets/d/19keaY11Am1W9Ap4dCpF6UPmU5P0zjiBuqNKELKjdKAQ/edit?usp=sharing"
                : "https://docs.google.com/spreadsheets/d/1HK-g0uL9euwb4qoEPNCRDX2HBMFpkOIlnR2XA7MTJyQ/edit?usp=sharing"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="portfolioSpecButton"
          >
            기능 정의서 보기
          </a>
          {project.id === "Project01" && onShowErd ? (
            <button className="portfolioSpecButton" onClick={onShowErd}>
              테이블 정의서 보기
            </button>
          ) : (
            <a
              href="https://www.erdcloud.com/d/gMtycE9XbjNz5gDT5"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolioSpecButton"
            >
              테이블 정의서 보기
            </a>
          )}
          {project.id !== "Project01" && (
            <>
              <button className="portfolioSpecButton" onClick={onShowSequence}>
                시퀀스 다이어그램 보기
              </button>
            </>
          )}
          <button className="portfolioSpecButton" onClick={onShowSitemap}>
            사이트맵 보기
          </button>
        </div>
      )}
    </div>
  );
};

export default PortfolioInfo;
