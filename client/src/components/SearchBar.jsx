import { useState } from "react";

export default function SearchBar({ value, changeHandler }) {
  return (
    <fieldset className="w-full my-3 px-2 py-1 rounded-lg text-black flex bg-white items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <input
        className="w-full p-1 border-l px-2 rounded"
        placeholder="Search"
        value={value}
        onChange={changeHandler}
      />
    </fieldset>
  );
}
