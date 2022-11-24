import React from "react";
import { useGlobalContext } from "../context/AppContext";

function Form() {
  const { formText, setFormText, handleSubmit } = useGlobalContext();
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>Color Generator</label>
      <input
        type="text"
        placeholder="#ff2025"
        value={formText}
        onChange={(e) => setFormText(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
