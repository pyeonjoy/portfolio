import React, { useState } from 'react';
import '../../styles/section.scss';
import './Contact.scss';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 폼 제출 로직 (추후 구현)
    console.log('Form submitted:', formData);
    alert('메시지가 전송되었습니다!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section sectionContact">
      <div className="sectionContainer">
        <h2 className="sectionTitle">Contact</h2>
        <div className="sectionContent">
          <div className="contact__layout">
            <div className="contact__info">
              <h3 className="contact__subtitle">연락처 정보</h3>
              <div className="contact__info-item">
                <span className="contact__info-label">Email</span>
                <a href="mailto:pppeee1220@gmail.com" className="contact__info-value">
                  pppeee1220@gmail.com
                </a>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-label">Phone</span>
                <a href="tel:010-6800-4220" className="contact__info-value">
                  010-6800-4220
                </a>
              </div>
            </div>
            <div className="contact__form-container">
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-group">
                  <label htmlFor="name" className="contact__form-label">
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="contact__form-input"
                    required
                  />
                </div>
                <div className="contact__form-group">
                  <label htmlFor="email" className="contact__form-label">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="contact__form-input"
                    required
                  />
                </div>
                <div className="contact__form-group">
                  <label htmlFor="message" className="contact__form-label">
                    메시지
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="contact__form-textarea"
                    rows={6}
                    required
                  />
                </div>
                <button type="submit" className="contact__form-button">
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

