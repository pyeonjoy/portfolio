import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./screens/Home/Hero";
import About from "./screens/Home/About";
import Portfolio from "./screens/Home/Portfolio";
import ProjectDetail from "./screens/ProjectDetail";
import Skill from "./screens/Home/Skill";
import Strength from "./screens/Home/Strength";
import Education from "./screens/Home/Education";
import Career from "./screens/Home/Career";
import Contact from "./screens/Home/Contact";
import Back from "./screens/Home/Back";
import "./App.css";

const AppContent: React.FC = () => {
  const [currentSection, setCurrentSection] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});
  const isScrollingRef = useRef(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // 로컬 스토리지에서 다크모드 설정 불러오기
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedDarkMode);
  }, []);

  useEffect(() => {
    // 다크모드 클래스 적용
    if (isDarkMode) {
      document.documentElement.classList.add("app--dark");
    } else {
      document.documentElement.classList.remove("app--dark");
    }
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  useEffect(() => {
    // 메인 페이지에서 스크롤 위치 저장 및 복원
    if (location.pathname === "/") {
      const handleScrollSave = () => {
        sessionStorage.setItem(
          "mainPageScrollPosition",
          window.scrollY.toString()
        );
      };

      window.addEventListener("scroll", handleScrollSave, { passive: true });

      // 저장된 스크롤 위치 복원
      const savedScrollPosition = sessionStorage.getItem(
        "mainPageScrollPosition"
      );
      if (savedScrollPosition) {
        setTimeout(() => {
          window.scrollTo(0, parseInt(savedScrollPosition, 10));
        }, 100);
      } else {
        // 저장된 위치가 없으면 맨 위로
        window.scrollTo(0, 0);
      }

      return () => {
        window.removeEventListener("scroll", handleScrollSave);
      };
    } else {
      // 다른 페이지로 이동할 때는 스크롤을 맨 위로
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  useEffect(() => {
    // 포트폴리오 상세 페이지에서는 섹션 감지 비활성화
    if (location.pathname.startsWith("/portfolio/")) {
      return;
    }

    // 스크롤 이벤트 리스너
    const handleScroll = () => {
      // 프로그래밍 방식 스크롤 중에는 섹션 감지 비활성화
      if (isScrollingRef.current) {
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight / 3;
      const sections = [
        "About",
        "Portfolio",
        "Skill",
        "Career",
        "Strength",
        "Education",
        "Contact",
      ];
      const heroHeight = window.innerHeight;

      // 스크롤 여부 확인 (Navigation 배경색 제어)
      setIsScrolled(window.scrollY > heroHeight * 0.5);

      // Hero 섹션에 있을 때는 아무 섹션도 선택하지 않음
      if (window.scrollY < heroHeight * 0.8) {
        setCurrentSection("");
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
      window.addEventListener("scroll", handleScroll, { passive: true });
    }, 100);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const handleSectionChange = (section: string) => {
    // 스크롤 시작 전에 섹션을 먼저 설정하고 스크롤 감지 비활성화
    setCurrentSection(section);
    isScrollingRef.current = true;

    const scrollToSection = () => {
      const element = sectionsRef.current[section.toLowerCase()];
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // 스크롤 애니메이션 완료 후 스크롤 감지 재활성화 (약 1초 후)
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 1000);
      } else {
        isScrollingRef.current = false;
      }
    };

    // 포트폴리오인 경우 메인 페이지로 이동
    if (section === "Portfolio") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          scrollToSection();
        }, 100);
      } else {
        scrollToSection();
      }
    } else {
      // 메인 페이지가 아니면 먼저 이동
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          scrollToSection();
        }, 100);
      } else {
        scrollToSection();
      }
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="app">
      {isDarkMode && <Back />}
      <Navigation
        currentSection={currentSection}
        onSectionChange={handleSectionChange}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        isScrolled={isScrolled}
      />
      <Routes>
        <Route path="/portfolio/:id" element={<ProjectDetail />} />
        <Route
          path="/"
          element={
            <>
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
                  sectionsRef.current.career = el;
                }}
              >
                <Career />
              </div>
              <div
                ref={(el) => {
                  sectionsRef.current.strength = el;
                }}
              >
                <Strength />
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
                  sectionsRef.current.contact = el;
                }}
              >
                <Contact />
              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
};

const App: React.FC = () => {
  return <AppContent />;
};

export default App;
