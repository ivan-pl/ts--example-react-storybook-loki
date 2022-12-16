import React, { FC } from "react";

import "./Paragraph.scss";

import { Styles } from "./types";

export interface Props {
  fontStyle?: Styles;
  children?: React.ReactNode;
  text?: string;
}

const defaultProps: Props = {
  children: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore deleniti, omnis quo quibusdam ea id est dolor beatae, iste ad atque! Recusandae harum maiores facilis ducimus commodi distinctio, beatae quia?`,
  fontStyle: Styles.Regular,
};

export const Paragraph: FC<Props> = ({ children, fontStyle, text }) => {
  return <p className={fontStyle}>{text || children}</p>;
};

Paragraph.defaultProps = defaultProps;
