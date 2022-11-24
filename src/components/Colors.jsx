import React from "react";
import { useGlobalContext } from "../context/AppContext";
import Color from "./Color";

function Colors() {
  const { colors } = useGlobalContext();
  return (
    <div className="flex flex-wrap justify-center">
      {colors.map((item, index) => {
        return <Color key={index} item={item} index={index} />;
      })}
    </div>
  );
}

export default Colors;
