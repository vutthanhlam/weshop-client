"use client";
import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Form,
  Image,
  Row,
  ToggleButton,
} from "react-bootstrap";
import ImageCarousels from "./carousels";
import RatingBar from "./rating";
import { boolean } from "zod";
import { Quattrocento } from "next/font/google";

export default function ProductInfo({
  product,
}: {
  product: {
    name: string;
    description: string;
    price: number;
    rating: {
      rate: number;
      n_reviewers: number;
    };
    variations: [color: string, available: number, img_urls: [string]];
  };
}) {
  const [selectedVariation, setSelectedVariation] = useState<number>(0);
  const [showQuantitySelect, setShowQuantitySelect] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [showDescription, setShowDescription] = useState<boolean>(false);
  let items = [];
  for (
    let i = 1;
    i <= Math.min(5, product.variations[selectedVariation].available);
    i++
  ) {
    items.push(i);
  }
  return (
    <Row>
      <Col sm={12} md={6} className="my-3">
        <ImageCarousels
          images={product.variations[selectedVariation].img_urls}
        />
      </Col>
      <Col sm={12} md={6} className="my-3">
        <h4>{product.name}</h4>
        <RatingBar rating={product.rating} />
        <h4 className="pt-2">${product.price}</h4>
        <div className="border-bottom pb-2">
          <p className="text-muted">
            Color:{" "}
            <strong className="text-dark">
              {product.variations[selectedVariation].color}
            </strong>
          </p>
          <ButtonGroup>
            {product.variations.map((variation, idx) => {
              return (
                <ToggleButton
                  id={variation.color}
                  variant="light"
                  type="radio"
                  key={variation.color}
                  value={idx}
                  checked={selectedVariation === idx}
                  className="me-1 rounded"
                  onClick={() => setSelectedVariation(idx)}>
                  {variation.color}
                </ToggleButton>
              );
            })}
          </ButtonGroup>
        </div>
        {product.variations[selectedVariation].available !== 0 ? (
          <div className="py-2 border-bottom">
            <Row className="pb-2">
              <Col>
                <Form.Select
                  aria-label="Select number of product that you want to by"
                  onClick={() => setShowQuantitySelect(true)}
                  onChange={(e) => {
                    setShowQuantitySelect(false);
                    setQuantity(e.target.value);
                  }}
                  style={{ borderRadius: "20px" }}>
                  {items.map((item) => {
                    return (
                      <option value={item} key={item}>
                        {showQuantitySelect ? (
                          <>{item}</>
                        ) : (
                          <> Quantity: {item}</>
                        )}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
            </Row>
            <Row className="row-gap-2">
              <Col>
                <Button
                  className="w-100"
                  variant="success"
                  style={{ borderRadius: "20px" }}>
                  Buy now
                </Button>
              </Col>
              <Col>
                <Button
                  className="w-100"
                  variant="warning"
                  style={{ borderRadius: "20px" }}>
                  Add to cart
                </Button>
              </Col>
            </Row>
          </div>
        ) : (
          <div>
            <h5 className="text-muted">Unavailable</h5>
            <Col>
              <Button
                className="w-100 border"
                variant="light"
                style={{ borderRadius: "20px" }}>
                Add to wishlist
              </Button>
            </Col>
          </div>
        )}
        <div className="py-2">
          <p>
            <strong>About the product:</strong>
          </p>
          {product.description.length < 100 ? (
            <p>{product.description}</p>
          ) : !showDescription ? (
            <>
              <p className=" text-truncate mb-0">{product.description}</p>{" "}
              <Button
                className="p-0"
                variant="link"
                onClick={() => setShowDescription(true)}>
                See more
              </Button>
            </>
          ) : (
            <>
              <p className="mb-0">{product.description}</p>
              <Button
                className="p-0"
                variant="link"
                onClick={() => setShowDescription(false)}>
                See less
              </Button>
            </>
          )}
        </div>
      </Col>
    </Row>
  );
}
