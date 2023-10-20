import "./App.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { countState, fontSizeLabelState, fontSizeState } from "./atom";

const Counter = () => {
  const [count, setCount] = useRecoilState(countState);
  const [fontSize] = useRecoilState(fontSizeState);

  return (
    <div>
      <h1 style={{ fontSize }}>Counter</h1>
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

const FontButton = () => {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const fontSizeLabel = useRecoilValue(fontSizeLabelState);

  return (
    <div>
      <p>Current font size: {fontSizeLabel}</p>
      <button
        onClick={() => setFontSize((size) => size + 1)}
        style={{ fontSize }}
      >
        Click to Enlarge
      </button>
    </div>
  );
};

function App() {
  return (
    <div>
      <Counter />
      <DisplayCounter />
      <FontButton />
    </div>
  );
}

export default App;
