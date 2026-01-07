import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PortfolioItemWeb from "../components/ProjectItem/ProjectItemWeb";
import PortfolioItemApp from "../components/ProjectItem/ProjectItemApp";
import { getProjectById, webProjects } from "../data/projectsData";
import "../styles/section.scss";
import "../styles/projectItem/ProjectDetail.css";

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
          <div className="notFound">
            <h2>프로젝트를 찾을 수 없습니다</h2>
            <button onClick={handleBackClick} className="backButton">
              포트폴리오로 돌아가기
            </button>
          </div>
        </div>
      </section>
    );
  }

  const isWebProject = webProjects.some((p) => p.id === project.id);
  const PortfolioItem = isWebProject ? PortfolioItemWeb : PortfolioItemApp;

  const getBackButtonClass = () => {
    if (project.id === "Project01") {
      return "backButton--project01";
    } else if (project.id === "Project02") {
      return "backButton--project02";
    } else if (project.id === "Project03") {
      return "backButton--project03";
    } else if (project.id === "Project04") {
      return "backButton--project04";
    }
    return "";
  };

  return (
    <section className="section sectionPortfolio">
      <div className="sectionContainer">
        <button
          onClick={handleBackClick}
          className={`backButton ${getBackButtonClass()}`}
        >
          ← 포트폴리오로 돌아가기
        </button>
        <div className="content">
          <PortfolioItem project={project} />
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
