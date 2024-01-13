import Link from "next/link";

export const metadata = {
  title: "news",
  description: "News page description",
};

export default function News() {
  return (
    <>
      <h1>News page</h1>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/news/tamil" replace>
        Tamil news page
      </Link>
    </>
  );
}
