import React, { useState } from 'react';
import './Navigation.scss';

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  isScrolled: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  currentSection,
  onSectionChange,
  isDarkMode,
  onToggleDarkMode,
  isScrolled,
}) => {
  const sections = ['About', 'Portfolio', 'Skill', 'Strength', 'Education', 'Career', 'Contact'];
  const [showPortfolioSubmenu, setShowPortfolioSubmenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSectionClick = (section: string) => {
    if (section === 'Portfolio' && window.innerWidth <= 768) {
      setShowPortfolioSubmenu(!showPortfolioSubmenu);
    } else {
      onSectionChange(section);
      setIsMobileMenuOpen(false);
    }
  };

  const isVisible = currentSection !== '';
  
  return (
    <nav className={`navigation ${isScrolled ? 'navigation--scrolled' : ''} ${isVisible ? 'navigation--visible' : ''}`}>
      {isMobileMenuOpen && (
        <div
          className="navigation__overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      <div className="navigation__container">
        <div className="navigation__left">
          <h1 className="navigation__title">Portfolio</h1>
        </div>
        <button
          className="navigation__hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="메뉴 토글"
        >
          <span className={`navigation__hamburger-line ${isMobileMenuOpen ? 'navigation__hamburger-line--open' : ''}`}></span>
          <span className={`navigation__hamburger-line ${isMobileMenuOpen ? 'navigation__hamburger-line--open' : ''}`}></span>
          <span className={`navigation__hamburger-line ${isMobileMenuOpen ? 'navigation__hamburger-line--open' : ''}`}></span>
        </button>
        <div className={`navigation__tabs ${isMobileMenuOpen ? 'navigation__tabs--open' : ''}`}>
          {sections.map((section) => (
            <div
              key={section}
              className={`navigation__tab-wrapper ${
                section === 'Portfolio' ? 'navigation__tab-wrapper--portfolio' : ''
              }`}
              onMouseEnter={() => section === 'Portfolio' && setShowPortfolioSubmenu(true)}
              onMouseLeave={() => section === 'Portfolio' && setShowPortfolioSubmenu(false)}
            >
              <button
                className={`navigation__tab ${
                  currentSection === section ? 'navigation__tab--active' : ''
                }`}
                onClick={() => handleSectionClick(section)}
              >
                {section}
              </button>
              {section === 'Portfolio' && showPortfolioSubmenu && (
                <div 
                  className="navigation__submenu"
                  onMouseEnter={() => setShowPortfolioSubmenu(true)}
                  onMouseLeave={() => setShowPortfolioSubmenu(false)}
                >
                  <button
                    className="navigation__submenu-item"
                    onClick={() => {
                      handleSectionClick('Portfolio');
                      setShowPortfolioSubmenu(false);
                    }}
                  >
                    웹 포트폴리오
                  </button>
                  <button
                    className="navigation__submenu-item"
                    onClick={() => {
                      handleSectionClick('Portfolio');
                      setShowPortfolioSubmenu(false);
                    }}
                  >
                    앱 포트폴리오
                  </button>
                </div>
              )}
            </div>
          ))}
          <label className="navigation__theme-switch">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={onToggleDarkMode}
              aria-label="다크모드 토글"
            />
            <span className={`navigation__theme-slider ${isDarkMode ? 'navigation__theme-slider--dark' : ''}`}>
              <span className="navigation__theme-icon">
                {isDarkMode ? '🌙' : '☀️'}
              </span>
            </span>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

