"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Backup & Security?",
    answer:
      "Backup & Security provides automated backups, monitoring, malware protection and disaster recovery solutions to keep your business data safe.",
  },
  {
    question: "How often are backups performed?",
    answer:
      "Depending on your plan, backups can be daily, hourly or real-time.",
  },
  {
    question: "Can I restore individual files?",
    answer:
      "Yes. You can restore individual files, folders, databases or complete websites.",
  },
  {
    question: "Do you protect against ransomware?",
    answer:
      "Yes. Our solutions include ransomware recovery and secure backup storage.",
  },
  {
    question: "What happens if my website is hacked?",
    answer:
      "You can quickly restore a clean version of your website from backup while our team helps investigate the issue.",
  },
  {
    question: "How long are backups retained?",
    answer:
      "Retention periods vary by plan, from 30 days to 365 days.",
  },
  {
    question: "Do you offer disaster recovery?",
    answer:
      "Yes. We provide disaster recovery solutions designed to minimize downtime and data loss.",
  },
  {
    question: "Can I protect multiple websites?",
    answer:
      "Absolutely. Business and Enterprise plans support multiple websites and applications.",
  },
];

export default function BackupSecurityFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-blue-50">

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-4">
            Backup & Security FAQ
          </h2>

          <p className="text-slate-600">
            Common questions about protecting your business data.
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