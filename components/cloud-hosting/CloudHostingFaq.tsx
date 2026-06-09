"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Cloud Hosting?",
    answer:
      "Cloud Hosting uses multiple cloud resources to provide high availability, reliability and scalability for websites and applications.",
  },
  {
    question: "How is Cloud Hosting different from VPS Hosting?",
    answer:
      "Cloud Hosting is designed for greater scalability and redundancy, while VPS Hosting typically runs on a single virtual server environment.",
  },
  {
    question: "Can I host multiple websites?",
    answer:
      "Yes. Depending on your plan, you can host one or multiple websites on our cloud hosting platform.",
  },
  {
    question: "Do you provide automatic backups?",
    answer:
      "Yes. Daily automated backups are included to help protect your data and simplify recovery.",
  },
  {
    question: "Is SSL included?",
    answer:
      "Yes. Free SSL certificates are included with all cloud hosting plans.",
  },
  {
    question: "Can I scale resources later?",
    answer:
      "Absolutely. You can upgrade CPU, RAM and storage resources as your business grows.",
  },
  {
    question: "Do you offer website migration?",
    answer:
      "Yes. Our team can assist with migrating your website from another hosting provider.",
  },
  {
    question: "Do you provide email hosting?",
    answer:
      "Yes. Professional Business Email Hosting is available as a standalone service or alongside your hosting plan.",
  },
];

export default function CloudHostingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-950" id="faq">

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-4">
            Cloud Hosting FAQ
          </h2>

          <p className="text-gray-400">
            Answers to common questions about our cloud hosting platform.
          </p>

        </div>

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border border-slate-800 rounded-2xl overflow-hidden bg-black"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
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