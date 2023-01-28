import { newLine } from "./line";
import { PolarPoint, newPolarPoint } from "./points/polarpoint";

const point1: PolarPoint = newPolarPoint(2, 0);
const point2: PolarPoint = newPolarPoint(4, Math.PI);

const line = newLine(point1, point2);

line.draw();
