export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>News Header</h1>
      <hr />
      {children}
      <hr />
      <h1>News Footer</h1>
    </>
  );
}
