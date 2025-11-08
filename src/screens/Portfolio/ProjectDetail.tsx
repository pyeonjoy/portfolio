import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
import { getProjectById } from '../../data/projects';
import '../../styles/section.scss';
import './ProjectDetail.scss';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <section className="section sectionPortfolio">
        <div className="sectionContainer">
          <div className="projectDetailNotFound">
            <h2>프로젝트를 찾을 수 없습니다</h2>
            <Link to="/portfolio" className="projectDetailBackButton">
              포트폴리오로 돌아가기
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section sectionPortfolio">
      <div className="sectionContainer">
        <Link to="/portfolio" className="projectDetailBackButton">
          ← 포트폴리오로 돌아가기
        </Link>
        <div className="projectDetailContent">
          <PortfolioItem project={project} />
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;

