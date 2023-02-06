import "./App.css";
import uuid from "react-uuid";

function App() {
  const products = [
    { name: "xbox", price: "400€", image: "https://picsum.photos/300/200" },
    {
      name: "PlayStation",
      price: "550€",
      image: "https://picsum.photos/300/200",
    },
    { name: "Nintendo", price: "200€", image: "https://picsum.photos/300/200" },
  ];

  return (
    <div className="App">
      {products.map((el) => (
        <div className="card" key={uuid()}>
          <img src={el.image}></img>
          <h2 className="h2">{el.name}</h2>
          <h3 className="h3">{el.price}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
