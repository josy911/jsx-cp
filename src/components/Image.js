import { Card } from "react-bootstrap";
import { productJson } from "../product";
export default function Image() {
  const product = JSON.parse(productJson);
  return <Card.Img variant="top" src={product.image} />;
}
