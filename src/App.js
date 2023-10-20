import "./App.css";
import { useState } from "react";

const Counter = (props) => {
  return (
    <div>
      <h1>Counter</h1>
      <button
        onClick={() => {
          props.onUp();
        }}
      >
        +
      </button>
      {props.count}
    </div>
  );
};

const DisplayCounter = ({ count }) => {
  return <div>{count}</div>;
};

function App() {
  const [count, setCount] = useState(10);

  return (
    <div>
      <Counter
        count={count}
        onUp={() => {
          setCount(count + 1);
        }}
      />
      <DisplayCounter count={count} />
    </div>
  );
}

export default App;
