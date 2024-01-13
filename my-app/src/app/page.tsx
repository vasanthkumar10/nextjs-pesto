import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <Link href="/news">News</Link>
      <Link href="/about">About</Link>
    </>
  );
}
