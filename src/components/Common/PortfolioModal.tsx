import React, { useState } from "react";
import "../../styles/common/PortfolioModal.css";
interface ProjectImage {
  src: string;
  alt: string;
}

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc?: string;
  imageAlt?: string;
  images?: ProjectImage[];
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  images,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  if (!isOpen) return null;

  // 슬라이더 모드 (images가 있는 경우)
  if (images && images.length > 0) {
    const handlePrev = () => {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
      <div className="portfolioSitemapModal" onClick={onClose}>
        <div
          className="portfolioSitemapModalContent portfolioSitemapModalContent--slider"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="portfolioSitemapCloseButton" onClick={onClose}>
            ✕
          </button>
          {images.length > 1 && (
            <button
              className="portfolioSitemapSliderButton portfolioSitemapSliderButton--prev"
              onClick={handlePrev}
            >
              ‹
            </button>
          )}
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="portfolioSitemapImage"
          />
          {images.length > 1 && (
            <button
              className="portfolioSitemapSliderButton portfolioSitemapSliderButton--next"
              onClick={handleNext}
            >
              ›
            </button>
          )}
          {images.length > 1 && (
            <div className="portfolioSitemapSliderPagination">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`portfolioSitemapSliderDot ${
                    index === currentIndex ? "active" : ""
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // 단일 이미지 모드
  if (imageSrc && imageAlt) {
    return (
      <div className="portfolioSitemapModal" onClick={onClose}>
        <div
          className="portfolioSitemapModalContent"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="portfolioSitemapCloseButton" onClick={onClose}>
            ✕
          </button>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="portfolioSitemapImage"
          />
        </div>
      </div>
    );
  }

  return null;
};

export default PortfolioModal;
