import Saludo from "./components/Saludo";
import Contador from "./components/Contador";
import CardProducto from "./components/CardProducto";

const productos = [
  {
    id: 1,
    titulo: "Foto Random 1",
    imagen: "https://unsplash.com/photos/bTfySKA_WrI/download?ixid=M3wxMjA3fDB8MXxhbGx8MXx8fHx8fHx8MTc1Nzk4ODExMHw&force=true",
    precio: "$30.00",
    descripcion: "Descripcion...",
  },
  {
    id: 2,
    titulo: "Foto Random 2",
    imagen: "https://images.unsplash.com/photo-1514477917009-389c76a86b68",
    precio: "$20.00",
    descripcion: "Descripcion...",
  },
  {
    id: 3,
    titulo: "Foto Random 3",
    imagen: "https://unsplash.com/photos/KXmQMNcZGFM/download?ixid=M3wxMjA3fDB8MXxhbGx8Mjl8fHx8fHx8fDE3NTc5ODk4MDl8&force=true",
    precio: "$50.00",
    descripcion: "Descripcion...",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl p-6 space-y-8">
      <Saludo
        nombre="Cliente"
        subtitulo=" TEST: ejemplo de Componente con props (tipado con TypeScript)."
      />

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">No se que hacer :(</h2>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Interactividad (Cliente)</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          El siguiente componente usa <code>useState</code> y se hidrata en el
          navegador.
        </p>
        <Contador />
      </section>

      <h2 className="text-2xl font-semibold">Productos?</h2>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {productos.map((p) => (
          <CardProducto
            key={p.id}
            titulo={p.titulo}
            imagen={p.imagen}
            precio={p.precio}
            descripcion={p.descripcion}
          />
        ))}
      </section>

      <footer className="min-h-48 flex items-center justify-center">
        <h2 className="text-2xl font-semibold">CopyRights 2025</h2>
      </footer>
    </main>
  );
}