import React from "react";
import styled from "styled-components";
import Routes from "./Routes";

function App() {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount(prev => prev + 1);
  };
  const decrement = () => {
    setCount(prev => prev - 1);
  };
  return (
    <Routes />
    // <div style={{ width: 300, height: 300, textAlign: "center" }}>
    //   <h1>{count}</h1>
    //   <Button onClick={increment}>Increment</Button>
    //   <Button onClick={decrement}>Decrement</Button>
    // </div>
  );
}

const Button = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  background-color: #44f;
  color: #fff;
  &:active {
    transform: scale(0.98);
  }
`;

export default App;
