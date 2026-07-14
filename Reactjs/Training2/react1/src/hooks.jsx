import { useMemo, useState } from "react";
import "./css/hooks.css";

function HooksDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("React");

  const memoizedMessage = useMemo(() => {
    console.log("Memoized value recalculated");
    return `${name} has rendered ${count} times`;
  }, [name, count]);

  return (
    <div className="hooks-container">
      <h3 className="hooks-title">useMemo Example</h3>
      <div className="hooks-controls">
        <input
          className="hooks-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <button className="hooks-btn" onClick={() => setCount(count + 1)}>
          Render count: {count}
        </button>
      </div>
      <p className="hooks-output">{memoizedMessage}</p>
    </div>
  );
}

export default HooksDemo;