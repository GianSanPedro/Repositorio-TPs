import Image from "next/image";

type Props = {
  titulo: string;
  imagen: string;           
  precio?: string;        
  descripcion?: string;    
};

export default function CardProducto({
  titulo,
  imagen,
  precio,
  descripcion,
}: Props) {
  return (
    <article className="group rounded-2xl border overflow-hidden shadow-sm hover:shadow-md transition">
      <a className="block">
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={imagen}
            alt={titulo}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-[1.02] transition"
            priority={false}
          />
        </div>

        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold line-clamp-1">{titulo}</h3>

          {descripcion && (
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {descripcion}
            </p>
          )}

          <div className="flex items-center justify-between pt-2">
            {precio ? (
              <span className="text-base font-bold">{precio}</span>
            ) : (
              <span className="text-sm text-gray-500">Ver más</span>
            )}
          </div>
        </div>
      </a>
    </article>
  );
}
