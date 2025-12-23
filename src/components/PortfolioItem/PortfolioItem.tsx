import React, { useState } from "react";
import "../../styles/portfolioItem/PortfolioItem.css";
import "../../styles/common/PortfolioSwiper.css";
import "../../styles/portfolioItem/PortfolioInfo.css";
import "../../styles/common/PortfolioModal.css";
import "../../styles/portfolioItem/PortfolioTroubleshooting.css";
import { Project, getTechImages, getSequenceImages } from "./types";
import { getProjectIntroImages } from "./PoltfolioPlanning";
import PortfolioSwiper from "../Common/PortfolioSwiper";
import PortfolioInfo from "./PortfolioInfo";
import PortfolioTroubleshooting from "./PortfolioTroubleshooting";
import PortfolioModal from "../Common/PortfolioModal";

export type { Project };

interface PortfolioItemProps {
  project: Project;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ project }) => {
  const [showSitemap, setShowSitemap] = useState<boolean>(false);
  const [showDevelop, setShowDevelop] = useState<boolean>(false);
  const [showTech, setShowTech] = useState<boolean>(false);
  const [showSequence, setShowSequence] = useState<boolean>(false);

  const projectIntroImages = getProjectIntroImages(project.id);

  return (
    <div
      className={`portfolioItemContent ${
        project.id === "Project03" ? "portfolioItemContent--interviewdot" : ""
      }`}
    >
      <div className="portfolioContent">
        <PortfolioInfo
          project={project}
          onShowSitemap={() => setShowSitemap(true)}
          onShowDevelop={() => setShowDevelop(true)}
          onShowTech={() => setShowTech(true)}
          onShowSequence={() => setShowSequence(true)}
        />
        <h2 className="portfolioMainTitle">프로젝트 기획의도</h2>
        <div className="portfolioImageContainer">
          <PortfolioSwiper slides={projectIntroImages} />
        </div>
        <PortfolioTroubleshooting troubleshooting={project.troubleshooting} />
      </div>

      <PortfolioModal
        isOpen={showSitemap}
        onClose={() => setShowSitemap(false)}
        imageSrc="/img/interviewdot/sitemap.png"
        imageAlt="사이트맵"
      />
      <PortfolioModal
        isOpen={showDevelop}
        onClose={() => setShowDevelop(false)}
        imageSrc="/img/interviewdot/develop.png"
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
        imageAlt="시퀀스 다이어그램램"
      />
    </div>
  );
};

export default PortfolioItem;
