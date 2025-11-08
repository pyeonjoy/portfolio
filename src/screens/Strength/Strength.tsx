import React from 'react';
import '../../styles/section.scss';
import './Strength.scss';

interface StrengthItem {
  title: string;
  description: string;
}

const Strength: React.FC = () => {
  const strengths: StrengthItem[] = [
    {
      title: '리더로서의 자질',
      description: '친구들과 팀원들의 의견을 모으고 좋은 아이디어로 의사결정을 이끌어가며 모임, 동아리, 프로젝트에서 누구도 소외되지 않도록 소통하는 능력',
    },
    {
      title: '끈기있게 매달리기',
      description: '수능 후 대입을 위해 오전 9시부터 밤 10시까지 4시간마다 작품 하나씩 꾸준히 만드는 등 강한 근성, 성인이 된 후 아르바이트와 인턴십에서도 지각 없이 꾸준히 일하는 모습',
    },
    {
      title: '도전적인 성향',
      description: '대학 시절 정규 수업에 만족하지 못하고 스타트업 동아리를 만들었으며, 일반적인 동아리 활동을 넘어 중학교 교육, 국제 박람회 전시, 직접 판매 등 다양한 외부 활동을 주도',
    },
    {
      title: '뛰어난 친화력',
      description: '어릴 때 자주 이사를 다녀 새로운 환경에 적응하는 능력이 뛰어나며, 대학에서 반장, 학생회, 동아리 회장 등 다양한 역할을 맡으며 다양한 인맥을 쌓음',
    },
  ];

  return (
    <section id="strength" className="section sectionStrength">
      <div className="sectionContainer">
        <h2 className="sectionTitle">Strength</h2>
        <div className="sectionContent">
          <div className="strength__grid">
            {strengths.map((strength, index) => (
              <div key={index} className="strength__item">
                <h3 className="strength__title">{strength.title}</h3>
                <p className="strength__description">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strength;

