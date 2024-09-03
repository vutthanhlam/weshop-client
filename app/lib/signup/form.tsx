"use client";

import { useActionState, useState } from "react";
import { Col, Button, Form, Row } from "react-bootstrap";
import { signup } from "../auth";

export default function SignUpForm() {
  const [state, action, pending] = useActionState(signup, undefined);
  const [formValues, setFormValues] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    address: string;
  }>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    address: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }
  return (
    <Form action={action}>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              value={formValues.firstName}
              onChange={handleChange}
            />
            {state?.errors?.firstName && (
              <p className="text-danger my-0" style={{ fontSize: "12px" }}>
                {state.errors.firstName}
              </p>
            )}
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              value={formValues.lastName}
              onChange={handleChange}
            />
            {state?.errors?.lastName && (
              <p className="text-danger my-0" style={{ fontSize: "12px" }}>
                {state.errors.lastName}
              </p>
            )}
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="email"
            placeholder="Email address"
            required
            value={formValues.email}
            onChange={handleChange}
          />
          {state?.errors?.email && (
            <p className="text-danger my-0" style={{ fontSize: "12px" }}>
              {state.errors.email}
            </p>
          )}
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="phone"
            placeholder="Phone number"
            required
            value={formValues.phone}
            onChange={handleChange}
          />
          {state?.errors?.phone && (
            <p className="text-danger my-0" style={{ fontSize: "12px" }}>
              {state.errors.phone}
            </p>
          )}
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            name="password"
            placeholder="New password"
            required
            value={formValues.password}
            onChange={handleChange}
          />
          {state?.errors?.password && (
            <p className="text-danger my-0" style={{ fontSize: "12px" }}>
              {state.errors.password}
            </p>
          )}
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="address"
            placeholder="Your address"
            required
            value={formValues.address}
            onChange={handleChange}
          />
          {state?.errors?.address && (
            <p className="text-danger my-0" style={{ fontSize: "12px" }}>
              {state.errors.address}
            </p>
          )}
        </Form.Group>
      </Row>
      <Row>
        <Col className="text-center">
          <Button variant="success" className="w-50" type="submit">
            Sign up
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
