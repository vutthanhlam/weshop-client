"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button, Col, Container, Form } from "react-bootstrap";

export default function FilterForm() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams);

    if (name == "category") {
      if (value != "") params.set("category", value);
      else params.delete("category");
    } else params.set("sort", value);
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <Container className="mx-0 py-3 d-flex justify-content-evenly">
      <Col className="mx-5" style={{ maxWidth: "300px" }}>
        <Form.Select
          aria-label="Default select example"
          name="category"
          className="white"
          style={{ borderRadius: "20px" }}
          onChange={(e) => handleChange(e)}>
          <option value="">Category: All</option>
          <option value="phone">Phone</option>
          <option value="laptop">Laptop</option>
          <option value="camera">Camera</option>
        </Form.Select>
      </Col>
      <Col className="mx-5" style={{ maxWidth: "300px" }}>
        <Form.Select
          aria-label="Default select example"
          name="sort"
          style={{ borderRadius: "20px" }}
          onChange={(e) => handleChange(e)}>
          <option>Sort by: </option>
          <option value="price-asc">Price: Low to high</option>
          <option value="price-des">Price: High to low</option>
          <option value="rating-asc">Rating: Low to high</option>
          <option value="rating-asc">Rating: High to low</option>
        </Form.Select>
      </Col>
      {/* <Col className="mx-5">
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Col> */}
    </Container>
  );
}
