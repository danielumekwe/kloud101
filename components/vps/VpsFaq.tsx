"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How quickly is my VPS deployed?",
    answer:
      "Most VPS instances are provisioned automatically within 60 seconds after successful payment.",
  },
  {
    question: "Do I get full root access?",
    answer:
      "Yes. All Linux VPS plans include full root access, giving you complete control over your server.",
  },
  {
    question: "Can I upgrade my VPS later?",
    answer:
      "Absolutely. You can scale CPU, RAM and storage resources as your requirements grow.",
  },
  {
    question: "Which operating systems are available?",
    answer:
      "Ubuntu, Debian, Rocky Linux, AlmaLinux, Fedora and Windows Server are available depending on the VPS type.",
  },
  {
    question: "Do you provide backups?",
    answer:
      "Backup options are available to help protect your applications and data.",
  },
  {
    question: "Can I install cPanel or other control panels?",
    answer:
      "Yes. cPanel, DirectAdmin, Plesk, CyberPanel and Webmin can be installed on supported VPS plans.",
  },
  {
    question: "Do you offer managed VPS support?",
    answer:
      "Yes. Managed VPS plans are available for customers who prefer assistance with server administration.",
  },
];

export default function VpsFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-blue-50">

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-600">
            Answers to common questions about our VPS hosting services.
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