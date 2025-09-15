type Props = {
  nombre: string;
  subtitulo?: string;
};

export default function Saludo({ nombre, subtitulo }: Props) {
  return (
    <section className="space-y-1">
      <h1 className="text-3xl font-bold">Hola, {nombre}</h1>
      {subtitulo && (
        <p className="text-gray-500 dark:text-gray-400">{subtitulo}</p>
      )}
    </section>
  );
}