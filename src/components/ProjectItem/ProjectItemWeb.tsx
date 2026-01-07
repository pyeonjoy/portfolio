import React, { useState } from "react";
import "../../styles/projectItem/ProjectItemWeb.css";
import "../../styles/common/Swiper.css";
import "../../styles/projectItem/ProjectInfo.css";
import "../../styles/common/Modal.css";
import "../../styles/projectItem/ProjectTroubleshooting.css";
import { Project, getTechImages, getSequenceImages } from "./types";
import { getProjectIntroImages } from "./ProjectPlanning";
import PortfolioSwiper from "../Common/Swiper";
import PortfolioInfo from "./ProjectInfo";
import PortfolioTroubleshooting from "./ProjectTroubleshooting";
import PortfolioModal from "../Common/Modal";

export type { Project };

interface PortfolioItemProps {
  project: Project;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ project }) => {
  const [showSitemap, setShowSitemap] = useState<boolean>(false);
  const [showDevelop, setShowDevelop] = useState<boolean>(false);
  const [showTech, setShowTech] = useState<boolean>(false);
  const [showSequence, setShowSequence] = useState<boolean>(false);
  const [showErd, setShowErd] = useState<boolean>(false);

  const projectIntroImages = getProjectIntroImages(project.id);

  const getProjectImages = () => {
    if (project.id === "Project01") {
      return Array.from({ length: 14 }, (_, i) => ({
        src: `/img/campyou/campyou${i + 1}.jpg`,
        alt: `CampYou ${i + 1}`,
        content: null as React.ReactNode,
      }));
    } else if (project.id === "Project02") {
      return Array.from({ length: 8 }, (_, i) => ({
        src: `/img/interviewdot/interview${i + 1}.jpg`,
        alt: `Interview ${i + 1}`,
        content: null as React.ReactNode,
      }));
    }
    return [];
  };

  const projectImages = getProjectImages();

  return (
    <div
      className={`portfolioItemContent ${
        project.id === "Project01"
          ? "portfolioItemContent--campyou"
          : project.id === "Project02"
          ? "portfolioItemContent--interviewdot"
          : ""
      }`}
    >
      <div className="portfolioContent">
        <div className="portfolioImageContainer portfolioImageContainer--fullwidth">
          <PortfolioSwiper slides={projectImages} />
        </div>
        <PortfolioInfo
          project={project}
          onShowSitemap={() => setShowSitemap(true)}
          onShowDevelop={() => setShowDevelop(true)}
          onShowTech={() => setShowTech(true)}
          onShowSequence={() => setShowSequence(true)}
          onShowErd={() => setShowErd(true)}
        />
        <h2 className="portfolioMainTitle">프로젝트 기획의도</h2>
        <div className="portfolioImageContainer portfolioImageContainer--original">
          <PortfolioSwiper slides={projectIntroImages} />
        </div>
        <PortfolioTroubleshooting
          troubleshooting={project.troubleshooting}
          projectId={project.id}
        />
      </div>

      <PortfolioModal
        isOpen={showSitemap}
        onClose={() => setShowSitemap(false)}
        imageSrc={
          project.id === "Project01"
            ? "/img/campyou/camp_site.jpg"
            : "/img/interviewdot/sitemap.png"
        }
        imageAlt="사이트맵"
      />
      <PortfolioModal
        isOpen={showDevelop}
        onClose={() => setShowDevelop(false)}
        imageSrc={
          project.id === "Project01"
            ? "/img/campyou/camp_dev.jpg"
            : "/img/interviewdot/develop.png"
        }
        imageAlt="개발환경"
      />
      <PortfolioModal
        isOpen={showTech}
        onClose={() => setShowTech(false)}
        images={getTechImages(project.id)}
        imageAlt="주요 기술"
      />
      <PortfolioModal
        isOpen={showSequence}
        onClose={() => setShowSequence(false)}
        images={getSequenceImages(project.id)}
        imageAlt="시퀀스 다이어그램"
      />
      <PortfolioModal
        isOpen={showErd}
        onClose={() => setShowErd(false)}
        imageSrc="/img/campyou/camp_erd.jpg"
        imageAlt="테이블 정의서"
      />
    </div>
  );
};

export default PortfolioItem;

