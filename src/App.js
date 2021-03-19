import "./App.css";
import React, { useLayoutEffect, useState } from "react";
import rough from "roughjs/bundled/rough.esm";
const generator = rough.generator();

function App() {
  const [elements, setElements] = useState([]);
  const [drawing, setDrawing] = useState(false);

  const handleMouseDown = () => {};
  const handleMouseMove = () => {};
  const handleMouseUp = () => {};

  useLayoutEffect(() => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const roughCanvas = rough.canvas(canvas);
    const rect = generator.rectangle(10, 10, 100, 100);

    roughCanvas.draw(rect);

    // ctx.fillStyle = "green";
    // ctx.fillRect(10, 10, 150, 100);
  });
  return (
    <canvas
      id="canvas"
      height={window.innerHeight}
      width={window.innerWidth}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      canvas
    </canvas>
  );
}

export default App;
