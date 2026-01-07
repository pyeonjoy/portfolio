import React, { useState, useEffect } from "react";
import "../../styles/home/Hero.css";

const Hero: React.FC = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero");
      if (!heroSection) return;

      const heroHeight = heroSection.clientHeight;
      const scrollY = window.scrollY;

      // Hero 섹션의 높이만큼 스크롤하면 opacity가 0이 되도록
      const newOpacity = Math.max(0, 1 - scrollY / heroHeight);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기값 설정

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="hero">
      <div className="heroBackground">Full Stack Developer</div>
      <div className="heroContent">
        <h1 className="heroTitle">풀스택 개발자 편조이입니다.</h1>
      </div>
      <img
        src="/img/photo.png"
        alt="hero"
        className="heroImage"
        style={{ opacity }}
      />
    </section>
  );
};

export default Hero;
