"use client";
import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export default function ImageCarousels({ images }: { images: [string] }) {
  return (
    <Carousel>
      {images.map((img) => {
        return (
          <Carousel.Item key={img}>
            <Image
              src={img}
              style={{
                aspectRatio: "1",
              }}
              className="w-100"
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
