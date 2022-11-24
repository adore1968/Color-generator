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
      className={`${
        index > 10 ? "text-white" : "text-black"
      } container w-1/4 p-5 m-1 rounded text-lg sm:text-xl shadow`}
      onClick={copyColor}
    >
      <h2 className="mb-1">%{item.weight}</h2>
      <h3>#{item.hex}</h3>
      {showCopy ? <p className="uppercase mt-1">Copy to clipboard</p> : null}
    </div>
  );
}

export default Color;
