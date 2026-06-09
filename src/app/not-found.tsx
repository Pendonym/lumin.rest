import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-2 text-muted-foreground">This page does not exist.</p>
      <Link
        href="/"
        className="mt-6 rounded-md bg-[#f8bfd4] px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-[#f8bfd4]/80"
      >
        Go home
      </Link>
    </div>
  );
}
