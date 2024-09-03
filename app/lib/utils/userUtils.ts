"use server";

import { error } from "console";
import { UserInput } from "../definitions";
import { graphqlRequest } from "./request";

export async function newUser({ user }: { user: UserInput }) {
  const query = `mutation Mutation($firstName: String!, $lastName: String!, $address: [String!]!, $phone: String!, $email: String!, $password: String!, $role: String!) {
    createUser(firstName: $firstName, lastName: $lastName, address: $address, phone: $phone, email: $email, password: $password, role: $role) {
        id
        user_id
        createdAt
    }
    }`;

  try {
    const data = await graphqlRequest({
      query,
      variables: user,
    });
    if (data.createUser != null) return { newSession: data.createUser };
    return { error: { message: "Product not found. Please try again." } };
  } catch (error) {
    return { error };
  }
}

export async function getUser(id: string) {
  const query = `query Query($id: ID!) {
    user(id: $id) {
        id
        firstName
    }
    }`;
  try {
    const { user } = await graphqlRequest({
      query,
      variables: { id },
    });
    if (user) return user;
    return { error: { message: "Unable to fetch the user" } };
  } catch (error) {
    console.log(error);
    return { error: { message: "Unable to fetch the user" } };
  }
}
