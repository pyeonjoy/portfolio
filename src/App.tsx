import React, { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './screens/About/About';
import Portfolio from './screens/Portfolio/Portfolio';
import Skill from './screens/Skill/Skill';
import Education from './screens/Education/Education';
import Career from './screens/Career/Career';
import Contact from './screens/Contact/Contact';
import './App.scss';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    // 로컬 스토리지에서 다크모드 설정 불러오기
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
  }, []);

  useEffect(() => {
    // 다크모드 클래스 적용
    if (isDarkMode) {
      document.documentElement.classList.add('app--dark');
    } else {
      document.documentElement.classList.remove('app--dark');
    }
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  useEffect(() => {
    // 초기 로드 시 스크롤을 맨 위로 강제 설정
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // 스크롤 이벤트 리스너
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      const sections = ['About', 'Portfolio', 'Skill', 'Education', 'Career', 'Contact'];
      const heroHeight = window.innerHeight;

      // 스크롤 여부 확인 (Navigation 배경색 제어)
      setIsScrolled(window.scrollY > heroHeight * 0.5);

      // Hero 섹션에 있을 때는 아무 섹션도 선택하지 않음
      if (window.scrollY < heroHeight * 0.8) {
        setCurrentSection('');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = sectionsRef.current[section.toLowerCase()];
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    // 약간의 지연 후 스크롤 이벤트 리스너 추가
    const timer = setTimeout(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }, 100);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSectionChange = (section: string) => {
    const element = sectionsRef.current[section.toLowerCase()];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(section);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="app">
      <Navigation
        currentSection={currentSection}
        onSectionChange={handleSectionChange}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        isScrolled={isScrolled}
      />
      <Hero />
      <div
        ref={(el) => {
          sectionsRef.current.about = el;
        }}
      >
        <About />
      </div>
      <div
        ref={(el) => {
          sectionsRef.current.portfolio = el;
        }}
      >
        <Portfolio />
      </div>
      <div
        ref={(el) => {
          sectionsRef.current.skill = el;
        }}
      >
        <Skill />
      </div>
      <div
        ref={(el) => {
          sectionsRef.current.education = el;
        }}
      >
        <Education />
      </div>
      <div
        ref={(el) => {
          sectionsRef.current.career = el;
        }}
      >
        <Career />
      </div>
      <div
        ref={(el) => {
          sectionsRef.current.contact = el;
        }}
      >
        <Contact />
      </div>
    </div>
  );
};

export default App;

