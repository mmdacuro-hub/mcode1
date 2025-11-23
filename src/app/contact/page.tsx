"use client";
import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Input } from "@/components/ui/input";
import { Mail, Phone, User, MessageSquare, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSendMessage = () => {
    const { firstName, lastName, email, contact, message } = form;

    if (!firstName || !lastName || !email || !contact || !message) {
      alert("Message not sent. Please fill in all fields.");
      return;
    }

    alert("Your message has been sent successfully!");
  };

  return (
    <PageLayout title="CONTACT">
      <div className="w-full max-w-2xl mt-8 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">

        {/* 🔙 Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white mb-4 hover:underline"
        >
          <ArrowLeft size={18} /> Back to Home
        </Link>

        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="First Name"
              icon={<User size={18} />}
              value={form.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
            />
            <Input
              placeholder="Last Name"
              icon={<User size={18} />}
              value={form.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
            />
          </div>

          <Input
            placeholder="Email Address"
            type="email"
            icon={<Mail size={18} />}
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />

          <Input
            placeholder="Contact Number"
            type="tel"
            icon={<Phone size={18} />}
            value={form.contact}
            onChange={(e) => handleChange("contact", e.target.value)}
          />

          <div className="relative group">
            <MessageSquare
              className="absolute left-4 top-4 text-slate-300 group-focus-within:text-white transition-colors"
              size={18}
            />
            <textarea
              placeholder="Enter your Message..."
              className="w-full bg-slate-800/50 border border-slate-600 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-400 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all h-32 resize-none"
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
            ></textarea>
          </div>

          <button
            type="button"
            onClick={handleSendMessage}
            className="mt-2 bg-slate-200 text-slate-900 font-bold py-3 rounded-xl hover:bg-white hover:scale-[1.02] transition-all active:scale-95"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </PageLayout>
  );
}
