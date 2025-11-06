import React from 'react';
import './Hero.scss';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__background">fullstack developer</div>
      <div className="hero__content">
        <h1 className="hero__title">풀스택 개발자 편조이입니다.</h1>
      </div>
    </section>
  );
};

export default Hero;

