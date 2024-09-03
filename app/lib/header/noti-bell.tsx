"use client";
import { BellAlertIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";

export default function NotiBell() {
  const [showMouse, setShowMouse] = useState<boolean>(false);
  const [showClick, setShowClick] = useState<boolean>(false);
  const classes = showClick || showMouse ? "bg-secondary text-white" : "";
  return (
    <Container className="px-0">
      <Button
        variant="light"
        style={{
          borderRadius: "50%",
          padding: "6px",
          width: "38px",
          height: "38px",
        }}
        onClick={() => setShowClick(!showClick)}
        onMouseOver={() => setShowMouse(true)}
        onMouseLeave={() => setShowMouse(false)}
        className={classes}>
        <BellAlertIcon style={{ height: "24" }} />
      </Button>
      <Container
        className="position-absolute border rounded top-80 end-0 bg-white"
        style={{ width: "250px" }}
        hidden={showClick === false && showMouse === false}
        onMouseLeave={() => setShowMouse(false)}
        onMouseOver={() => setShowMouse(true)}>
        <Button
          variant="link"
          href="/orders"
          style={{ textDecoration: "none" }}
          className="text-dark w-100">
          Account
        </Button>
        <Button
          variant="link"
          href="/orders"
          style={{ textDecoration: "none" }}
          className="text-dark w-100">
          Orders
        </Button>
        <Button
          variant="link"
          onClick={() => logout()}
          style={{ textDecoration: "none" }}
          className="text-dark w-100">
          Sign out
        </Button>
      </Container>
    </Container>
  );
}
