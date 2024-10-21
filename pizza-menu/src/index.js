import React from "react";
import ReactDom from "react-dom/client"
import './index.css'

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

  
function App() {
    return (
    <div className="container">
        <Header />
        <Menu />
        <Footer />
    </div>
    );
}
function Header() {
    // const style = {color:"red", fontSize:"48px"}
    const style = {}
    return (
        <header className="header">
            <h1 style={style}>Fast React Pizza Co.</h1>
        </header>
    )
}
function Menu(){
  const pizzas = pizzaData
  // const pizzas = []
  const lngt = pizzas.length
    return (
    <main className="menu">
        <h2>Our Menu:</h2>

        {lngt > 0 ? (
          <>
          <p>Authentic Pizza's here!</p>
          <ul className="pizzas">
            {pizzas.map((value, index) => (
            <Pizza pizzaObj={value} />
            ))}
          </ul>
          </>
      ) : <p>Cooming soon!</p>}
        
    </main>
    );
}
function Pizza({pizzaObj}){
    return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
        <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "Sold Out!" : pizzaObj.price}</span>
        </div>
    </li>
    );
}
function Footer(){
    const hour = new Date().getHours();
    const open = 12;
    const closed = 22;
    const isOpen = hour >= open && hour <= closed
    if(!isOpen) return <p>Closed</p>
    return (
    <footer className="footer">
      {isOpen && (<div className="order"><p>We're open until {closed}:00. Come visit us or order online.</p><button className="btn">Order!</button></div>)}
    </footer>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(
<React.StrictMode>
    <App />
</React.StrictMode>
)