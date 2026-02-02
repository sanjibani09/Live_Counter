import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(text.length);
  };

  return (
    <div className="container">
      <h1 className="title">Live Character Counter</h1>

      <textarea
        placeholder="Type here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className="count-btn" onClick={handleCount}>
        Count Characters
      </button>

      <p className="counter">
        Total Characters: {count}
      </p>
    </div>
  );
}

export default App;
