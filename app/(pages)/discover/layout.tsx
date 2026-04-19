export default async function discoverLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div id="smooth-content">{children}</div>;
}
