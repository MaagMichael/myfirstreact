import  {useState} from "react"

import "./App.css";
import Greeting from "./Gretting";

const App = () => {

  // let counter = 0;
  const [counter, setCounter] = useState(0);

  const counterplus = () =>{
    console.log("counter is",counter)
    setCounter(counter +1)
  }
  const counterminus = () =>{
    console.log("counter is",counter)
    setCounter(counter -1)
  }
  const counterreset = () =>{
    console.log("counter is",counter)
    setCounter(0)
  }


  return (
    <>
    <div style={{backgroundColor:(counter > 3)? "lightgreen": "lightblue"}}>

      <Greeting name="Michael" city="München" />
      <Greeting name="Joe" city="London" />
      <Greeting name="Peter" city="Paris" />
      <Greeting name="Paul" city="Hamburg" />
      <button onClick={counterplus}>Plus</button>
      <button onClick={counterminus}>Minus</button>
      <button onClick={counterreset}>Reset</button>
      <h1>Counter: {counter}</h1>

    </div>
    </>
  );
};

export default App;
