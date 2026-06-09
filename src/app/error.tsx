"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold">Something went wrong</h1>
      <p className="mt-2 text-muted-foreground">An unexpected error occurred.</p>
      <button
        onClick={reset}
        className="mt-6 rounded-md bg-[#f8bfd4] px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-[#f8bfd4]/80"
      >
        Try again
      </button>
    </div>
  );
}
