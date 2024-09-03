"use client";
import Card from "react-bootstrap/Card";
import Rating from "@mui/material/Rating";

export default function ProductCard({ product }: { product: any }) {
  const link = "product/" + product.id;
  return (
    <Card className="bg-light w-100 " style={{ zIndex: -1 }}>
      <Card.Img
        variant="top"
        src={product.variations[0].img_urls[0]}
        className="px-2 pt-2 rounded"
        style={{
          aspectRatio: "1",
        }}
      />
      <Card.Body>
        <Card.Title className="text-truncate text-primary">
          <a
            href={link}
            className="link-offset-2 link-underline link-underline-opacity-0">
            {product.name}
          </a>
        </Card.Title>
        <div className="d-flex justify-content-center">
          <Rating
            value={product.rating.rate}
            precision={0.1}
            size="large"
            readOnly
          />
        </div>
        <Card.Text className="text-center fs-5">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}
