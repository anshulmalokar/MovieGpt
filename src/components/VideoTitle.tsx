import React from "react";

type Props = {
  title: string;
  description: string;
};

export default function VideoTitle({ title, description }: Props) {
  return (
    <div className="p-4 opacity-90">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-xl w-3/4">{description}</p>
      <div className="flex space-x-4">
        <button className="bg-[#e50914] text-white py-2 px-6 rounded hover:bg-[#f40612] transition duration-300">
          Play
        </button>
        <button className="bg-[#333] text-white py-2 px-6 rounded border border-[#e5e5e5] hover:bg-[#505050] transition duration-300">
          More Info
        </button>
      </div>
    </div>
  );
}
