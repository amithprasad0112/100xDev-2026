"use client";
import { useState } from "react";

export default function Home() {
  const [bgColor, setBgColor] = useState<{
    type: "tailwind" | "custom";
    value: string;
  }>({
    type: "tailwind",
    value: "bg-gray-100",
  });

  const [customColor, setCustomColor] = useState("#000000");
  const COLORS = [
    { name: "Red", class: "bg-red-500" },
    { name: "Blue", class: "bg-blue-500" },
    { name: "Green", class: "bg-green-500" },
    { name: "Yellow", class: "bg-yellow-400" },
    { name: "Cyan", class: "bg-cyan-400" },
  ];

  return (
    <main
      className={`min-h-screen flex flex-col ${bgColor.type === "tailwind" ? bgColor.value : ""}`}
      style={
        bgColor.type === "custom" ? { backgroundColor: bgColor.value } : {}
      }>
      {/* Header Section */}
      <header className="p-4 text-center">
        <h1 className="text-xl text-black font-bold tracking-wide">
          BG Color Changer
        </h1>
        <p className="text-sm text-gray-500">
          Click a color to change the background
        </p>
      </header>

      {/* Background Preview Section */}
      <section className="flex-1 flex items-center justify-center">
        <div className="text-gray-400">Background Preview Area</div>
      </section>

      {/* Custom Color Picker Section */}
      <div className="flex gap-2 items-center justify-center">
        <h4 className="text-md text-black font-bold tracking-wide">
          Pick Custom Color:
        </h4>
        <input
          type="color"
          value={customColor}
          onChange={(e) => {
            setCustomColor(e.target.value);
            setBgColor({ type: "custom", value: e.target.value });
          }}
          className="w-10 h-10 cursor-pointer border rounded-md"
        />
      </div>

      {/* Color Selection Section */}
      <footer className="p-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-4 flex gap-3 justify-center">
          {COLORS.map((color) => (
            <button
              key={color.name}
              className={`w-8 h-8 rounded-full ${color.class} cursor-pointer`}
              onClick={() =>
                setBgColor({ type: "tailwind", value: color.class })
              }
              title={color.name}
            />
          ))}
        </div>
      </footer>
    </main>
  );
}
