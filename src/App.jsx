import React from "react";
import Form from "./components/Form";
import Colors from "./components/Colors";

function App() {
  return (
    <div>
      <section className="px-5 sm:px-8 py-5 sm:py-8">
        <Form />
        <Colors />
      </section>
    </div>
  );
}

export default App;
