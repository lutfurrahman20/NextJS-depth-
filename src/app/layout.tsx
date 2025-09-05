import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          margin: 0,
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f8f9fa",
          color: "#212529",
        }}
      >
        <header
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "16px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>My Website</h1>
          <nav style={{ display: "flex", gap: "16px" }}>
            <Link href="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
            <Link href="/about" style={{ color: "white", textDecoration: "none" }}>
              About
            </Link>
            <Link href="/contact" style={{ color: "white", textDecoration: "none" }}>
              Contact
            </Link>
            
          </nav>
        </header>

        <main
          style={{
            flex: 1,
            padding: "24px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {children}
        </main>

        <footer
          style={{
            backgroundColor: "#1f2937",
            color: "#d1d5db",
            textAlign: "center",
            padding: "16px",
            marginTop: "24px",
          }}
        >
          <p>
            &copy; {new Date().getFullYear()} My Website. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
