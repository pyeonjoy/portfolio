import React from "react";
import "../../styles/education/EducationItem.css";

export interface EducationItemProps {
  title: string;
  period: string;
  category?: string;
  description?: string;
  achievements?: string[];
  technologies?: string[];
}

const EducationItem: React.FC<EducationItemProps> = ({
  title,
  period,
  category,
  description,
  achievements,
  technologies,
}) => {
  return (
    <div className="educationItem">
      <h3 className="educationItemTitle">{title}</h3>
      <p className="educationItemPeriod">{period}</p>
      {category && <p className="educationItemCategory">{category}</p>}
      {technologies && technologies.length > 0 && (
        <p className="educationItemTechnologies">{technologies.join(", ")}</p>
      )}
      {description && (
        <p className="educationItemDescription">{description}</p>
      )}
      {achievements && achievements.length > 0 && (
        <div className="educationItemAchievements">
          {achievements.map((achievement, index) => (
            <p key={index} className="educationItemAchievement">
              {achievement}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default EducationItem;

