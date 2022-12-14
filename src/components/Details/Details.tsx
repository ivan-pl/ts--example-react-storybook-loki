import React, { FC } from "react";

export interface Props {
  title?: string;
  content: string;
}

const defaultProps: Pick<Props, "title"> = {
  title: "Details",
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
