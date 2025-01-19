"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchPokemonForm: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/${inputValue.trim().toLowerCase()}`);
  };

  return (
    <div className="flex items-center justify-center my-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Enter Pokémon Name
        </h2>
        <div className="mb-4">
          <label
            htmlFor="textInput"
            className="block text-sm font-medium text-gray-700"
          >
            Pokémon Name
          </label>
          <input
            type="text"
            id="textInput"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter Pokémon name..."
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Search Pokémon
        </button>
      </form>
    </div>
  );
};

export default SearchPokemonForm;