import React, { useState } from "react";
import { Slide } from "../ProjectItem/ProjectPlanning";
import "../../styles/common/Swiper.css";

export type { Slide };

interface PortfolioSwiperProps {
  slides: Slide[];
}

const PortfolioSwiper: React.FC<PortfolioSwiperProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handlePrevSlide = () => {
    if (slides.length > 0) {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  const handleNextSlide = () => {
    if (slides.length > 0) {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }
  };

  if (slides.length === 0) {
    return (
      <div className="portfolioImagePlaceholder">
        <span>960 x 540</span>
      </div>
    );
  }

  return (
    <div className="portfolioImagePlaceholder portfolioImagePlaceholder--swiper">
      <div className="portfolioSwiperWrapper">
        <button
          className="portfolioSwiperButton portfolioSwiperButton--prev"
          onClick={handlePrevSlide}
        >
          ‹
        </button>
        <div className="portfolioSwiperViewport">
          <div
            className="portfolioSwiperTrack"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="portfolioSwiperSlide">
                {slide.src && (
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="portfolioSwiperImage"
                  />
                )}
                <div
                  className={`portfolioSwiperContentOverlay ${
                    index === currentSlide ? "active" : ""
                  }`}
                >
                  {slide.content}
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="portfolioSwiperButton portfolioSwiperButton--next"
          onClick={handleNextSlide}
        >
          ›
        </button>
      </div>
      <div className="portfolioSwiperPagination">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`portfolioSwiperDot ${
              index === currentSlide ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSwiper;
