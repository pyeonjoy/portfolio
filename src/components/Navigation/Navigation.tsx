import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (section: string) => {
    if (section === 'Portfolio' && window.innerWidth <= 768) {
      setShowPortfolioSubmenu(!showPortfolioSubmenu);
    } else {
      // 포트폴리오인 경우 메인 페이지로 이동
      if (section === 'Portfolio') {
        if (location.pathname !== '/') {
          navigate('/');
        }
        setTimeout(() => {
          onSectionChange(section);
        }, 100);
      } else {
        onSectionChange(section);
      }
      setIsMobileMenuOpen(false);
    }
  };

  const isVisible = currentSection !== '';
  
  return (
    <nav className={`navigation ${isScrolled ? 'navigationScrolled' : ''} ${isVisible ? 'navigationVisible' : ''}`}>
      {isMobileMenuOpen && (
        <div
          className="navigationOverlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      <div className="navigationContainer">
        <div className="navigationLeft">
          <h1 className="navigationTitle">Portfolio</h1>
        </div>
        <button
          className="navigationHamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="메뉴 토글"
        >
          <span className={`navigationHamburgerLine ${isMobileMenuOpen ? 'navigationHamburgerLineOpen' : ''}`}></span>
          <span className={`navigationHamburgerLine ${isMobileMenuOpen ? 'navigationHamburgerLineOpen' : ''}`}></span>
          <span className={`navigationHamburgerLine ${isMobileMenuOpen ? 'navigationHamburgerLineOpen' : ''}`}></span>
        </button>
        <div className={`navigationTabs ${isMobileMenuOpen ? 'navigationTabsOpen' : ''}`}>
          {sections.map((section) => (
            <div
              key={section}
              className={`navigationTabWrapper ${
                section === 'Portfolio' ? 'navigationTabWrapperPortfolio' : ''
              }`}
              onMouseEnter={() => section === 'Portfolio' && setShowPortfolioSubmenu(true)}
              onMouseLeave={() => section === 'Portfolio' && setShowPortfolioSubmenu(false)}
            >
              <button
                className={`navigationTab ${
                  currentSection === section ? 'navigationTabActive' : ''
                }`}
                onClick={() => handleSectionClick(section)}
              >
                {section}
              </button>
              {section === 'Portfolio' && showPortfolioSubmenu && (
                <div 
                  className="navigationSubmenu"
                  onMouseEnter={() => setShowPortfolioSubmenu(true)}
                  onMouseLeave={() => setShowPortfolioSubmenu(false)}
                >
                  <button
                    className="navigationSubmenuItem"
                    onClick={() => {
                      handleSectionClick('Portfolio');
                      setShowPortfolioSubmenu(false);
                    }}
                  >
                    웹 포트폴리오
                  </button>
                  <button
                    className="navigationSubmenuItem"
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
          <label className="navigationThemeSwitch">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={onToggleDarkMode}
              aria-label="다크모드 토글"
            />
            <span className={`navigationThemeSlider ${isDarkMode ? 'navigationThemeSliderDark' : ''}`}>
              <span className="navigationThemeIcon">
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

