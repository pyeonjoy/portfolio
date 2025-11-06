import React from 'react';
import '../../styles/section.scss';
import './Skill.scss';

const Skill: React.FC = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Express',
    'MongoDB', 'PostgreSQL', 'Sass', 'Git'
  ];

  return (
    <section id="skill" className="section section--skill">
      <div className="section__container">
        <h2 className="section__title">Skill</h2>
        <div className="section__content">
          <div className="skill__grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill__item">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;

