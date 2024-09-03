import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "./app/lib/auth/dal";

// 1. Specify protected and public routes
const protectedRoutes = ["/cart", "/orders", "/account"];
const publicRoutes = ["/login", "/signup", "/", "/product/[id]"];

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  // 3. Decrypt the session from the cookie
  const session = await verifySession();

  console.log("middleware:", session);
  console.log("path", path);

  //  4. Redirect to / if the user already logged in
  if (path === "/signin" && session?.isAuth) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  //   5. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !session?.isAuth) {
    return NextResponse.redirect(new URL("/signin", req.nextUrl));
  }

  // 6. Redirect to /dashboard if the user is authenticated
  //   if (
  //     isPublicRoute &&
  //     session?.isAuth &&
  //     !req.nextUrl.pathname.startsWith("/dashboard")
  //   ) {
  //     return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  //   }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
