import React from "react";

export const useCursor = () => {
  const [cursor, setCursor] = React.useState({ x: 0, y: 0 });
  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return cursor;
};
