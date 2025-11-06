import React from 'react';
import CareerItem, { CareerItemProps } from '../../components/CareerItem/CareerItem';
import '../../styles/section.scss';
import './Career.scss';

const Career: React.FC = () => {
  const careers: CareerItemProps[] = [
    {
      title: '(주) APST',
      period: '25.01 ~ 25.03',
      description: '현대오일뱅크 FMS Service 리팩토링, nosql 대용량 시계열 데이터 처리',
      reason: '계약 종료',
    },
    {
      title: '(주) 코어다이브',
      period: '21.08 ~ 23.07',
      description: '지마켓 기획전 페이지 및 웹 배너 제작',
      reason: '폐업',
    },
    {
      title: '(주) 위메프',
      period: '16.07 ~ 16.09',
      description: '위메프 기획전 페이지 및 웹 배너 제작',
      reason: '계약 종료',
    },
    {
      title: '더플랜 컴퓨터 아트 학원',
      period: '16.09 ~ 17.01',
      position: '강사',
      description: '포토샵, 인디자인 강사',
      reason: '계약 종료',
    },
  ];

  const partTimeJobs: CareerItemProps[] = [
    {
      title: '공차 안성 중앙점',
      period: '19.12 ~ 21.03',
    },
    {
      title: '셀렉토커피 안성 중앙대학교점',
      period: '18.02 ~ 20.09',
    },
    {
      title: '빅점프빅 키즈카페',
      period: '17.12 ~ 19.12',
    },
    {
      title: '구름뜬하늘 애견카페',
      period: '17.01 ~ 17.11',
    },
    {
      title: '아이센스 pc방',
      period: '16.03 ~ 16.12',
    },
    {
      title: '한경대학교 근로장학생',
      period: '16.03 ~ 16.7 / 16.9 ~ 16.12',
    },
  ];

  return (
    <section id="career" className="section section--career">
      <div className="section__container">
        <h2 className="section__title">Career</h2>
        <div className="section__content">
          <div className="career__layout">
            <div className="career__section">
              <h3 className="career__section-title">경력</h3>
              <div className="career__list">
                {careers.map((career, index) => (
                  <CareerItem key={index} {...career} />
                ))}
              </div>
            </div>
            <div className="career__section">
              <h3 className="career__section-title">아르바이트</h3>
              <div className="career__list">
                {partTimeJobs.map((job, index) => (
                  <CareerItem key={index} {...job} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;

