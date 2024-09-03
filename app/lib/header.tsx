"use client";
import Container from "react-bootstrap/Container";
import BrandName from "./header/brand-name";
import SearchBar from "./header/search-bar";
import UserGroup from "./header/user-group";

export default function Header() {
  return (
    <div className="bg-body-tertiary border-bottom  sticky-top w-100">
      <Container className="d-flex py-2 justify-content-between position-relative">
        <BrandName />
        <SearchBar />
        <UserGroup />
      </Container>
    </div>
  );
}
