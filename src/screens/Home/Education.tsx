import React from "react";
import EducationItem, {
  EducationItemProps,
} from "../../components/EducationItem/EducationItem";
import "../../styles/section.css";
import "../../styles/home/Education.css";

const Education: React.FC = () => {
  const trainingPrograms: EducationItemProps[] = [
    {
      title: "클라우드 기반 AI대화형 서비스 웹 개발자",
      period: "23.12 ~ 24.07",
      category: "한국 ICT 인재개발원",
      achievements: [
        "특모범상(출석률 100%) 수혜",
        "프로젝트 최우수상 수혜",
        "SW인재상 수혜",
        "봉사상 수혜",
      ],
      technologies: ["JAVA", "REACT", "NEXT.JS", "MyBatis ..."],
    },
    {
      title: "코칭스터디 <Generation AI 2024>",
      period: "24.09 ~ 24.12",
      achievements: ["다양한 AI실습"],
    },
  ];

  const universityAndCertifications: EducationItemProps[] = [
    {
      title: "한경대학교 (4년제) UXUI전공",
      period: "15.03 ~ 20.03",
      description: "학사졸업(3.5/4.5)",
      achievements: ["성적장학금 2회 수혜", "근로장학금 2회 수혜"],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
    },
    {
      title: "웹표준 디자인 제작",
      period: "21.05 ~ 21.07",
      technologies: ["HTML", "CSS"],
    },
    {
      title: "웹표준 전문가",
      period: "21.07 ~ 21.09",
      technologies: ["Javascript", "jquery"],
    },
    {
      title: "4차 산업 디지털 융합 이해",
      period: "23.09 ~ 23.10",
      achievements: ["다양한 AI 실습"],
    },
  ];

  return (
    <section id="education" className="section sectionEducation">
      <div className="sectionContainer">
        <h2 className="sectionTitle">Education</h2>
        <div className="sectionContent">
          <div className="educationGrid">
            <div className="educationSection">
              <div className="educationList">
                {trainingPrograms.map((program, index) => (
                  <EducationItem key={index} {...program} />
                ))}
              </div>
            </div>
            <div className="educationSection">
              <h3 className="educationTitle">대학교 및 자격증</h3>
              <div className="educationList">
                {universityAndCertifications.map((item, index) => (
                  <EducationItem key={index} {...item} />
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
