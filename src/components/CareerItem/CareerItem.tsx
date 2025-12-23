import React from "react";
import "../../styles/career/CareerItem.css";

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
    <div className="careerItem">
      <h3 className="careerItemTitle">{title}</h3>
      <p className="careerItemPeriod">{period}</p>
      {category && <p className="careerItemCategory">{category}</p>}
      {position && <p className="careerItemPosition">{position}</p>}
      {technologies && technologies.length > 0 && (
        <p className="careerItemTechnologies">{technologies.join(", ")}</p>
      )}
      {description && <p className="careerItemDescription">{description}</p>}
      {achievements && achievements.length > 0 && (
        <div className="careerItemAchievements">
          {achievements.map((achievement, index) => (
            <p key={index} className="careerItemAchievement">
              {achievement}
            </p>
          ))}
        </div>
      )}
      {reason && <p className="careerItemReason">퇴사사유: {reason}</p>}
    </div>
  );
};

export default CareerItem;
