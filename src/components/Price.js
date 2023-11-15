import React from "react";
import { productJson } from "../product";

export default function Price() {
  const product = JSON.parse(productJson);
  return <h3>₦{Intl.NumberFormat("en-US").format(product.price)}</h3>;
}
