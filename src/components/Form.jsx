import React from "react";
import { useGlobalContext } from "../context/AppContext";

function Form() {
  const { formText, setFormText, handleSubmit } = useGlobalContext();
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex items-center mb-10 justify-center"
    >
      <label className="text-2xl sm:text-4xl font-bold mr-5">
        Color Generator
      </label>
      <input
        type="text"
        placeholder="#ff2025"
        value={formText}
        onChange={(e) => setFormText(e.target.value)}
        className="bg-gray-800 p-2 rounded text-white placeholder:text-white text-lg sm:text-xl"
      />
      <button
        type="submit"
        className="py-2.5 px-4 bg-red-500 h-full rounded text-white"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
