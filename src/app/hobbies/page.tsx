"use client";

import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HobbiesPage() {
  const hobbies = [
    { title: "Watching", img: "/image/netf.png", color: "bg-red-900" },
    { title: "Gaming", img: "/image/ml.png", color: "bg-purple-900" },
    { title: "Coding", img: "/image/code.avif", color: "bg-orange-900" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === hobbies.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? hobbies.length - 1 : prev - 1));

  return (
    <PageLayout title="HOBBIES">
      <div className="relative w-full max-w-4xl h-96 mt-6 flex items-center justify-center group">
        <button
          onClick={prevSlide}
          className="absolute left-0 z-20 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-md transition-all -translate-x-4 group-hover:translate-x-0"
        >
          <ChevronLeft size={32} />
        </button>

        <div className="w-full h-full bg-slate-800/50 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
          <div
            className={`w-full h-full ${hobbies[currentIndex].color} flex items-center justify-center`}
          >
            <img
              src={hobbies[currentIndex].img}
              className="w-full h-full object-cover opacity-60 absolute inset-0"
            />

            <div className="relative z-10 text-center">
              <h3 className="text-6xl font-black text-white uppercase">
                {hobbies[currentIndex].title}
              </h3>
              {/* image path removed */}
            </div>
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 z-20 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-md transition-all translate-x-4 group-hover:translate-x-0"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      <div className="w-full flex justify-center mt-10">
        <Link href="/">
          <button className="px-6 py-3 bg-white text-black font-bold rounded-lg shadow-md hover:bg-gray-200 transition">
            ← Back to Home
          </button>
        </Link>
      </div>
    </PageLayout>
  );
}
