import { NextRequest, NextResponse } from "next/server";
import { loadstringList } from "@/data/loadstrings";

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname !== "/") return NextResponse.next();

  const accept = request.headers.get("accept") || "";
  const isBrowser = accept.includes("text/html");

  if (!isBrowser) {
    return new Response(loadstringList.main, {
      headers: { "Content-Type": "text/plain" },
    });
  }

  return NextResponse.next();
}
