export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <p>THis is admin navbar</p>
    {children}
    <p>This is admin footer</p>
    </>
  );
}
