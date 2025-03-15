import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

// List of public routes that don't require authentication
const publicRoutes = ["/", "/api/auth"];

export async function middleware(request) {
  const path = request.nextUrl.pathname;

  // Check if the path is a public route
  const isPublicRoute = publicRoutes.some(
    (route) => path === route || path.startsWith("/api/auth/")
  );

  // If it's a public route, allow access
  if (isPublicRoute) return NextResponse.next();

  // Check if the user is authenticated
  const session = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // If not authenticated and trying to access a protected route, redirect to home
  if (!session) {
    const url = new URL("/", request.url);
    return NextResponse.redirect(url);
  }

  // User is authenticated, allow access to protected route
  return NextResponse.next();
}

// Configure which routes this middleware should run on
export const config = {
  matcher: [
    "/profile/:path*",
    "/create-prompt",
    "/update-prompt",
    "/api/users/:path*",
  ],
};
