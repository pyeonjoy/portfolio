import React, { useState } from "react";
import "../../styles/projectItem/ProjectItemApp.css";
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
    if (project.id === "Project03") {
      return Array.from({ length: 10 }, (_, i) => ({
        src: `/img/noovie/noovie${i + 1}.png`,
        alt: `Noovie ${i + 1}`,
        content: null as React.ReactNode,
      }));
    } else if (project.id === "Project04") {
      return Array.from({ length: 12 }, (_, i) => ({
        src: `/img/okeydoggy/okeydoggy${i + 1}.jpg`,
        alt: `Okeydoggy ${i + 1}`,
        content: null as React.ReactNode,
      }));
    }
    return [];
  };

  const projectImages = getProjectImages();

  return (
    <div
      className={`portfolioItemContent ${
        project.id === "Project03"
          ? "portfolioItemContent--noovie"
          : project.id === "Project04"
          ? "portfolioItemContent--okeydoggy"
          : ""
      }`}
    >
      <div className="portfolioContent">
        <div className="portfolioContentApp">
          <div className="portfolioImageContainerApp portfolioImageContainer--fullwidth">
            <PortfolioSwiper slides={projectImages} />
          </div>
          <div className="portfolioInfoContainerApp">
            <PortfolioInfo
              project={project}
              onShowSitemap={() => setShowSitemap(true)}
              onShowDevelop={() => setShowDevelop(true)}
              onShowTech={() => setShowTech(true)}
              onShowSequence={() => setShowSequence(true)}
              onShowErd={() => setShowErd(true)}
            />
          </div>
        </div>
        {project.id !== "Project03" && project.id !== "Project04" && (
          <h2 className="portfolioMainTitle">프로젝트 기획의도</h2>
        )}
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
          project.id === "Project03"
            ? "/img/noovie/noovie_sitemap.png"
            : project.id === "Project04"
            ? "/img/okeydoggy/okeydoggy_sitemap.jpg"
            : ""
        }
        imageAlt="사이트맵"
      />
      <PortfolioModal
        isOpen={showDevelop}
        onClose={() => setShowDevelop(false)}
        imageSrc={
          project.id === "Project03"
            ? "/img/noovie/noovie_dev.png"
            : project.id === "Project04"
            ? "/img/okeydoggy/okeydoggy_dev.jpg"
            : ""
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
        imageSrc={
          project.id === "Project03"
            ? "/img/noovie/noovie_erd.png"
            : project.id === "Project04"
            ? "/img/okeydoggy/okeydoggy_erd.jpg"
            : ""
        }
        imageAlt="테이블 정의서"
      />
    </div>
  );
};

export default PortfolioItem;
