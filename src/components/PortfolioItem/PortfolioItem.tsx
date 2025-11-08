import React, { useState } from 'react';
import './PortfolioItem.scss';

export interface Project {
  id: string;
  name: string;
  period: string;
  contribution: string;
  description: string;
  troubleshooting?: {
    title: string;
    items: Array<{
      type: 'problem' | 'solution' | 'learning';
      text: string;
      code?: string;
    }>;
    code?: {
      title: string;
      code: string;
    };
  };
}

interface PortfolioItemProps {
  project: Project;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ project }) => {
  const [showCodeIndex, setShowCodeIndex] = useState<number | null>(null);

  return (
    <div className="portfolioItemContent">
      <div className="portfolioImageContainer">
        <div className="portfolioImagePlaceholder">
          <span>960 x 540</span>
        </div>
      </div>
      <div className="portfolioInfo">
        <div className="portfolioProjectId">{project.id}.</div>
        <h3 className="portfolioProjectName">{project.name}</h3>
        <div className="portfolioProjectDetails">
          <div className="portfolioDetailItem">
            <span className="portfolioDetailLabel">작업기간:</span>
            <span className="portfolioDetailValue">{project.period}</span>
          </div>
          <div className="portfolioDetailItem">
            <span className="portfolioDetailLabel">팀 기여도:</span>
            <span className="portfolioDetailValue">{project.contribution}</span>
          </div>
        </div>
        <p className="portfolioProjectDescription">{project.description}</p>
        {project.troubleshooting && (
          <div className="portfolioTroubleshooting">
            <h4 className="portfolioTroubleshootingTitle">{project.troubleshooting.title}</h4>
            <div className="portfolioTroubleshootingContent">
              {project.troubleshooting.items.map((item, index) => {
                // learning 타입이거나 item에 code가 있는 경우 코드 표시
                const hasCode = item.code || (item.type === 'learning' && project.troubleshooting?.code);
                const codeToShow = item.code || project.troubleshooting?.code?.code;
                
                return (
                  <div key={index} className="portfolioTroubleshootingItemWrapper">
                    <div className={`portfolioTroubleshootingItem portfolioTroubleshootingItem--${item.type}`}>
                      <span className="portfolioTroubleshootingIcon">
                        {item.type === 'problem' && '✕'}
                        {item.type === 'solution' && '✓'}
                        {item.type === 'learning' && '•'}
                      </span>
                      <span className="portfolioTroubleshootingText">{item.text}</span>
                    </div>
                    {hasCode && codeToShow && (
                      <>
                        <button
                          className="portfolioCodeToggleButton"
                          onClick={() => setShowCodeIndex(showCodeIndex === index ? null : index)}
                        >
                          {showCodeIndex === index ? '코드 숨기기' : '코드 보기'}
                        </button>
                        {showCodeIndex === index && (
                          <div className="portfolioTroubleshootingCode">
                            <pre className="portfolioCodeBlock">
                              <code>{codeToShow}</code>
                            </pre>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioItem;

