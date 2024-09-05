import './App.css';
import { Fruits } from './list'
import { useEffect, useState } from "react";

function App() {

  const [query, setQuery] = useState("");

  console.log(Fruits.filter(fruit => fruit.name.includes("ap")))

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <ul className="list">
        {Fruits.filter((fru) =>
          fru.name.toLowerCase().includes(query)
        ).map((fruit) => (
          <li className="listItem" key={fruit.id}>
            {fruit.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
