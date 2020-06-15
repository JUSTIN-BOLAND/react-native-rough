import React from "react";
import { Path } from "react-native-svg";
import { useRough } from "../hooks";
import { PolygonProps } from "../type";

const Polygon = ({ points, ...o }: PolygonProps) => {
  const generator = useRough(o as any); // TODO: fix typing
  const [a, b] = generator.toPaths(generator.polygon(points, o));
  const { d: stroke, ...strokeProps } = a || {};
  const { d: fill, ...fillProps } = b || {};
  return (
    <>
      {!!stroke && <Path d={stroke} {...strokeProps} />}
      {!!fill && <Path d={fill} {...fillProps} />}
    </>
  );
};

export default Polygon;
