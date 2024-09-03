"use server";

import { cookies } from "next/headers";
import { decrypt } from "./session";
import { cache } from "react";
import { getUser } from "../utils/userUtils";
import { redirect } from "next/navigation";

export const verifySession = cache(async () => {
  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);

  if (session?.id) {
    console.log("session: ", session);
    return { isAuth: true, user_id: session.user_id };
  }
});

export const getUserById = cache(async () => {
  const session = await verifySession();
  console.log("session: ", session);
  if (!session) return null;
  try {
    const user = await getUser(session.user_id);
    return user;
  } catch (error) {
    return null;
  }
});
