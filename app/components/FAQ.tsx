"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is the warranty period for Mechnova machines?",
    answer: "All Mechnova machines come with a standard 1-year warranty covering manufacturing defects. We also offer extended warranty plans and genuine spare parts support for long-term peace of mind."
  },
  {
    question: "Are spare parts easily available across India?",
    answer: "Yes, we have a vast network of 500+ dealers across India. We ensure that genuine spare parts for all our models (Power Weeders, Brush Cutters, Engines) are readily available at all authorized service centers."
  },
  {
    question: "Do you provide on-site demonstrations for farmers?",
    answer: "Absolutely! We believe in 'Try before you Buy'. You can request a field demonstration through your nearest dealer to see the power and efficiency of our machines in your own soil conditions."
  },
  {
    question: "How can I become an authorized Mechnova dealer?",
    answer: "We are always looking to expand our family. You can apply by clicking on the 'Become Dealer' button or contacting us via the WhatsApp support. Our team will guide you through the partnership process."
  },
  {
    question: "What makes Mechnova better than other brands?",
    answer: "Our machines are specifically engineered for Indian terrain. We combine high-performance engines (like our 208cc Pro Weeder) with heavy-duty build quality and unmatched after-sales service, making us a trusted choice for 10,000+ farmers."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-50 text-[#236da9] text-[12px] font-black tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-6">
            Help Center
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Frequently Asked <span className="text-[#236da9]">Questions</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Find answers to common questions about our products, services, and dealership opportunities.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group rounded-3xl border-2 transition-all duration-500 ${
                activeIndex === index
                  ? "border-[#236da9] bg-white shadow-xl shadow-blue-50"
                  : "border-gray-50 bg-gray-50/30 hover:border-gray-200"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-8 py-6 flex items-center justify-between gap-4"
              >
                <span
                  className={`text-lg sm:text-xl font-bold transition-colors duration-300 ${
                    activeIndex === index ? "text-[#236da9]" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                    activeIndex === index
                      ? "bg-[#236da9] text-white rotate-180"
                      : "bg-white text-gray-400 group-hover:bg-gray-100"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-8">
                  <div className="w-full h-px bg-gray-100 mb-6"></div>
                  <p className="text-gray-600 text-lg leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Support */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 font-medium mb-6">
            Still have questions? Our support team is here to help you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/yournumber"
              className="bg-[#25D366] text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 hover:scale-105 transition-transform shadow-lg shadow-green-100"
            >
              <i className="fa-brands fa-whatsapp text-xl"></i>
              Chat on WhatsApp
            </a>
            <a
              href="/contact"
              className="bg-gray-900 border border-gray-100 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 hover:bg-gray-800 transition-all"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
