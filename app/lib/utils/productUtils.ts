"use server";

import { graphqlRequest } from "./request";

export async function testGraphQL() {
  const query = `query Test {
                        test {
                            name
                        }
                        }`;
  const data = await graphqlRequest({ query });
  return data;
}

export async function getProducts() {
  const query = `query Query {
  products {
    id
    name
    price
    rating {
      rate
      n_reviewers
    }
    variations {
      color
      available
      img_urls
    }
  }
}`;
  try {
    const data = await graphqlRequest({ query });
    return { products: data.products };
  } catch (error) {
    // console.log("error: ", error);
    return { error: error };
  }
}

export async function getProduct(id: string) {
  const query = `query Query($id: ID!) {
    product(id: $id) {
      name
      description
      price
      rating {
        rate
        n_reviewers
      }
      variations {
        color
        img_urls
        available
      }
    }
  }`;
  try {
    const data = await graphqlRequest({
      query,
      variables: {
        id,
      },
    });
    console.log("result", data.product);
    if (data.product != null) return { product: data.product };
    return { error: { message: "Product not found. Please try again." } };
  } catch (error) {
    return { error };
  }
}

export async function getTotalPages() {
  return 5;
}
