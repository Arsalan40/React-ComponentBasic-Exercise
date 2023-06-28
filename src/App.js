import React from "react";
import componentsImage from "./assets/images/components.png";
import stateImage from "./assets/images/state.png";
import eventsImage from "./assets/images/events.png";
import Header from "./Components/Header";
import Concepts from "./Components/Concepts";

const concepts = [
  {
    title: "Components",
    image: componentsImage,
    description:
      "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
  },
  {
    title: "State",
    image: stateImage,
    description:
      "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
  },
  {
    title: "Events",
    image: eventsImage,
    description:
      "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
  },
];

function App() {
  return (
    <div>
      <Header />

      {/* Excercise code */}
      {/* <ul id="concepts">
        <li className="concept">
          <img src="TODO: IMAGE" alt="TODO: TITLE" />
          <h2>TODO: TITLE</h2>
          <p>TODO: DESCRIPTION</p>
        </li>
      </ul> */}

      {/* Solution code(My Code) */}
      {/* <ul id="concepts">
        {concepts.map((concept, index) => {
          return (
            <li key={index} className="concept">
              <img src={concept.image} alt={concept.title} />
              <h2>{concept.title}</h2>
              <p>{concept.description}</p>
            </li>
          );
        })}
      </ul> */}

      {/* Solution code(Video Code) */}
      <ul id="concepts">
        <Concepts
          image={concepts[0].image}
          title={concepts[0].title}
          description={concepts[0].description}
        />
        <Concepts
          image={concepts[1].image}
          title={concepts[1].title}
          description={concepts[1].description}
        />
        <Concepts
          image={concepts[2].image}
          title={concepts[2].title}
          description={concepts[2].description}
        />
      </ul>
    </div>
  );
}

export default App;
