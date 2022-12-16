import React, { FC, ReactElement, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Instruction from "./components/Instruction";
import parseCommand from "./utils/parseCommand";
import createComponent from "./utils/createComponent";

const App: FC = () => {
  const [components, setComponents] = useState<ReactElement[]>([]);

  useEffect(() => {
    setTimeout(handleCommands, 1);
  }, []);

  const handleCommands = () => {
    let command = prompt("Enter a command");
    while (command) {
      const componentInfo = parseCommand(command);
      if (componentInfo === null) {
        command = prompt("Enter a command");
        continue;
      }
      componentInfo.props.key = uuidv4();

      const newComponent = createComponent(componentInfo);
      if (newComponent) {
        setComponents((state) => [...state, newComponent]);
      }

      command = prompt("Enter a command");
    }
  };

  useEffect(() => {
    setTimeout(handleCommands, 1);
  }, []);

  return (
    <main className="main">
      <Instruction />
      <section className="components">{components}</section>
    </main>
  );
};

export default App;
