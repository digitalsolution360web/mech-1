"use client";

import { useState } from "react";

export default function DealerPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    city: "",
    state: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted! We will get in touch within 48 hours.");
  };

  return (
    <main className="flex-1 bg-white">
      {/* Hero Banner */}
      <section
        className="relative w-full py-20 sm:py-28 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1a5f9e 0%, #236da9 50%, #1a5f9e 100%)",
        }}
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 40%)",
          }}
        />
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,200 C250,100 500,300 750,200 C1000,100 1000,200 1000,200" stroke="white" fill="transparent" strokeWidth="2" />
            <path d="M0,300 C250,200 500,400 750,300 C1000,200 1000,300 1000,300" stroke="white" fill="transparent" strokeWidth="2" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-white text-xs font-bold uppercase tracking-widest border border-white/30 mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Join Our Network
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white mb-3 leading-tight">
            Become a Mechnova Dealer
          </h1>
          <p className="text-blue-100 text-2xl sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Partner with India&apos;s fastest growing agricultural machinery brand. Join 500+ successful dealers across the country.
          </p>
        </div>
      </section>

      {/* Dealer Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-50 text-[#236da9] text-[13px] font-bold tracking-[0.1em] uppercase px-2 py-1.5 rounded-full mb-5">
              Why Partner With Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Dealer Benefits
            </h2>
          </div>

          {/* Benefit Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                color: "bg-blue-50 text-[#236da9]",
                title: "High Margins",
                desc: "Attractive profit margins on all Mechnova products",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                ),
                color: "bg-green-50 text-green-600",
                title: "Exclusive Territory",
                desc: "Get exclusive rights to sell in your designated area",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                color: "bg-orange-50 text-orange-600",
                title: "Full Support",
                desc: "Complete marketing, training, and after-sales support",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                color: "bg-purple-50 text-purple-600",
                title: "Brand Trust",
                desc: "Associate with a nationally recognized agriculture brand",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center"
              >
                <div
                  className={`${benefit.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-sm`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{benefit.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Stats Row - Full Width Background */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { val: "500+", label: "Active Dealers" },
              { val: "15+", label: "States Covered" },
              { val: "95%", label: "Dealer Satisfaction" },
              { val: "24h", label: "Support Response" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center text-center bg-white py-10 px-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <span className="text-4xl sm:text-5xl font-bold text-[#236da9] mb-3">
                  {stat.val}
                </span>
                <span className="text-gray-600 text-xs font-bold uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dealer Application Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/60">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-50 text-[#236da9] text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5">
              Apply Now
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Dealer Application
            </h2>
            <p className="text-gray-500 text-base font-medium">
              Fill in the form below and our team will get in touch within 48 hours.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Full Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#236da9] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#236da9] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Phone + Business Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 74286 42333"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#236da9] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Business Name
                  </label>
                  <input
                    id="businessName"
                    name="businessName"
                    type="text"
                    placeholder="Your business name"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#236da9] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Row 3: City + State */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    required
                    placeholder="Your city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#236da9] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    State <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="state"
                    name="state"
                    type="text"
                    required
                    placeholder="Your state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#236da9] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Row 4: Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your business and why you want to become a dealer..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#236da9] focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#236da9] hover:bg-[#1a5a8f] text-white py-4 rounded-xl font-bold text-base uppercase tracking-wide flex items-center justify-center gap-3 shadow-lg shadow-blue-200 active:scale-95 transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
