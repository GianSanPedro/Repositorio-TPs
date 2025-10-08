"use client";

type BotonCargarMasProps = {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
};

export default function BotonCargarMas({onClick, disabled = false, loading = false,children = "Cargar más",}: BotonCargarMasProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`mt-8 px-6 py-2 rounded-lg font-semibold transition duration-200
        ${isDisabled
            ? "bg-gray-600 text-gray-300 cursor-not-allowed"
            : "bg-[var(--accent)] text-black hover:brightness-110"
        }`}
    >
      {loading ? "Cargando..." : children}
    </button>
  );
}
