"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Container, Pagination } from "react-bootstrap";

export default function PageChoosing({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  function setPage(value: number) {
    console.log(current, value);
    if (value === current) return;
    const params = new URLSearchParams(searchParams);
    params.set("page", value.toString());
    replace(`${pathname}?${params.toString()}`);
  }

  let items = [];
  if (total <= 3) {
    items.push(
      <Pagination.Prev
        key={"prev"}
        disabled={current === 1}
        onClick={() => setPage(current - 1)}
      />
    );
    for (let idx = 1; idx <= total; idx++) {
      items.push(
        <Pagination.Item
          key={idx}
          active={idx === current}
          onClick={() => setPage(idx)}>
          {idx}
        </Pagination.Item>
      );
    }
    items.push(
      <Pagination.Next
        key={"next"}
        disabled={current === total}
        onClick={() => setPage(current + 1)}
      />
    );
  } else {
    items.push(
      <Pagination.Prev
        key={"prev"}
        disabled={current === 1}
        onClick={() => setPage(current - 1)}
      />
    );

    items.push(
      <Pagination.Item
        key={1}
        active={1 === current}
        onClick={() => setPage(1)}>
        {1}
      </Pagination.Item>
    );

    if (current <= 3) {
      for (let idx = 2; idx <= Math.min(current + 1, total - 1); idx++) {
        items.push(
          <Pagination.Item
            key={idx}
            active={idx === current}
            onClick={() => setPage(idx)}>
            {idx}
          </Pagination.Item>
        );
      }
    }

    if (current > 3) {
      items.push(<Pagination.Ellipsis key={"first-ellipsis"} />);
    }
    if (current > 3 && current < total - 2) {
      for (let idx = current - 1; idx <= current + 1; idx++) {
        items.push(
          <Pagination.Item
            key={idx}
            active={idx === current}
            onClick={() => setPage(idx)}>
            {idx}
          </Pagination.Item>
        );
      }
    }
    if (current < total - 2) {
      items.push(<Pagination.Ellipsis key={"second-ellipsis"} />);
    } else if (current > 3) {
      for (let idx = Math.max(current - 1, 2); idx < total; idx++) {
        items.push(
          <Pagination.Item
            key={idx}
            active={idx === current}
            onClick={() => setPage(idx)}>
            {idx}
          </Pagination.Item>
        );
      }
    }

    items.push(
      <Pagination.Item
        key={total}
        active={total === current}
        onClick={() => setPage(total)}>
        {total}
      </Pagination.Item>
    );

    items.push(
      <Pagination.Next
        key={"next"}
        disabled={current === total}
        onClick={() => setPage(current + 1)}
      />
    );
  }
  {
    /* <Pagination.Ellipsis />; */
  }
  return (
    <Container className="py-3 d-flex justify-content-center">
      <Pagination>{items}</Pagination>
    </Container>
  );
}
