import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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

function Avatar() {
  return <img src="popoolastephen.jpeg" alt="Popoola" className="avatar" />;
}

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

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML" emoji="💪" color="blue" />
      <Skill skill="CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="🔥" color="yellow" />
      <Skill skill="React js" emoji="🔥" color="orangered" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
