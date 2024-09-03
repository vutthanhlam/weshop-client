"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleChange = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      const params = new URLSearchParams(searchParams);
      if (value != "") {
        params.set("name", value);
        params.delete("page");
      } else {
        params.delete("name");
        params.delete("page");
      }
      replace(`${pathname}?${params.toString()}`);
    },
    300
  );

  function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const value = e?.target[0]?.value;
    const params = new URLSearchParams(searchParams);

    console.log(value);
    if (value != "") {
      params.set("name", value);
    } else params.delete("name");
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div style={{ minWidth: "40%" }}>
      <Form className="d-flex flex-grow-1 me-4" onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          placeholder="Search product ..."
          className="mr-sm-2 me-2"
          style={{ borderRadius: "20px" }}
          name="name"
          onChange={handleChange}
        />
        <Button type="submit" style={{ borderRadius: "20px" }}>
          <MagnifyingGlassIcon style={{ height: "24px" }} />
        </Button>
      </Form>
    </div>
  );
}
