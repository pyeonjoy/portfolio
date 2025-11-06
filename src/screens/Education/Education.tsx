import React from 'react';
import '../../styles/section.scss';
import './Education.scss';

const Education: React.FC = () => {
  return (
    <section id="education" className="section section--education">
      <div className="section__container">
        <h2 className="section__title">Education</h2>
        <div className="section__content">
          <div className="education__item">
            <h3 className="education__institution">교육 기관명</h3>
            <p className="education__period">기간</p>
            <p className="education__description">교육 내용 및 수료 과정</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

