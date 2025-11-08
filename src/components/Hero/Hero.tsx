import React from 'react';
import './Hero.scss';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="heroBackground">풀스택 개발자 편조이입니다</div>
      <div className="heroContent">
        <h1 className="heroTitle">풀스택 개발자 편조이입니다.</h1>
      </div>
    </section>
  );
};

export default Hero;

