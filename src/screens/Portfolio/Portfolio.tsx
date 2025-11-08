import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { webProjects, appProjects } from '../../data/projects';
import '../../styles/section.scss';
import './Portfolio.scss';

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'app'>('web');

  const projects = activeTab === 'web' ? webProjects : appProjects;

  return (
    <section id="portfolio" className="section sectionPortfolio">
      <div className="sectionContainer">
        <h2 className="sectionTitle">Portfolio</h2>
        <div className="sectionContent">
          <div className="portfolioTabs">
            <button
              className={`portfolioTab ${activeTab === 'web' ? 'portfolioTabActive' : ''}`}
              onClick={() => setActiveTab('web')}
            >
              웹 포트폴리오
            </button>
            <button
              className={`portfolioTab ${activeTab === 'app' ? 'portfolioTabActive' : ''}`}
              onClick={() => setActiveTab('app')}
            >
              앱 포트폴리오
            </button>
          </div>
          <div className="portfolioGrid">
            {projects.map((project) => (
              <div key={project.id} className="portfolioCard">
                <div className="portfolioCardImage">
                  <span>960 x 540</span>
                </div>
                <div className="portfolioCardInfo">
                  <div className="portfolioCardId">{project.id}.</div>
                  <h3 className="portfolioCardName">{project.name}</h3>
                  <div className="portfolioCardDetails">
                    <div className="portfolioCardDetailItem">
                      <span className="portfolioCardDetailLabel">작업기간:</span>
                      <span className="portfolioCardDetailValue">{project.period}</span>
                    </div>
                    <div className="portfolioCardDetailItem">
                      <span className="portfolioCardDetailLabel">팀 기여도:</span>
                      <span className="portfolioCardDetailValue">{project.contribution}</span>
                    </div>
                  </div>
                  <Link to={`/portfolio/${project.id}`} className="portfolioCardButton">
                    자세히 보기
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
