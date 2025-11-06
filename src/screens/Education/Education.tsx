import React from 'react';
import CareerItem, { CareerItemProps } from '../../components/CareerItem/CareerItem';
import '../../styles/section.scss';
import './Education.scss';

const Education: React.FC = () => {
  const trainingPrograms: CareerItemProps[] = [
    {
      title: '클라우드 기반 AI대화형 서비스 웹 개발자',
      period: '23.12 ~ 24.07',
      category: '한국 ICT 인재개발원',
      achievements: [
        '특모범상(출석률 100%) 수혜',
        '프로젝트 최우수상 수혜',
        'SW인재상 수혜',
        '봉사상 수혜',
      ],
    },
    {
      title: '코칭스터디 <Generation AI 2024>',
      period: '24.09 ~ 24.12',
      description: '다양한 AI실습',
    },
  ];

  const universityAndCertifications: CareerItemProps[] = [
    {
      title: '한경대학교 (4년제) UXUI전공',
      period: '15.03 ~ 20.03',
      description: '학사졸업(3.5/4.5)',
      achievements: [
        '성적장학금 2회 수혜',
        '근로장학금 2회 수혜',
      ],
    },
    {
      title: '웹표준 디자인 제작',
      period: '21.05 ~ 21.07',
      technologies: ['HTML', 'CSS'],
    },
    {
      title: '웹표준 전문가',
      period: '21.07 ~ 21.09',
      technologies: ['Javascript', 'jquery'],
    },
    {
      title: '4차 산업 디지털 융합 이해',
      period: '23.09 ~ 23.10',
      description: '다양한 AI 실습',
    },
  ];

  return (
    <section id="education" className="section section--education">
      <div className="section__container">
        <h2 className="section__title">Education</h2>
        <div className="section__content">
          <div className="education__layout">
            <div className="education__section">
              <h3 className="education__section-title">교육 프로그램</h3>
              <div className="education__list">
                {trainingPrograms.map((program, index) => (
                  <CareerItem key={index} {...program} />
                ))}
              </div>
            </div>
            <div className="education__section">
              <h3 className="education__section-title">대학교 및 자격증</h3>
              <div className="education__list">
                {universityAndCertifications.map((item, index) => (
                  <CareerItem key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

