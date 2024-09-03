import ProductInfo from "@/app/lib/product/product";
import { getProduct } from "@/app/lib/utils/productUtils";
import { useState } from "react";
import { Container } from "react-bootstrap";

export default async function Page({ params }: { params: { id: string } }) {
  const { error, product } = await getProduct(params.id);
  console.log(error, product);
  if (error)
    return (
      <Container className="py-3 h-100 d-flex flex-grow-1 align-items-center justify-content-center">
        <p className="text-muted text-center">
          No product found. Please try again.
        </p>
      </Container>
    );
  return (
    <Container className="py-4">
      <ProductInfo product={product} />
    </Container>
  );
}
