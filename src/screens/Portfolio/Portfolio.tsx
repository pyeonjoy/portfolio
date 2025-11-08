import React, { useState } from 'react';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';
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
          <div className={`portfolioGrid ${activeTab === 'app' ? 'portfolioGridApp' : ''}`}>
            {projects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
