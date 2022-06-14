import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import NewQuote from './components/newQuote';



const newSimpson = {
  character: "Marge Simpson",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205",
  quote: "I'm sleeping in the bath tub.",
  characterDirection: "Right",
}

function App() {

  const [simpson, setSimpson] = useState(newSimpson);
  const getSimpson = () => {
    axios
    .get("https://simpsons-quotes-api.herokuapp.com/quotes")
    .then((response) => response.data)
    .then((data) => {
      setSimpson(data[0]);
    });
  };

  return (
    <div className="App">
      <NewQuote simpson ={simpson} />
      <button type="button" onClick={getSimpson}>New Quote</button>
    </div>
  );
}

export default App;
