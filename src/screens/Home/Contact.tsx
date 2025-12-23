import React, { useState } from "react";
import "../../styles/section.scss";
import "../../styles/home/Contact.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 폼 제출 로직 (추후 구현)
    console.log("Form submitted:", formData);
    alert("메시지가 전송되었습니다!");
    setFormData({ name: "", email: "", message: "" });
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
                <button type="submit" className="contactFormButton">
                  전송하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
