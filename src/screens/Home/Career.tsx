import React, { useRef, useState } from "react";
import CareerItem, {
  CareerItemProps,
} from "../../components/CareerItem/CareerItem";
import "../../styles/section.scss";
import "../../styles/home/Career.css";

const Career: React.FC = () => {
  const careers: CareerItemProps[] = [
    {
      title: "(주) APST",
      period: "25.01 ~ 25.03",
      description:
        "현대오일뱅크 FMS Service 리팩토링, nosql 대용량 시계열 데이터 처리",
      reason: "계약 종료",
    },
    {
      title: "(주) APST",
      period: "25.01 ~ 25.03",
      description:
        "현대오일뱅크 FMS Service 리팩토링, nosql 대용량 시계열 데이터 처리",
      reason: "계약 종료",
    },
    {
      title: "(주) 코어다이브",
      period: "21.08 ~ 23.07",
      description: "지마켓 기획전 페이지 및 웹 배너 제작",
      reason: "폐업",
    },
    {
      title: "(주) 위메프",
      period: "16.07 ~ 16.09",
      description: "위메프 기획전 페이지 및 웹 배너 제작",
      reason: "계약 종료",
    },
    {
      title: "더플랜 컴퓨터 아트 학원",
      period: "16.09 ~ 17.01",
      position: "강사",
      description: "포토샵, 인디자인 강사",
      reason: "계약 종료",
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="career" className="section sectionCareer">
      <div className="sectionContainer">
        <h2 className="sectionTitle">Career</h2>
        <div className="sectionContent">
          <div className="careerGrid">
            <div className="careerSection">
              <div
                className="careerList"
                ref={scrollContainerRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
              >
                {careers.map((career, index) => (
                  <CareerItem key={index} {...career} />
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
