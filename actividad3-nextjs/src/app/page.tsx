import Image from "next/image";
import Saludo from "./components/Saludo";
import Contador from "./components/Contador";

/*
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
*/

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl p-6 space-y-8">
      <Saludo
        nombre="Estudiante"
        subtitulo=" TEST: ejemplo de Componente con props (tipado con TypeScript)."
      />

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Etiquetas HTML</h2>

        <article className="prose prose-neutral dark:prose-invert">
          <p>
            Este es un <strong>párrafo</strong> con una{" "}
            <a
              href="https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements"
              target="_blank"
              rel="noreferrer"
            >
              listado de etiquetas en MDN
            </a>.
          </p>

          <ul>
            <li>
              <code>{`<header>`}</code>, <code>{`<main>`}</code>,{" "}
              <code>{`<footer>`}</code>
            </li>
            <li>
              <code>{`<section>`}</code>, <code>{`<article>`}</code>,{" "}
              <code>{`<aside>`}</code>
            </li>
            <li>
              <code>{`<h1>`}</code>…<code>{`<h6>`}</code>,{" "}
              <code>{`<p>`}</code>, <code>{`<a>`}</code>
            </li>
          </ul>
          <br />
          <p>Relleno: Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptate iste est nesciunt possimus nihil ea illum maxime dolor quo, nostrum sunt facilis, harum consectetur illo a vel et beatae. Reprehenderit repellendus
          </p>
          <br />
          <blockquote>
            “Los componentes permiten interfaces modulares y mantenibles.”
          </blockquote>
        </article>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Interactividad (Cliente)</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          El siguiente componente usa <code>useState</code> y se hidrata en el
          navegador.
        </p>
        <Contador />
      </section>

      <footer className="pt-8 border-t">
        <small className="text-gray-500 dark:text-gray-400">
          Hecho con Next.js, TypeScript y Tailwind CSS.
        </small>
      </footer>
    </main>
  );
}