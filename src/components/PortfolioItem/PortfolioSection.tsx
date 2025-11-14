import React, { useState } from 'react';
import './PortfolioItem.scss';

interface PortfolioSectionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ title, children, defaultExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`portfolioIntro ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <h4 className="portfolioIntroTitle" onClick={toggleExpand}>
        <span>{title}</span>
        <span className={`portfolioIntroToggleIcon ${isExpanded ? 'expanded' : ''}`}>▼</span>
      </h4>
      <div className={`portfolioImages ${isExpanded ? 'expanded' : 'collapsed'}`}>
        {children}
      </div>
    </div>
  );
};

export default PortfolioSection;

