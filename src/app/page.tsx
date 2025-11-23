"use client";
import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex h-screen w-full bg-gradient-to-br from-slate-300 to-slate-800 overflow-hidden">
      {/* Left Sidebar */}
      <div className="w-1/4 h-full bg-slate-400/50 backdrop-blur-md flex flex-col items-center py-10 shadow-2xl z-10 border-r border-white/20">
      <div
        className="w-32 h-32 rounded-full bg-white overflow-hidden mb-10 border-4 border-black shadow-lg bg-center bg-cover"
        style={{ backgroundImage: "url('/image/dp.png')" }}
      ></div>


        <div className="flex flex-col w-full px-8 gap-6">
          <Link href="/about">
            <button className="w-full py-3 bg-white text-black font-bold rounded-lg shadow-md hover:bg-gray-200 transition">
              ABOUT
            </button>
          </Link>

          <Link href="/contact">
            <button className="w-full py-3 bg-white text-black font-bold rounded-lg shadow-md hover:bg-gray-200 transition">
              CONTACT
            </button>
          </Link>

          <Link href="/hobbies">
            <button className="w-full py-3 bg-white text-black font-bold rounded-lg shadow-md hover:bg-gray-200 transition">
              HOBBIES
            </button>
          </Link>

          <Link href="/education">
            <button className="w-full py-3 bg-white text-black font-bold rounded-lg shadow-md hover:bg-gray-200 transition">
              EDUCATION
            </button>
          </Link>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 flex flex-col justify-center px-20 text-white">
        <h1 className="text-8xl font-black mb-4 drop-shadow-lg tracking-tighter uppercase">
          Welcome
        </h1>
        <p className="text-4xl font-light opacity-90">
          To My Personal NestJS Web App
        </p>
      </div>
    </div>
  );
}
