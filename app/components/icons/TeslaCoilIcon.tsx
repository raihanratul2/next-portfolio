import { createLucideIcon } from "lucide-react";

export const TeslaCoilIcon = createLucideIcon("TeslaCoil", [
  ["ellipse", { cx: "10", cy: "8", rx: "6", ry: "2", key: "top-terminal" }],
  ["path", { d: "M8 10v10m4-10v10", key: "coil-body" }],
  ["path", { d: "m8 13 4-1m-4 4 4-1m-4 4 4-1", key: "windings" }],
  ["rect", { x: "5", y: "20", width: "10", height: "2", rx: "1", key: "base" }],
  ["path", { d: "m15 5 3-3-1 4h5l-4 5", key: "discharge" }],
]);
