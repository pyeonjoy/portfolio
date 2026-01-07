import React from "react";
import { Link } from "react-router-dom";
import { Project } from "../ProjectItem/types";
import "../../styles/home/PortfolioCard.css";

interface PortfolioCardProps {
  project: Project;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
  const handleClick = () => {
    // 포트폴리오 상세 페이지로 이동하기 전에 현재 스크롤 위치 저장
    sessionStorage.setItem("mainPageScrollPosition", window.scrollY.toString());
  };

  const getImagePath = (projectId: string): string => {
    const imageMap: { [key: string]: string } = {
      Project01: "/img/campyou/campyou_main.jpg",
      Project02: "/img/interviewdot/interview_main.jpg",
      Project03: "/img/noovie/trend_main.jpg",
      Project04: "/img/okeydoggy/okeydoggy_main.jpg",
    };
    return imageMap[projectId] || "";
  };

  return (
    <div className="card">
      <div className="image">
        <img src={getImagePath(project.id)} alt={project.name} />
      </div>
      <div className="info">
        <div className="id">{project.id}.</div>
        <h3 className="name">{project.name}</h3>
        <div className="details">
          <div className="detailItem">
            <span className="detailLabel">작업기간:</span>
            <span className="detailValue">{project.period}</span>
          </div>
          <div className="detailItem">
            <span className="detailLabel">팀 기여도:</span>
            <span className="detailValue">{project.contribution}</span>
          </div>
        </div>
        {project.technologies && project.technologies.length > 0 && (
          <div className="techStack">
            {project.technologies.map((tech, index) => (
              <span key={index} className="techTag">
                {tech}
              </span>
            ))}
          </div>
        )}
        <Link
          to={`/portfolio/${project.id}`}
          className="button"
          onClick={handleClick}
        >
          자세히 보기
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
