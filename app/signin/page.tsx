"use client";
import { useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import SignUpForm from "../lib/signup/form";

export default function Page() {
  const [showSignUp, setShowSignUp] = useState<boolean>(false);
  // const [user, setUser] = useState<{ id: string; firstName: string } | null>(
  //   null
  // );
  return (
    <Container className="py-5 flex-grow-1 d-flex h-100 w-100 justify-content-center align-items-center">
      <Form className="p-3 border rounded shadow">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Container className="px-0 d-flex justify-content-between">
          <Button
            className="px-0"
            variant="link"
            onClick={() => setShowSignUp(true)}>
            Create a new acount
          </Button>
          <Button type="submit">Sign in</Button>
        </Container>
      </Form>
      <Modal show={showSignUp} onHide={() => setShowSignUp(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignUpForm />
        </Modal.Body>
      </Modal>
    </Container>
  );
}
