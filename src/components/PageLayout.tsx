import React from "react";

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 to-slate-700 text-white flex flex-col items-center">
      <header className="w-full py-8 text-center bg-slate-800/80 shadow-lg mb-8">
        <h1 className="text-4xl font-extrabold tracking-wide uppercase">{title}</h1>
      </header>
      <main className="flex-1 w-full flex flex-col items-center justify-center px-4">
        {children}
      </main>
    </div>
  );
}
