import React from "react";
import { productJson } from "../product";

export default function Name() {
  const product = JSON.parse(productJson);
  return <div>{product.name}</div>;
}
