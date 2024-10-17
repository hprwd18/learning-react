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
    return (
    <main className="menu">
        <h2>Our Menu:</h2>
        <div className="pizzas">
        {pizzaData.map((value, index) => (
        <Pizza 
        name={value.name} 
        ingredients={value.ingredients} 
        url={value.photoName}
        price={value.price}
        />
        ))}
        </div>
    </main>
    );
}
function Pizza(props){
    return (
    <div className="pizza">
        <img src={props.url} alt={props.name}/>
        <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
        </div>
    </div>
    );
}
function Footer(){
    const hour = new Date().getHours();
    const open = 12;
    const closed = 22;
    const isOpen = hour >= open && hour <= closed
    return <footer className="footer">We opening soon!</footer>
}

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(
<React.StrictMode>
    <App />
</React.StrictMode>
)