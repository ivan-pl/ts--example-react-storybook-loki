import React, { FC } from "react";

export interface Props {
  title?: string;
  content?: string;
}

const defaultProps: Props = {
  title: "Details",
  content: "Lorem ipsum dolor sit amet consectetur.",
};

export const Details: FC<Props> = ({ content, title }) => {
  return (
    <details>
      <summary>{title}</summary>
      {content}
    </details>
  );
};

Details.defaultProps = defaultProps;
