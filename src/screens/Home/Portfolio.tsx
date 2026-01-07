import React, { useState } from "react";
import PortfolioCard from "../../components/ProjectCard/ProjectCard";
import { webProjects, appProjects } from "../../data/projectsData";
import "../../styles/section.scss";
import "../../styles/home/Portfolio.css";

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"web" | "app">("web");

  const projects = activeTab === "web" ? webProjects : appProjects;

  return (
    <section id="portfolio" className="section sectionPortfolio">
      <div className="sectionContainer">
        <h2 className="sectionTitle">Portfolio</h2>
        <div className="sectionContent">
          <div className="tabs">
            <button
              className={`tab ${activeTab === "web" ? "tabActive" : ""}`}
              onClick={() => setActiveTab("web")}
            >
              웹 포트폴리오
            </button>
            <button
              className={`tab ${activeTab === "app" ? "tabActive" : ""}`}
              onClick={() => setActiveTab("app")}
            >
              앱 포트폴리오
            </button>
          </div>
          <div
            className={`portfolioGrid ${activeTab === "app" ? "gridApp" : ""}`}
          >
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
