import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const hisSkill = [
  {
    skill: "HTML+CSS",
    color: "red",
    level: "advanced",
  },
  {
    skill: "PHP",
    color: "yellow",
    level: "advanced",
  },
  {
    skill: "JavaScript",
    color: "blue",
    level: "intermediate",
  },
  {
    skill: "Yii Framework",
    color: "gray",
    level: "intermediate",
  },
  {
    skill: "ReactJs",
    color: "orange",
    level: "beginner",
  },
];

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
  return <img src="./haikal.jpg" className="avatar" alt="haikal" />
}
function Intro(){
  return (
    <div>
      <h1>Haikal A.P.</h1>
    <p>Cute babies who are adorable and become the pride of their parents and those around them.</p>
  </div>
  )
}
function SkillList(){
  <i class="em em-dragon" aria-role="presentation" aria-label="DRAGON"></i>
  return (
    <div className="skill-list">
      <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet" />
      {hisSkill.map((value, index) => (
        <Skill color={value.color} skill={value.skill} level={value.level} />
        ))}
    </div>
  )
}
function Skill({color, skill, level}){
  return (
    <div className="skill" style={{ background: color }}>
        {skill}
        <span>
          {level === "beginner" && "👶"}
          {level === "intermediate" && "👍"}
          {level === "advanced" && "💪"}
        </span>
      </div>
  )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
