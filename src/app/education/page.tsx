"use client";
import React from "react";
import PageLayout from "@/components/PageLayout";
import Link from "next/link";

export default function EducationPage() {
  const schools = [
    { level: "Elementary School", img: "bcs.png" },
    { level: "Camarines Sur National High School", img: "camhi.png" },
    { level: "Naga College Foundation Inc.", img: "ncf.webp" },
  ];

  return (
    <PageLayout title="EDUCATION">

      {/* CENTERED GRID */}
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-0 max-w-6xl w-full px-10">

          {schools.map((school, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white/5 p-5 rounded-2xl border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300"
            >

              {/* IMAGE AREA */}
              <div className="w-full aspect-square bg-slate-700 rounded-xl mb-4 overflow-hidden group flex justify-center items-center">
                <img
                  src={`/image/${school.img}`}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* SCHOOL NAME (CENTERED TEXT) */}
              <h3 className="text-xl font-bold text-white mb-1 text-center">
                {school.level}
              </h3>
            </div>
          ))}

        </div>
      </div>

      {/* BACK BUTTON */}
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
