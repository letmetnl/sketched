import "./App.css";
import React, { useLayoutEffect, useState } from "react";

function App() {
  useLayoutEffect(() => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "green";
    ctx.fillRect(10, 10, 150, 100);
  });
  return (
    <canvas id="canvas" height={window.innerHeight} width={window.innerWidth}>
      canvas
    </canvas>
  );
}

export default App;
