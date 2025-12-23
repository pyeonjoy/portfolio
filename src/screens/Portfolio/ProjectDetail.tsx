import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";
import { getProjectById } from "../../data/projectsData";
import "../../styles/section.scss";
import "./ProjectDetail.scss";

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = id ? getProjectById(id) : undefined;

  const handleBackClick = () => {
    navigate("/");
    // 스크롤 위치 복원은 App.tsx의 useEffect에서 처리됨
  };

  if (!project) {
    return (
      <section className="section sectionPortfolio">
        <div className="sectionContainer">
          <div className="projectDetailNotFound">
            <h2>프로젝트를 찾을 수 없습니다</h2>
            <button
              onClick={handleBackClick}
              className="projectDetailBackButton"
            >
              포트폴리오로 돌아가기
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section sectionPortfolio">
      <div className="sectionContainer">
        <button onClick={handleBackClick} className="projectDetailBackButton">
          ← 포트폴리오로 돌아가기
        </button>
        <div className="projectDetailContent">
          <PortfolioItem project={project} />
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
