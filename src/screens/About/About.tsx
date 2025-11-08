import React, { useState } from 'react';
import '../../styles/section.scss';
import './About.scss';

interface FAQItem {
  question: string;
  answer: string;
}

const About: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: '개발자가 된 이유?',
      answer: '사용자들에게 가치 있는 서비스를 제공하고 싶어서 개발자가 되었습니다. 코드를 통해 아이디어를 현실로 구현하는 과정에서 큰 보람을 느끼며, 지속적으로 성장하고 싶습니다.',
    },
    {
      question: '주로 사용하는 기술 스택은?',
      answer: '프론트엔드는 React와 TypeScript를 주로 사용하며, 백엔드는 Node.js와 Express를 활용합니다. 데이터베이스는 MongoDB와 PostgreSQL을 사용하고 있습니다.',
    },
    {
      question: '가장 좋아하는 프로젝트는?',
      answer: '사용자 중심의 UI/UX를 고려한 프로젝트를 좋아합니다. 특히 실시간 상호작용이 가능한 웹 애플리케이션을 개발하는 것을 즐깁니다.',
    },
    {
      question: '개발 외에 관심 있는 분야는?',
      answer: '새로운 기술 트렌드를 학습하고, 오픈소스 프로젝트에 기여하는 것을 좋아합니다. 또한 디자인과 사용자 경험에 대한 관심도 높습니다.',
    },
    {
      question: '앞으로의 목표는?',
      answer: '더 많은 사용자에게 유용한 서비스를 제공하고, 팀과 함께 성장하며 협업하는 개발자가 되는 것이 목표입니다. 또한 기술적 깊이를 더해가며 전문성을 키워나가고 싶습니다.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="about" className="section sectionAbout">
      <div className="sectionContainer sectionContainerAbout">
        <div className="about__layout">
          <div className="about__left">
            <h2 className="about__title">About</h2>
            <div className="about__info">
              <div className="about__info-item">
                <span className="about__info-label">Name</span>
                <span className="about__info-value">편조이</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Birth</span>
                <span className="about__info-value">1997.01.10</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Email</span>
                <span className="about__info-value">pppeee1220@gmail.com</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Phone</span>
                <span className="about__info-value">010-6800-4220</span>
              </div>
            </div>
          </div>
          <div className="about__right">
            <div className="about__faq">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`about__faq-item ${
                    openIndex === index ? 'about__faq-item--open' : ''
                  }`}
                >
                  <button
                    className="about__faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{faq.question}</span>
                    <span className="about__faq-icon">
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  <div className="about__faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

