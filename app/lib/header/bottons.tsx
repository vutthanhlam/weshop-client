import { useState } from "react";
import { Button } from "react-bootstrap";

export function CustomButton({
  href,
  action,
  name,
}: {
  href: string | undefined;
  action: Function | undefined;
  name: string;
}) {
  const [mouseOver, setMouseOver] = useState<boolean>(false);
  const textStyle = mouseOver
    ? { textDecoration: "underline" }
    : { textDecoration: "none" };
  if (href) {
    return (
      <Button
        variant="link"
        href={href}
        style={textStyle}
        className="text-dark w-100"
        onMouseOver={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}>
        {name}
      </Button>
    );
  } else {
    return (
      <Button
        variant="link"
        onClick={action}
        style={textStyle}
        className="text-dark w-100"
        onMouseOver={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}>
        {name}
      </Button>
    );
  }
}
