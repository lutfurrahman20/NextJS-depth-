export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "80vh" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "220px",
          background: "#f3f4f6",
          padding: "16px",
          borderRight: "1px solid #ddd",
        }}
      >
        <h2 style={{ marginBottom: "16px" }}>Dashboard</h2>
        <nav style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <a
            href="/dashboard"
            style={{ textDecoration: "none", color: "#111" }}
          >
            Home
          </a>
          <a
            href="/dashboard/settings"
            style={{ textDecoration: "none", color: "#111" }}
          >
            Settings
          </a>
        </nav>
      </aside>

      <section style={{ flex: 1, padding: "24px" }}>{children}</section>
    </div>
  );
}
