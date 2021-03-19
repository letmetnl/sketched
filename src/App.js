import React, { useLayoutEffect, useState } from "react";
import rough from "roughjs/bundled/rough.esm";
const generator = rough.generator();

const creatingElement = (x1, y1, x2, y2, type) => {
  const roughElement =
    type === "line"
      ? generator.line(x1, y1, x2, y2)
      : generator.rectangle(x1, y1, x2 - x1, y2 - y1);
  return { x1, y1, x2, y2, type, roughElement };
};

const App = () => {
  const [elements, setElements] = useState([]);
  const [drawing, setDrawing] = useState(false);
  const [tool, setTool] = useState("line");

  useLayoutEffect(() => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const roughCanvas = rough.canvas(canvas);

    elements.forEach(({ roughElement }) => roughCanvas.draw(roughElement));
    // const rect = generator.rectangle(10, 10, 100, 100);

    // roughCanvas.draw(rect);

    // ctx.fillStyle = "green";
    // ctx.fillRect(10, 10, 150, 100);
  }, [elements]);

  const handleMouseDown = (e) => {
    setDrawing(true);
    const { clientX, clientY } = e;
    // now we need to create elements
    const element = creatingElement(clientX, clientY, clientX, clientY, tool);
    setElements((prevState) => [...prevState, element]);
  };
  const handleMouseMove = (event) => {
    if (!drawing) return;
    const { clientX, clientY } = event;
    const index = elements.length - 1;
    const { x1, y1 } = elements[index];
    const updatedElement = creatingElement(x1, y1, clientX, clientY, tool);
    const elementsCopy = [...elements];
    elementsCopy[index] = updatedElement;
    setElements(elementsCopy);
  };
  const handleMouseUp = (e) => {
    setDrawing(false);
  };

  return (
    <div>
      <div style={{ position: "fixed" }}>
        <input
          type="radio"
          id="line"
          checked={tool === "line"}
          onChange={() => setTool("line")}
        />
        <label htmlFor="line">Line</label>
        <input
          type="radio"
          id="rectangle"
          checked={tool === "rectangle"}
          onChange={() => setTool("rectangle")}
        />
        <label htmlFor="rectangle">Rectangle</label>
      </div>
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
    </div>
  );
};

export default App;
