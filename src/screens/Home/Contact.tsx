import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../../styles/section.css";
import "../../styles/home/Contact.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS 설정 값 (환경 변수 또는 직접 입력)
  // 환경 변수를 사용하려면 .env 파일에 추가하세요:
  // REACT_APP_EMAILJS_SERVICE_ID=your_service_id
  // REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
  // REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "";
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS 설정 확인
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      alert(
        "EmailJS 설정이 완료되지 않았습니다.\n.env 파일에 다음 변수들을 설정해주세요:\n- REACT_APP_EMAILJS_SERVICE_ID\n- REACT_APP_EMAILJS_TEMPLATE_ID\n- REACT_APP_EMAILJS_PUBLIC_KEY"
      );
      setIsSubmitting(false);
      return;
    }

    try {
      // 현재 시간 생성
      const now = new Date();
      const time = now.toLocaleString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      // EmailJS 템플릿 변수 준비
      const templateParams = {
        name: formData.name,
        time: time,
        message: formData.message,
        email: formData.email,
      };

      // 디버깅: 전송되는 변수 확인
      console.log("EmailJS 전송 변수:", templateParams);

      // EmailJS를 사용하여 이메일 전송
      // 템플릿 변수명과 일치하도록: {{name}}, {{time}}, {{message}}, {{email}}
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      alert("메시지가 성공적으로 전송되었습니다!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("이메일 전송 실패:", error);

      // 더 자세한 에러 메시지 표시
      let errorMessage = "메시지 전송에 실패했습니다.";
      if (error?.text) {
        errorMessage += `\n\n오류: ${error.text}`;
      }
      if (error?.status === 400) {
        errorMessage += "\n\nEmailJS 설정을 확인해주세요.";
      }
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section sectionContact">
      <div className="sectionContainer">
        <h2 className="sectionTitle">Contact</h2>
        <div className="sectionContent">
          <div className="contactLayout">
            <div className="contactInfo">
              <h3 className="contactSubtitle">연락처 정보</h3>
              <div className="contactInfoItem">
                <span className="contactInfoLabel">Email</span>
                <a
                  href="mailto:pppeee1220@gmail.com"
                  className="contactInfoValue"
                >
                  pppeee1220@gmail.com
                </a>
              </div>
              <div className="contactInfoItem">
                <span className="contactInfoLabel">Phone</span>
                <a href="tel:010-6800-4220" className="contactInfoValue">
                  010-6800-4220
                </a>
              </div>
            </div>
            <div className="contactFormContainer">
              <form className="contactForm" onSubmit={handleSubmit}>
                <div className="contactFormGroup">
                  <label htmlFor="name" className="contactFormLabel">
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="contactFormInput"
                    required
                  />
                </div>
                <div className="contactFormGroup">
                  <label htmlFor="email" className="contactFormLabel">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="contactFormInput"
                    required
                  />
                </div>
                <div className="contactFormGroup">
                  <label htmlFor="message" className="contactFormLabel">
                    메시지
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="contactFormTextarea"
                    rows={6}
                    required
                  />
                </div>
                <input
                  type="submit"
                  className="contactFormButton"
                  value={isSubmitting ? "전송 중..." : "전송하기"}
                  disabled={isSubmitting}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
