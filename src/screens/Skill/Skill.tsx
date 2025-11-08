import React, { useState, useEffect, useRef } from 'react';
import '../../styles/section.scss';
import './Skill.scss';

interface SkillItem {
  name: string;
  description: string;
}

const Skill: React.FC = () => {
  const [clickedSkill, setClickedSkill] = useState<number | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  const skills: SkillItem[] = [
    {
      name: 'Java',
      description: 'Java 언어의 기본 문법과 개념에 대한 이해로 인터페이스와 클래스간의 상속을 이용한 설계를 바탕으로 개발을 할 수 있습니다.',
    },
    {
      name: 'ORACLE MYBATIS',
      description: 'Maven을 활용하여 다양한 DataBase들과 동적인 데이터 처리가 가능하며, JOIN문과 서브쿼리문 작성을 할 수 있으며, 시퀀스, 뷰, 인덱스, 트랜잭션을 사용하여 여러 쿼리문을 동시에 실행할 수 있습니다.',
    },
    {
      name: 'HTML, CSS, JavaScript',
      description: 'HTML, CSS로 주어진 화면을 막힘없이 제작하고, 동적인 페이지를 구현하기 위해 JavaScript와 JQuery를 통해서 jsp, html5 화면의 요소를 처리하고, 비동기 처리를 위해 Ajax를 활용할수 있습니다.',
    },
    {
      name: 'GitHub',
      description: 'GitHub를 활용한 효과적인 프로그램 형상관리가 가능합니다',
    },
    {
      name: 'Spring',
      description: 'Spring API를 활용하여 MVC 패턴을 적용한 프로그램을 구현할 수 있고, Spring 프레임워크를 기반으로 Java, JSP, Servlet을 사용하여 클래스 설계를 하였고, 세션을 이용한 로그인 처리를 할 수 있습니다.',
    },
    {
      name: 'OpenAI',
      description: '프롬프트를 작성해 openAI를 활용하고, 원하는 답변을 받아내 사용자에서 정제된 답변을 출력하고 관리할 수 있습니다.',
    },
    {
      name: 'NEXT.JS',
      description: '컴포넌트를 나누어 부모컴포넌트와 자식컴포넌트간의 state를 지정해 props를 통해 값을 전달 받아 작업하고, 라우터와 mobx를 적절히 활용하여 상태관리를 하고, REST API를 받아와 원하는 정보를 화면단에 적절히 노출시키고 관리할 수 있습니다.',
    },
    {
      name: 'Figma',
      description: '기획단계에서부터 원활한 팀 작업을 위해 피그마로 원하는 이미지를 생성하고 배포할 수 있습니다.',
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (clickedSkill !== null) {
        const clickedElement = skillRefs.current[clickedSkill];
        if (clickedElement && !clickedElement.contains(event.target as Node)) {
          setClickedSkill(null);
        }
      }
    };

    if (clickedSkill !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [clickedSkill]);

  const handleSkillClick = (index: number) => {
    setClickedSkill(clickedSkill === index ? null : index);
  };

  return (
    <section id="skill" className="section sectionSkill">
      <div className="sectionContainer">
        <h2 className="sectionTitle">Skill</h2>
        <div className="sectionContent">
          <div className="skill__grid">
            {skills.map((skill, index) => {
              const isClicked = clickedSkill === index;
              const isHovered = hoveredSkill === index && !isClicked;
              const isActive = isClicked || isHovered;
              return (
                <div
                  key={index}
                  ref={(el) => {
                    skillRefs.current[index] = el;
                  }}
                  className={`skill__item ${isActive ? 'skill__item--active' : ''}`}
                  onClick={() => handleSkillClick(index)}
                  onMouseEnter={() => {
                    if (!isClicked) {
                      setHoveredSkill(index);
                    }
                  }}
                  onMouseLeave={() => {
                    if (!isClicked) {
                      setHoveredSkill(null);
                    }
                  }}
                >
                  <div className="skill__name">{skill.name}</div>
                  {isActive && (
                    <div 
                      className="skill__tooltip"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="skill__tooltip-content">
                        <p className="skill__tooltip-description">{skill.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;

