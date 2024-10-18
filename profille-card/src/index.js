import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const hisSkill = [
  {
    skill: "HTML+CSS",
    color: "red",
    emoji: "em em-dragon",
  },
  {
    skill: "PHP",
    color: "yellow",
    emoji: "em em-dog",
  },
  {
    skill: "JavaScript",
    color: "blue",
    emoji: "em em-bear",
  },
  {
    skill: "Yii Framework",
    color: "gray",
    emoji: "em em-egg",
  },
  {
    skill: "ReactJs",
    color: "orange",
    emoji: "em em-cheese_wedge",
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
        <div className="skill" style={{ background: value.color }} key={index}>
        {value.skill}
        <i class={value.emoji} />
        </div>
        ))}
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
