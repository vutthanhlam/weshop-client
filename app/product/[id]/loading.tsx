import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

export default function Loading() {
  return (
    <Container className="py-5 flex-grow-1 d-flex h-100 w-100 justify-content-center align-items-center">
      <Spinner animation="border" />
    </Container>
  );
}
