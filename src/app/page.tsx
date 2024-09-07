import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome home!</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Link href="/blog">Blog</Link>
        <Link href="/products">Products</Link>
        <Link href="/news">News</Link>
      </div>
    </div>
  );
}
