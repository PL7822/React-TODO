import React, { useState } from "react";
import "./index.css";
import "./TrippyButton.css"; // Trippy button CSS

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const addTodo = () => {
    if (!text.trim()) return;
    setList([...list, text.trim()]);
    setText("");
  };

  return (
    <div
      style={{
        padding: 24,
        width: "100%",
        maxWidth: "500px",
        margin: "50px auto",
        background: "#0d0d0d",
        borderRadius: "8px",
        boxShadow: "0 2px 15px rgba(0,0,0,0.5)",
        color: "#e5e5e5",
        textAlign: "center",
        position: "relative",
      }}
    >
      <h1 style={{ color: "#00f2ea" }}>Glitch Todo</h1>

      {/* Input Box */}
      <div className="glitch-input-wrapper" style={{ marginTop: 20 }}>
        <div className="input-container">
          <input
            type="text"
            id="holo-input"
            className="holo-input"
            placeholder=""
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addTodo();
            }}
          />
          <label htmlFor="holo-input" className="input-label" data-text="ADD_TODO">
           ADD_TODO
          </label>

          <div className="input-border"></div>
          <div className="input-scanline"></div>
          <div className="input-glow"></div>

          <div className="input-data-stream">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="stream-bar" style={{ "--i": i }}></div>
            ))}
          </div>

          <div className="input-corners">
            <div className="corner corner-tl"></div>
            <div className="corner corner-tr"></div>
            <div className="corner corner-bl"></div>
            <div className="corner corner-br"></div>
          </div>
        </div>
      </div>

      {/* Trippy Button */}
      <div
        className="container"
        onClick={addTodo}
        style={{ marginTop: 220, cursor: "pointer" }}
      >
        <div className="text" data-text="ADD">
          ADD
        </div>
      </div>

      {/* Todo List */}
      <ul style={{ marginTop: 16, paddingLeft: 20 }}>
        {list.map((item, i) => (
          <li key={i} style={{ marginBottom: 6 }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
