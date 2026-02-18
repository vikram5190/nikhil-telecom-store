import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const cookie = request.cookies.get("admin_auth");

    if (!cookie) {
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}
