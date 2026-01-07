import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navigation.css';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // 모바일 메뉴 열릴 때 body 스크롤 막기
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  const handleSectionClick = (section: string) => {
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
  };

  const isVisible = true; // 항상 네비게이션 표시
  
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
              className="navigationTabWrapper"
            >
              <button
                className={`navigationTab ${
                  currentSection === section ? 'navigationTabActive' : ''
                }`}
                onClick={() => handleSectionClick(section)}
              >
                {section}
              </button>
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

