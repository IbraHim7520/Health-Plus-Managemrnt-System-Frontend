export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <p>THis is navbar</p>
    {children}
    <p>This is footer</p>
    </>
  );
}
