"use client";

import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex items-center justify-center mt-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-700">500 - Server Error</h1>
        <p className="mt-4 text-lg text-gray-700">
          Something went wrong on our end. Please try again later.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}