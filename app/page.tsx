import Image from "next/image";
import styles from "./page.module.css";
import { Container } from "react-bootstrap";
import FilterForm from "./lib/homepage/filter-form";
import ProductGrid from "./lib/homepage/product-grid";
import HighlightImage from "./lib/homepage/highlight-img";
import PageChoosing from "./lib/homepage/page-choosing";
import { getTotalPages } from "./lib/utils/productUtils";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    name?: string;
    category?: string;
    sort?: string;
    page?: string;
  };
}) {
  const name = searchParams?.name || "";
  const category = searchParams?.category || "";
  const sort = searchParams?.category || "";
  const page = parseInt(searchParams?.page) || 1;
  // const totalPage = await getTotalPages();
  console.log("page", page);
  // console.log("total", totalPage);
  return (
    <Container className="grow-auto-1 ">
      <HighlightImage />
      <FilterForm />
      <ProductGrid name={name} category={category} sort={sort} page={page} />
      <PageChoosing current={page} total={10} />
    </Container>
  );
}
