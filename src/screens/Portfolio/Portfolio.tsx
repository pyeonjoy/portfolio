import React, { useState, useRef, useEffect } from 'react';
import PortfolioItem, { Project } from '../../components/PortfolioItem/PortfolioItem';
import '../../styles/section.scss';
import './Portfolio.scss';

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'app'>('web');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const swiperRef = useRef<HTMLDivElement>(null);

  const webProjects: Project[] = [
    {
      id: 'Project01',
      name: 'Perfume',
      period: '3주',
      contribution: '40%',
      description: '어쩌구어쩌구어쩌구어쩌구어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌 어쩌구어쩌구설명넣어줘',
    },
    {
      id: 'Project02',
      name: 'CampYou',
      period: '4주',
      contribution: '50%',
      description: '어쩌구어쩌구어쩌구어쩌구어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌 어쩌구어쩌구설명넣어줘',
    },
    {
      id: 'Project03',
      name: 'Interviewdot',
      period: '5주',
      contribution: '60%',
      description: '어쩌구어쩌구어쩌구어쩌구어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌 어쩌구어쩌구설명넣어줘',
    },
  ];

  const appProjects: Project[] = [
    {
      id: 'Project04',
      name: 'TrendOnAir',
      period: '6주',
      contribution: '45%',
      description: '어쩌구어쩌구어쩌구어쩌구어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌 어쩌구어쩌구설명넣어줘',
    },
    {
      id: 'Project05',
      name: 'Okeydoggy',
      period: '4주',
      contribution: '55%',
      description: '어쩌구어쩌구어쩌구어쩌구어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌 어쩌구어쩌구설명넣어줘',
    },
  ];

  const allProjects = [...webProjects, ...appProjects];
  const totalProjects = allProjects.length;
  const tabChangeRef = useRef(false);

  // currentIndex에 따라 activeTab 자동 변경 (탭 클릭으로 인한 변경 제외)
  useEffect(() => {
    if (tabChangeRef.current) {
      tabChangeRef.current = false;
      return;
    }
    
    if (currentIndex < webProjects.length) {
      setActiveTab('web');
    } else {
      setActiveTab('app');
    }
  }, [currentIndex]);

  // 탭 변경 시 해당 탭의 첫 번째 프로젝트로 이동
  useEffect(() => {
    tabChangeRef.current = true;
    if (activeTab === 'web') {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(webProjects.length);
    }
  }, [activeTab]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < totalProjects - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setTouchStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < totalProjects - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    if (currentIndex < totalProjects - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section id="portfolio" className="section section--portfolio">
      <div className="section__container">
        <div className="portfolio__tabs">
          <button
            className={`portfolio__tab ${activeTab === 'web' ? 'portfolio__tab--active' : ''}`}
            onClick={() => setActiveTab('web')}
          >
            웹 포트폴리오
          </button>
          <button
            className={`portfolio__tab ${activeTab === 'app' ? 'portfolio__tab--active' : ''}`}
            onClick={() => setActiveTab('app')}
          >
            앱 포트폴리오
          </button>
        </div>
        <div className="portfolio__swiper-container">
          <div
            className="portfolio__swiper"
            ref={swiperRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div
              className="portfolio__swiper-wrapper"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {allProjects.map((project, index) => (
                <div key={index} className="portfolio__slide">
                  <PortfolioItem project={project} />
                </div>
              ))}
            </div>
          </div>
          <button
            className="portfolio__nav-button portfolio__nav-button--prev"
            onClick={goToPrev}
            disabled={currentIndex === 0}
          >
            ‹
          </button>
          <button
            className="portfolio__nav-button portfolio__nav-button--next"
            onClick={goToNext}
            disabled={currentIndex === totalProjects - 1}
          >
            ›
          </button>
          <div className="portfolio__pagination">
            {allProjects.map((_, index) => (
              <button
                key={index}
                className={`portfolio__pagination-dot ${
                  index === currentIndex ? 'portfolio__pagination-dot--active' : ''
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

