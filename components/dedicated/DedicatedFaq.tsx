"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I get full root access?",
    answer:
      "Yes. All dedicated servers include full root or administrator access.",
  },
  {
    question: "Can I reinstall the operating system?",
    answer:
      "Yes. You can reinstall supported operating systems whenever required.",
  },
  {
    question: "Do you provide DDoS protection?",
    answer:
      "Yes. Dedicated servers include enterprise-grade network protection.",
  },
  {
    question: "Can I upgrade hardware later?",
    answer:
      "Upgrade options depend on the server model and available resources.",
  },
  {
    question: "Which operating systems are available?",
    answer:
      "Linux and Windows Server operating systems are available.",
  },
  {
    question: "Do you offer managed dedicated servers?",
    answer:
      "Yes. Managed services are available for businesses requiring assistance.",
  },
];

export default function DedicatedFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-600">
            Common questions about dedicated servers.
          </p>
        </div>

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border border-slate-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-slate-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}