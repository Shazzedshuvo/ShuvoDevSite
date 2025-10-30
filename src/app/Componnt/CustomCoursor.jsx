"use client";
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-16 h-16 rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out"
      style={{
        transform: `translate3d(${position.x - 32}px, ${position.y - 32}px, 0)`,
        background:
          "radial-gradient(circle, rgba(0,255,255,0.6) 0%, rgba(255,0,255,0.4) 40%, rgba(0,0,255,0.2) 80%)",
        filter: "blur(20px)",
        mixBlendMode: "screen",
      }}
    ></div>
  );
};

export default CustomCursor;
