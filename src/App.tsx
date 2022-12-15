import React, { FC, useState } from "react";

const App: FC = () => {
  const [components, setComponents] = useState<React.FC[]>([]);

  return <h1>Hello, world!</h1>;
};

export default App;
