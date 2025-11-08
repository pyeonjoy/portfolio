import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../PortfolioItem/PortfolioItem';
import './PortfolioCard.scss';

interface PortfolioCardProps {
  project: Project;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
  const handleClick = () => {
    // 포트폴리오 상세 페이지로 이동하기 전에 현재 스크롤 위치 저장
    sessionStorage.setItem('mainPageScrollPosition', window.scrollY.toString());
  };

  return (
    <div className="portfolioCard">
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
        <Link to={`/portfolio/${project.id}`} className="portfolioCardButton" onClick={handleClick}>
          자세히 보기
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;

