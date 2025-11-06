import React from 'react';
import './CareerItem.scss';

export interface CareerItemProps {
  title: string;
  period: string;
  category?: string;
  position?: string;
  description?: string;
  reason?: string;
  achievements?: string[];
  technologies?: string[];
}

const CareerItem: React.FC<CareerItemProps> = ({
  title,
  period,
  category,
  position,
  description,
  reason,
  achievements,
  technologies,
}) => {
  return (
    <div className="career-item">
      <h3 className="career-item__title">{title}</h3>
      <p className="career-item__period">{period}</p>
      {category && (
        <p className="career-item__category">{category}</p>
      )}
      {position && (
        <p className="career-item__position">{position}</p>
      )}
      {technologies && technologies.length > 0 && (
        <p className="career-item__technologies">{technologies.join(', ')}</p>
      )}
      {description && (
        <p className="career-item__description">{description}</p>
      )}
      {achievements && achievements.length > 0 && (
        <div className="career-item__achievements">
          {achievements.map((achievement, index) => (
            <p key={index} className="career-item__achievement">{achievement}</p>
          ))}
        </div>
      )}
      {reason && (
        <p className="career-item__reason">퇴사사유: {reason}</p>
      )}
    </div>
  );
};

export default CareerItem;

