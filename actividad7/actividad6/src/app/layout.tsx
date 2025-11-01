import "./globals.css";
import Link from "next/link";
import ReactQueryProvider from "./providers/ReactQueryProvider";

export const metadata = {
  title: "Pokémon Center - React Query Edition",
  description: "Actividad 6 con la estética original restaurada",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          padding: 0,
          background: "linear-gradient(180deg, #3a4346ff, #483f69ff)",
          color: "#fff",
          fontFamily: "'Segoe UI', Arial, sans-serif",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ReactQueryProvider>
          <header
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 100,
              background: "linear-gradient(90deg, #ebc942ff, #e3cb7fff)",
              color: "#000",
              padding: "1rem 2rem",
              boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h2 style={{ margin: 0, fontWeight: "bold" }}>Pokémon Center</h2>

            <nav style={{ display: "flex", gap: "1rem" }}>
              <Link href="/" style={{ fontWeight: 600, color: "#000" }}>
                Lista
              </Link>
              <Link href="/about" style={{ fontWeight: 600, color: "#000" }}>
                Sobre Nosotros
              </Link>
            </nav>
          </header>

          <main
            style={{
              flex: 1,
              marginTop: "90px",
              padding: "2rem 1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
            }}
          >
            {children}
          </main>

          <footer
            style={{
              background: "linear-gradient(90deg, #1565c0, #d219aaff, #42a5f5)",
              color: "#fff",
              textAlign: "center",
              padding: "1rem",
              fontSize: "0.9rem",
              boxShadow: "0 -2px 5px rgba(0,0,0,0.3)",
            }}
          >
            <p>© 2025 Pokémon Center</p>
          </footer>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
