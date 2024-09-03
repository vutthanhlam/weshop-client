import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const SignUpFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters long." })
    .trim(),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters long." })
    .trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  phone: z
    .string()
    .regex(phoneRegex, "Please enter a valid phone number.")
    .trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })
    .trim(),
  address: z
    .string()
    .min(10, { message: "Please enter a valid address" })
    .trim(),
});

export type SignUpFormState =
  | {
      errors?: {
        firstName?: string[];
        lastName?: string[];
        email?: string[];
        phone?: string[];
        password?: string[];
        address?: string;
      };
      message?: string;
    }
  | undefined;

export type UserInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  password: string;
  role: string;
};

export type SessionPayload = {
  id: string;
  user_id: string;
  expiresAt: Date;
};
