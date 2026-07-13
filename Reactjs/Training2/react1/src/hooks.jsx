import { useMemo, useState } from "react";

function HooksDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("React");

  const memoizedMessage = useMemo(() => {
    console.log("Memoized value recalculated");
    return `${name} has rendered ${count} times`;
  }, [name, count]);

  return (
    <div style={{ marginTop: "20px", padding: "12px", border: "1px solid #ccc" }}>
      <h3>useMemo Example</h3>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
        style={{ marginRight: "8px" }}
      />
      <button onClick={() => setCount(count + 1)}>Render count: {count}</button>
      <p>{memoizedMessage}</p>
    </div>
  );
}

export default HooksDemo;