import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "Figma implementation",
    level: "advanced",
    color: "#FF3B00",
  },
  {
    skill: "React",
    level: "intermediate",
    color: "#60DAFB",
  },
];

// APP COMPONENT
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

// IMAGE COMPONENT
function Avatar() {
  return <img src="popoolastephen.jpeg" alt="Popoola" className="avatar" />;
}

// INTRODUCTION COMPONENT
function Intro() {
  return (
    <div>
      <h1>Popoola Stephen Ayomide</h1>
      <p>
        Front-end web developer currently exploring react js. When not coding, I
        like to sing and rehearse music pieces, play my violin and surf my
        socials.
      </p>
    </div>
  );
}

// SKILL-LIST COMPONENT
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skills) => (
        <Skill skill={skills.skill} color={skills.color} level={skills.level} />
      ))}
    </div>
  );
}

// SKILLS COMPONENT
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
