import React, { useState } from "react";
import "../../styles/section.css";
import "../../styles/home/About.css";

interface FAQItem {
  question: string;
  answer: string;
}

const About: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "가장 큰 강점은 무엇인가요?",
      answer:
        "UX/UI 디자이너 출신이라는 점이 저의 가장 큰 강점입니다. 사용자의 시선과 행동 흐름을 먼저 고민해 온 경험을 바탕으로, 단순히 동작하는 화면이 아닌 직관적이고 사용하기 쉬운 UI를 구현할 수 있습니다. 디자인과 개발을 모두 이해해 기획 의도를 빠르게 파악하고, 커뮤니케이션 비용을 줄이며 완성도 높은 결과물로 연결합니다. 사용자 경험을 기준으로 생각하고 이를 코드로 구현할 수 있다는 점이 저만의 경쟁력입니다.",
    },
    {
      question: "일을 배울 때 어떤 스타일인가요?",
      answer:
        "한 번 시작하면 끝까지 파고들어 결과를 만드는 타입입니다.새로운 기술이나 업무를 맡으면 빠르게 구조를 이해하고, 단순히 주어진 역할에 그치지 않고 “더 필요한 건 무엇일까?”를 고민합니다. 모르는 부분은 정리해서 적극적으로 질문하고, 배운 내용은 실제 결과물로 연결시키는 데 집중합니다.",
    },
    {
      question: "어려운 문제를 만났을 때 어떻게 해결하나요?",
      answer:
        "문제가 해결될 때까지 집요하게 고민하고 포기하지 않습니다. 과거에는 한 가지에 몰입하느라 균형을 놓친 적도 있었지만, 그 경험을 통해 이제는 목표를 명확히 정하고 집중하는 법을 배웠습니다. 개발 과정에서도 에러와 막히는 지점 앞에서 쉽게 물러서지 않고, 끝까지 원인을 찾아 해결합니다.",
    },
    {
      question: "개발자로 성장하게 된 계기는 무엇인가요?",
      answer:
        "디자인과 UX/UI를 깊이 다루며 ‘이 화면은 어떻게 동작할까?’라는 궁금증이 자연스럽게 생겼기 때문입니다. 사용자 경험을 더 잘 이해하고 구현하고 싶어 개발을 배우기 시작했고, 지금은 디자인 감각과 개발 역량을 함께 활용해 직관적이고 완성도 높은 웹 애플리케이션을 만드는 개발자를 목표로 하고 있습니다.",
    },
    {
      question: "팀에서 어떤 개발자가 되고 싶나요?",
      answer:
        "혼자 잘하는 개발자보다 팀을 성장시키는 개발자가 되고 싶습니다. 협력과 소통을 가장 중요한 가치로 여기며, 팀의 목표를 이해하고 그 안에서 제 역할을 충실히 해내고자 합니다. 끊임없이 배우고, 책임감 있게 결과를 만들어내며, 함께 일하고 싶은 신입 개발자가 되는 것이 제 목표입니다.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="about" className="section sectionAbout">
      <div className="sectionContainer sectionContainerAbout">
        <div className="layout">
          <div className="left">
            <h2 className="title">About</h2>
            <div className="info">
              <div className="infoItem">
                <span className="infoLabel">Name</span>
                <span className="infoValue">편조이</span>
              </div>
              <div className="infoItem">
                <span className="infoLabel">Birth</span>
                <span className="infoValue">1997.01.10</span>
              </div>
              <div className="infoItem">
                <span className="infoLabel">Email</span>
                <span className="infoValue">pppeee1220@gmail.com</span>
              </div>
              <div className="infoItem">
                <span className="infoLabel">Phone</span>
                <span className="infoValue">010-6800-4220</span>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="faq">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faqItem ${
                    openIndex === index ? "faqItemOpen" : ""
                  }`}
                >
                  <button
                    className="faqQuestion"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{faq.question}</span>
                    <span className="faqIcon">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  <div className="faqAnswer">
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
