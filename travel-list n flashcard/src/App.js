import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1>Far Away</h1>;
}
function Form() {
  const [description, setDescription] = useState("");
  const [count, setCount] = useState(1);
  function handleFunction(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, count, packed: false, id: Date.now() };
    console.log(newItem);

    setDescription("");
    setCount(1);
  }
  return (
    <form className="add-form" onSubmit={handleFunction}>
      <h3>What do you need for your trip?</h3>
      <select value={count} onChange={(e) => setCount(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="input item here..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
function addItem() {}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button style={{ color: "red" }}>X</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already picked X (X%)</em>
    </footer>
  );
}

export default App;
