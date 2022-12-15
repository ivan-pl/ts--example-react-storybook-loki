import React, { FC } from "react";

import "./Instruction.scss";

export interface Props {}

export const Instruction: FC<Props> = () => {
  return (
    <article className="instruction">
      <h2>Synopsis</h2>
      <p>Component | [prop1="value1"; prop2="value2"; ...]</p>
      <h2>Description</h2>
      <p>
        This app adds components on page. You should enter a component name and
        properties if they needed. Prompt is called until you enter an empty
        input. <br />
        You can use the following components:
        <ul>
          <li>Image</li>
          <li>Details</li>
          <li>Paragraph</li>
          <li>Heading</li>
          <li>HorizontalLine</li>
        </ul>
        Information about props is available in the{" "}
        <a href="https://ivan-pl.github.io/ts--example-react-storybook-loki/">
          storybook
        </a>
        .
      </p>
      <h2>Examples</h2>
      <ul>
        <li>Paragraph | fontStyle="quote"</li>
        <li>Details | title="Some title"; content="Lorem ipsum";</li>
        <li>Details | title="Some title";</li>
      </ul>
    </article>
  );
};
