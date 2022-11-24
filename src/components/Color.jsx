import React, { useState, useEffect } from "react";

function Color({ item, index }) {
  const [showCopy, setShowCopy] = useState(false);

  const rgb = item.rgb.join(",");

  const copyColor = () => {
    setShowCopy(true);
    navigator.clipboard.writeText(`#${item.hex}`);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowCopy(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [showCopy]);

  return (
    <div
      style={{ backgroundColor: `rgb(${rgb})` }}
      className={`${index > 10 ? "text-white" : "text-black"}`}
      onClick={copyColor}
    >
      <h2>%{item.weight}</h2>
      <h3>{item.hex}</h3>
      {showCopy ? <p>Copy to clipboard</p> : null}
    </div>
  );
}

export default Color;
