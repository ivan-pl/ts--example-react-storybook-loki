import React, { FC } from "react";

import "./Image.scss";
import DefaultImage from "./assets/no-image.png";
import { Float } from "./types";

export interface Props {
  alt?: string;
  src?: string;
  float?: Float;
}

const defaultProps: Props = {
  float: Float.None,
  src: DefaultImage,
  alt: "Empty description",
};

export const Image: FC<Props> = ({ alt, src, float }) => {
  return <img src={src} alt={alt} className={"image " + float} />;
};

Image.defaultProps = defaultProps;
