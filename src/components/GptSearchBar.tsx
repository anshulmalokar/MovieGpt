import React from "react";

type Props = {};

export default function GptSearchBar({}: Props) {
  return (
    <div className="flex h-full ">
      <form onSubmit={(e) => {
          e.preventDefault();
      }} className="p-6 rounded-lg w-screen flex items-center gap-2">
        <div className="flex-1">
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="p-4 w-[600px] ml-96 text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-400"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-32 mr-96 p-4 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
