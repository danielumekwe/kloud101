"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Business Email Hosting?",
    answer:
      "Business Email Hosting allows you to create professional email addresses using your own domain name, such as info@yourcompany.com.",
  },
  {
    question: "Can I use my own domain name?",
    answer:
      "Yes. You can use any domain name you own to create branded business email addresses.",
  },
  {
    question: "Can I access email on my phone?",
    answer:
      "Absolutely. Our email service supports Android, iPhone, Outlook and other popular email clients.",
  },
  {
    question: "Do you provide spam filtering?",
    answer:
      "Yes. Advanced spam and malware protection helps keep your inbox clean and secure.",
  },
  {
    question: "Can I migrate from another provider?",
    answer:
      "Yes. Our team can assist with migrating emails from your current email provider.",
  },
  {
    question: "How much storage do I get?",
    answer:
      "Storage depends on your selected plan, ranging from 5GB to 100GB and beyond.",
  },
  {
    question: "Is email encrypted?",
    answer:
      "Yes. Emails are protected using industry-standard encryption and security technologies.",
  },
  {
    question: "Can I create multiple email accounts?",
    answer:
      "Yes. Business and Enterprise plans support multiple mailboxes for your team.",
  },
];

export default function BusinessEmailFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-blue-50" id="faq">

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-4">
            Business Email FAQ
          </h2>

          <p className="text-slate-600">
            Answers to common questions about our business email hosting service.
          </p>

        </div>

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border border-slate-200 rounded-2xl overflow-hidden bg-white"
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
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
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