import "./App.css";
import { useRecoilState } from "recoil";
import { countState } from "./atom";

const Counter = () => {
  const [count, setCount] = useRecoilState(countState);

  return (
    <div>
      <h1>Counter</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      {count}
    </div>
  );
};

const DisplayCounter = () => {
  const [count] = useRecoilState(countState);
  return <div>{count}</div>;
};

function App() {
  return (
    <div>
      <Counter />
      <DisplayCounter />
    </div>
  );
}

export default App;
