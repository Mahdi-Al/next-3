import { NextResponse } from "next/server";

export function middleware(req) {
  // Example: Check for a specific header
  const token = req.headers.get("authorization");
  console.log(token);
  if (!token) {
    // Redirect to login if token is not present
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Continue to the requested page
  return NextResponse.next();
}
export const config = {
  matcher: ["/protected/:path*"], // Apply middleware to protected routes
};
