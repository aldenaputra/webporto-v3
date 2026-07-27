import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-28 sm:px-8 lg:px-10">
      <p className="font-ui-mono text-sm text-[var(--accent)]">404 — route not found</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        This page is outside the portfolio map.
      </h1>
      <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-muted)]">
        The page may have moved, or the address may be incorrect.
      </p>
      <Link
        href="/"
        className="font-ui-mono mt-8 inline-flex w-fit rounded-md border border-[var(--border)] px-4 py-2 text-sm"
      >
        Return home
      </Link>
    </section>
  );
}
