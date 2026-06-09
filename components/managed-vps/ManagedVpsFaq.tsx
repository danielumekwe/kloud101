"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is a Managed VPS?",
    answer:
      "A Managed VPS is a virtual private server where our team handles server administration, monitoring, security updates, maintenance, and technical support so you can focus on your business.",
  },
  {
    question: "Is cPanel included?",
    answer:
      "Yes. Managed VPS plans include cPanel & WHM, making it easy to manage websites, email accounts, databases, backups and hosting resources.",
  },
  {
    question: "Do you handle server updates?",
    answer:
      "Yes. We manage operating system updates, security patches and server maintenance to keep your VPS secure and optimized.",
  },
  {
    question: "Do you provide backups?",
    answer:
      "Yes. Automated backup options are available to help protect your websites, applications and data from unexpected issues.",
  },
  {
    question: "Can you migrate my website?",
    answer:
      "Yes. Our team can assist with website and cPanel migrations from your current hosting provider with minimal downtime.",
  },
  {
    question: "Do I still get root access?",
    answer:
      "Yes. You retain full root access to your VPS while benefiting from our management and support services.",
  },
  {
    question: "What operating systems are supported?",
    answer:
      "We support popular Linux distributions including AlmaLinux, Rocky Linux, Ubuntu and Debian. Windows VPS solutions are also available separately.",
  },
  {
    question: "Who should choose Managed VPS hosting?",
    answer:
      "Managed VPS hosting is ideal for businesses, agencies, eCommerce stores, SaaS applications and website owners who want expert server management without hiring an in-house system administrator.",
  },
];

export default function ManagedVpsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-950" id="faq">

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-4">
            Managed VPS FAQ
          </h2>

          <p className="text-gray-400">
            Answers to common questions about our fully managed VPS hosting services.
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