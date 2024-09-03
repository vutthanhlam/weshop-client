"use server";
import { SignUpFormSchema, SignUpFormState } from "../definitions";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { newUser } from "../utils/userUtils";
import { deleteSession, encrypt } from "./session";
import { cookies } from "next/headers";

export async function signup(state: SignUpFormState, formData: FormData) {
  const validateFields = SignUpFormSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    password: formData.get("password"),
    address: formData.get("address"),
  });
  if (!validateFields.success) {
    console.log(validateFields.error.flatten().fieldErrors);
    return {
      errors: validateFields.error.flatten().fieldErrors,
    };
  }
  const { firstName, lastName, email, phone, password, address } =
    validateFields.data;
  const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUND));
  const hashPassword = await bcrypt.hash(password, salt);

  const { newSession, error } = await newUser({
    user: {
      firstName,
      lastName,
      email,
      phone,
      address,
      password: hashPassword,
      role: "user",
    },
  });

  if (!error) {
    const expiresAt = new Date(
      parseInt(newSession.createdAt) + 7 * 24 * 60 * 60 * 1000
    );

    const session = await encrypt({
      id: newSession.id,
      user_id: newSession.user_id,
      expiresAt,
    });

    cookies().set("session", session, {
      httpOnly: true,
      secure: true,
      expires: expiresAt,
      sameSite: "lax",
      path: "/",
    });
    redirect("/");
  } else console.log(error);
}

export async function signin(params:type) {
  
}

export async function logout() {
  deleteSession();
  redirect("/");
}
