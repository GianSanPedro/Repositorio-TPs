"use client";

import { useState } from "react";

export default function Contador() {
  const [count, setCount] = useState(0);
  return (
    <div className="mt-6 flex items-center gap-3">
      <button
        onClick={() => setCount((c) => c - 1)}
        className="px-3 py-2 rounded-xl border"
        aria-label="Decrementar"
      >
        −
      </button>

      <span className="min-w-10 text-center text-xl font-semibold">
        {count}
      </span>

      <button
        onClick={() => setCount((c) => c + 1)}
        className="px-3 py-2 rounded-xl border"
        aria-label="Incrementar"
      >
        +
      </button>
    </div>
  );
}
