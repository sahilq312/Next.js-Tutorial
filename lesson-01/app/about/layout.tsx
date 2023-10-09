export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="bg-gray-500">About navbar</nav>
      <main>{children}</main>
    </>
  );
}
