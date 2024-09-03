"use client";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function ShopingCart() {
  const [buttonClasses, setButtonClasses] = useState<string>("");
  return (
    <>
      <Button
        variant="light"
        href="/cart"
        style={{
          borderRadius: "50%",
          padding: "6px",
          width: "38px",
          height: "38px",
        }}
        onMouseOver={() => setButtonClasses("bg-secondary text-white")}
        onMouseLeave={() => setButtonClasses("")}
        className={buttonClasses}>
        <ShoppingCartIcon style={{ height: "24" }} />
      </Button>
    </>
  );
}
