import React from 'react';
import './PortfolioItem.scss';

export interface Project {
  id: string;
  name: string;
  period: string;
  contribution: string;
  description: string;
}

interface PortfolioItemProps {
  project: Project;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ project }) => {
  return (
    <div className="portfolio__item-content">
      <div className="portfolio__image-container">
        <div className="portfolio__image-placeholder">
          <span>960 x 540</span>
        </div>
      </div>
      <div className="portfolio__info">
        <div className="portfolio__project-id">{project.id}.</div>
        <h3 className="portfolio__project-name">{project.name}</h3>
        <div className="portfolio__project-details">
          <div className="portfolio__detail-item">
            <span className="portfolio__detail-label">작업기간:</span>
            <span className="portfolio__detail-value">{project.period}</span>
          </div>
          <div className="portfolio__detail-item">
            <span className="portfolio__detail-label">팀 기여도:</span>
            <span className="portfolio__detail-value">{project.contribution}</span>
          </div>
        </div>
        <p className="portfolio__project-description">{project.description}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;

