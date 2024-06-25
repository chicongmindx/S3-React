import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TabBtn from "./components/TabBtn/TabBtn";
import { EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");

  function handleSelect(selectedBtn) {
    setSelectedTopic(selectedBtn);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Section 3</h1>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabBtn
            onSelect={() => {
              handleSelect("components");
            }}
          >
            Components
          </TabBtn>
          <TabBtn
            onSelect={() => {
              handleSelect("jsx");
            }}
          >
            JSX
          </TabBtn>
          <TabBtn
            onSelect={() => {
              handleSelect("props");
            }}
          >
            Props
          </TabBtn>
          <TabBtn
            onSelect={() => {
              handleSelect("state");
            }}
          >
            State
          </TabBtn>
        </menu>
      </section>
      <div>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    </>
  );
}

export default App;
