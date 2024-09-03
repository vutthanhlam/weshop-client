import { Col, Row } from "react-bootstrap";
import ProductCard from "./product-card";
import { getProducts } from "../utils/productUtils";
export default async function ProductGrid({
  name,
  category,
  sort,
  page,
}: {
  name: string;
  category: string;
  sort: string;
  page: number;
}) {
  const { products } = await getProducts();
  console.log(products);
  if (products.length) {
    return (
      <Row className="gy-3">
        {products.map((item: any) => {
          return (
            <Col key={item.id} sm={12} md={6} lg={3}>
              <ProductCard product={item} />
            </Col>
          );
        })}
      </Row>
    );
  } else return <p className="mute-text">There's no product to show...</p>;
}
