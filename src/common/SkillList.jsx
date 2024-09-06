// SkillList.jsx
import React from "react";
import "./SkillList.css"; // Import the CSS file

function SkillList({ skill, width }) {
  return (
    <div className="skill-list-container">
      <span>
        <p className="skill-list-text">{skill}</p>
        <hr
          className="skill-list-divider"
          style={{ width: width }} // Applying dynamic width via inline style
        />
      </span>
    </div>
  );
}

export default SkillList;
