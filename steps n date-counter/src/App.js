import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function app() {
  return (
    <div>
      <Steps />
      <Counter />
      <CounterNew />
    </div>
  );
}
function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrev() {
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    if (step < 3) setStep(step + 1);
  }
  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrev}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
function CounterNew() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const date = new Date("oct 22 2024");
  date.setDate(date.getDate() + count);
  function handleReset() {
    setStep(1);
    setCount(0);
  }
  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="App">
          <div>
            <input
              type="range"
              min="0"
              max="10"
              value={step}
              onChange={(e) => setStep(Number(e.target.value))}
            />
            <span>Step: {step}</span>
          </div>
          <div>
            <button
              className="minus-count"
              onClick={() => {
                setCount(count - step);
              }}
            >
              -
            </button>
            <span>
              <input type="text" value={count} readOnly="true" />
            </span>
            <button
              className="plus-count"
              onClick={() => {
                setCount(count + step);
              }}
            >
              +
            </button>
          </div>
          <div>
            <span>
              {count === 0
                ? "Today is "
                : count > 0
                ? `${count} days from today is `
                : `${Math.abs(count)} days ago was `}
            </span>
            <span>{date.toDateString()}</span>
          </div>
          <div>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      )}
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const date = new Date("oct 22 2024");
  date.setDate(date.getDate() + count);
  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="App">
          <div>
            <button
              className="minus-step"
              onClick={() => {
                setStep(step - 1);
              }}
            >
              -
            </button>
            <span>Step: {step}</span>
            <button
              className="plus-step"
              onClick={() => {
                setStep(step + 1);
              }}
            >
              +
            </button>
          </div>
          <div>
            <button
              className="minus-count"
              onClick={() => {
                setCount(count - step);
              }}
            >
              -
            </button>
            <span>Count: {count}</span>
            <button
              className="plus-count"
              onClick={() => {
                setCount(count + step);
              }}
            >
              +
            </button>
          </div>
          <div>
            <span>
              {count === 0
                ? "Today is "
                : count > 0
                ? `${count} days from today is `
                : `${Math.abs(count)} days ago was `}
            </span>
            <span>{date.toDateString()}</span>
          </div>
        </div>
      )}
    </div>
  );
}
