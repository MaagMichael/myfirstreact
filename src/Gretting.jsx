/* eslint-disable react/prop-types */
import "./App.css";

const Greeting = (props) => {
  return (
    <div>
      <h1 className="text">Hello, I am {props.name}</h1>
      <h1>I live in {props.city}</h1>
    </div>
  );
};

export default Greeting;
