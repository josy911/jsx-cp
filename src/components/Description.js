import React from "react";
import { productJson } from "../product";

export default function Description() {
  const product = JSON.parse(productJson);
  return <div>{product.description}</div>;
}
