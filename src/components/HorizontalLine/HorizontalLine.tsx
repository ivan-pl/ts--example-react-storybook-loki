import React, { FC } from "react";
import { LineType } from "./types";
import "./HorizontalLine.scss";

export interface Props {
  lineType?: LineType;
}

const defaultProps: Props = {
  lineType: LineType.Solid,
};

export const HorizontalLine: FC<Props> = ({ lineType }) => {
  return <hr className={lineType} data-testid="hr" />;
};

HorizontalLine.defaultProps = defaultProps;
