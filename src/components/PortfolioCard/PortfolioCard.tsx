import React from "react";
import { Link } from "react-router-dom";
import { Project } from "../PortfolioItem/PortfolioItem";
import "../../styles/home/PortfolioCard.css";

interface PortfolioCardProps {
  project: Project;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
  const handleClick = () => {
    // 포트폴리오 상세 페이지로 이동하기 전에 현재 스크롤 위치 저장
    sessionStorage.setItem("mainPageScrollPosition", window.scrollY.toString());
  };

  return (
    <div className="card">
      <div className="image">
        <span>960 x 540</span>
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
