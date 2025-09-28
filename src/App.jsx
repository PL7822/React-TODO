import React, { useState } from "react";
import "./index.css";
import "./TrippyButton.css"; // Trippy button CSS

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // कोणता item edit चालू आहे ते

  const addTodo = () => {
    if (!text.trim()) return;

    if (editIndex !== null) {
      // Edit mode मध्ये असल्यास update कर
      const updatedList = [...list];
      updatedList[editIndex] = text.trim();
      setList(updatedList);
      setEditIndex(null); // edit mode संपला
    } else {
      // Add mode
      setList([...list, text.trim()]);
    }

    setText("");
  };

  const deleteTodo = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  };

  const editTodo = (index) => {
    setText(list[index]); // input मध्ये जुना text टाक
    setEditIndex(index);  // edit mode सुरू
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
          <label
            htmlFor="holo-input"
            className="input-label"
            data-text={editIndex !== null ? "UPDATE_TODO" : "ADD_TODO"}
          >
            {editIndex !== null ? "UPDATE_TODO" : "ADD_TODO"}
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
        style={{ display: "flex", justifyContent: "center", marginTop: 40 }}
      >
        <div className="container" onClick={addTodo} style={{ cursor: "pointer" }}>
          <div className="text" data-text={editIndex !== null ? "UPDATE" : "ADD"}>
            {editIndex !== null ? "UPDATE" : "ADD"}
          </div>
        </div>
      </div>



      {/* Todo List */}
      <ul style={{ marginTop: 16, paddingLeft: 20, listStyle: "none" }}>
        {list.map((item, i) => (
          <li
            key={i}
            style={{
              marginBottom: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#1a1a1a",
              padding: "6px 10px",
              borderRadius: "4px",
            }}
          >
            <span>{item}</span>
            <div>
              <button
                onClick={() => editTodo(i)}
                style={{
                  marginRight: 6,
                  padding: "4px 10px",
                  border: "none",
                  borderRadius: "3px",
                  background: "#00f2ea",
                  color: "#0d0d0d",
                  cursor: "pointer",
                }}
              >
                Edit
              </button>
              <button
                onClick={() => deleteTodo(i)}
                style={{
                  padding: "4px 10px",
                  border: "none",
                  borderRadius: "3px",
                  background: "#ff4444",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
