// src/App.js
import  { useRef, useEffect, useState } from "react";

const DrawingPad = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [clear, setClear] = useState(1)

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.lineWidth = 5;
    contextRef.current = context;
  }, [clear]);

//   const handleColorChange = (color) => {
//     contextRef.current.strokeStyle = color;
//   };

const handleColorChange = (color) => {
    const defaultColor = "black"; // Set your default color here
    contextRef.current.strokeStyle = color !== defaultColor ? color : defaultColor;
  };
  

//   const handleClearCanvas = () => {
//     contextRef.current.clearRect(0, 0, window.innerWidth, window.innerHeight);
//   };

const handleClearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
  
    context.clearRect(0, 0, canvas.width, canvas.height);
    setClear(clear+1)
  };
  

  return (
    <div className="w-full flex flex-col items-center justify-center h-screen bg-gray-200">
      <canvas
        ref={canvasRef}
        onMouseDown={(e) => {
          const { offsetX, offsetY } = e.nativeEvent;
          contextRef.current.beginPath();
          contextRef.current.moveTo(offsetX, offsetY);
        }}
        onMouseMove={(e) => {
          const { offsetX, offsetY } = e.nativeEvent;
          contextRef.current.lineTo(offsetX, offsetY);
          contextRef.current.stroke();
        }}
        onMouseUp={() => contextRef.current.closePath()}
        className="border"
      />
      <div className="mt-4">
        <button onClick={() => handleColorChange("black")} className="mr-2 bg-black text-white px-4 py-2">
          Black
        </button>
        <button onClick={() => handleColorChange("red")} className="mr-2 bg-red-500 text-white px-4 py-2">
          Red
        </button>
        <button onClick={() => handleColorChange("green")} className="mr-2 bg-green-500 text-white px-4 py-2">
          Green
        </button>
        <button onClick={handleClearCanvas} className="mr-2 bg-blue-500 text-white px-4 py-2">
          Clear
        </button>
      </div>
    </div>
  );
};

export default DrawingPad;
