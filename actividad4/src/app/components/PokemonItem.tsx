"use client";

import { useState } from "react";

export interface PokemonItemProps {
  name: string;
}

export default function PokemonItem({ name }: PokemonItemProps) {
  const [count, setCount] = useState<number>(0);

  return (
    <li>
      <button
        onClick={() => setCount(count + 1)}
        className="w-full text-left p-2 border rounded hover:bg-gray-100"
      >
        <span className="font-medium capitalize">{name}</span>
        <span className="ml-2 text-sm text-gray-600">(usado {count} veces)</span>
      </button>
    </li>
  );
}

