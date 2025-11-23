"use client";
import React from "react";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";

export default function AboutPage() {
  return (
    <PageLayout title="ABOUT">
      <div className="flex flex-col md:flex-row items-center gap-5 mt-1">
        <div
          className="w-42 h-42 rounded-full bg-white overflow-hidden mb-5 border-4 border-black shadow-lg bg-center bg-cover"
          style={{ backgroundImage: "url('/image/dp.png')" }}
        ></div>

        <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/10 max-w-2xl">
          <h2 className="text-2xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-slate-200 leading-relaxed">
            Hi I am a 2nd year Computer Science Student at <b>Naga College Foundation.</b> Patiently exploring the world of technology and expanding my skills in programming.
            Before, I did not plan to take this course, I wanted to be in the animation, But as time goes by, I realized that programming is also a form of creativity.
            Aside from coding, I have a passion for watching movies and series, especially on Netflix. It's my way to unwind and find inspiration for my projects.
            I'm excited about the journey ahead in the tech world and eager to see where my skills will take me!  
          </p>
        </div>
      </div>

      {/* Back Button */}
      <Link href="/">
        <button className="mt-8 px-6 py-3 bg-white text-black font-bold rounded-lg shadow-md hover:bg-gray-200 transition">
          ← Back to Home
        </button>
      </Link>
    </PageLayout>
  );
}
