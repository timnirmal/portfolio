import Link from "next/link";

export default function NotFound() {
  return (
    <main className="wrap not-found">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>This page isn’t here.</h1>
      <p>Head back to explore my work, or get in touch.</p>
      <Link className="button primary" href="/">
        Back to portfolio ↗
      </Link>
    </main>
  );
}
