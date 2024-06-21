import React, {useState} from "react"

import "./App.css";
import Greeting from "./Gretting";

const App = () => {

  // let counter = 0;
  const [counter, setCounter] = useState(0);

  const changecounter = () =>{
    console.log("counter is",counter)
    setCounter(counter +1)
  }


  return (
    <>
    <div style={{backgroundColor:(counter < 5)? "green": "blue"}}>

      <Greeting name="Michael" city="München" />
      <Greeting name="Joe" city="London" />
      <Greeting name="Peter" city="Paris" />
      <Greeting name="Paul" city="Hamburg" />
      <button onClick={changecounter}>click me</button>
      <p>Counter {counter}</p>

    </div>
    </>
  );
};

export default App;
