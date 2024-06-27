import { useState } from "react";
import TabBtn from "./components/TabBtn";
import CoreConcept from "./components/CoreConcept";
import { EXAMPLES, CORE_CONCEPTS } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelect(selectedBtn) {
    setSelectedTopic(selectedBtn);
  }

  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept {...conceptItem} />
            ))}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />

            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabBtn
              isSelected={selectedTopic === "components"}
              onSelect={() => {
                handleSelect("components");
              }}
            >
              Components
            </TabBtn>
            <TabBtn
              isSelected={selectedTopic === "jsx"}
              onSelect={() => {
                handleSelect("jsx");
              }}
            >
              JSX
            </TabBtn>
            <TabBtn
              isSelected={selectedTopic === "props"}
              onSelect={() => {
                handleSelect("props");
              }}
            >
              Props
            </TabBtn>
            <TabBtn
              isSelected={selectedTopic === "state"}
              onSelect={() => {
                handleSelect("state");
              }}
            >
              State
            </TabBtn>
          </menu>
          {!selectedTopic ? (
            <p>Please select a topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
