import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Button, Container, Dropdown } from "react-bootstrap";
import { logout } from "../auth";
import { CustomButton } from "./bottons";

export default function UserIcon({ user }: { user: { name: string } | null }) {
  const [showMouse, setShowMouse] = useState<boolean>(false);
  const [showClick, setShowClick] = useState<boolean>(false);
  const classes = showClick || showMouse ? "bg-secondary text-white" : "";
  console.log(user);
  console.log(showMouse, showClick);
  if (user?.name)
    return (
      <Container className="px-0 z-1">
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
          <UserCircleIcon style={{ height: "24" }} />
        </Button>
        <Container
          className="position-absolute border rounded top-80 end-0 bg-white"
          style={{ width: "250px" }}
          hidden={showClick === false && showMouse === false}
          onMouseLeave={() => setShowMouse(false)}
          onMouseOver={() => setShowMouse(true)}>
          <p className="text-center my-0 py-1 border-bottom ">
            <strong>Hello, {user.name}!!</strong>
          </p>
          <CustomButton href="/account" name="Account" />
          <CustomButton href="/orders" name="Orders" />
          <CustomButton action={() => logout()} name="Sign out" />
        </Container>
      </Container>
    );
  else {
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
          <UserCircleIcon style={{ height: "24" }} />
        </Button>
        <Container
          className="position-absolute border rounded top-80 end-0 bg-white"
          style={{ width: "250px" }}
          hidden={showClick === false && showMouse === false}
          onMouseLeave={() => setShowMouse(false)}
          onMouseOver={() => setShowMouse(true)}>
          <p className="text-center my-0 py-1 border-bottom ">
            <strong>Hello!!!</strong>
          </p>
          <CustomButton href="/signin" name="Sign in/Sign up" />
          {/* <Button
            variant="link"
            href="/login"
            style={{ textDecoration: "none" }}
            className="text-dark w-100">
            Sign in/Sign up
          </Button> */}
        </Container>
      </Container>
    );
  }
}
