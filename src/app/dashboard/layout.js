import Navigation from "@/components/Navigation";

export default function DashboardLayout({ children }) {
  return (
    <html>
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
