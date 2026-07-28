"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is a Managed Dedicated Server?",
    answer:
      "A Managed Dedicated Server is a physical server where our team handles server administration, monitoring, security updates, maintenance and technical support, allowing you to focus on your business.",
  },
  {
    question: "Is cPanel included?",
    answer:
      "Yes. All Managed Dedicated Server plans include cPanel & WHM, making it easy to manage websites, email accounts, databases, DNS and server resources.",
  },
  {
    question: "Do you manage security updates?",
    answer:
      "Yes. We apply operating system updates, security patches and server hardening to help keep your server secure and optimized.",
  },
  {
    question: "Do I get root access?",
    answer:
      "Yes. You retain full root access to your dedicated server while benefiting from our management services.",
  },
  {
    question: "Can you migrate my websites?",
    answer:
      "Yes. We can assist with website, cPanel and server migrations from your current provider with minimal downtime.",
  },
  {
    question: "Do you provide backups?",
    answer:
      "Yes. Automated backup options are available to protect your business-critical data and applications.",
  },
  {
    question: "What operating systems are supported?",
    answer:
      "We support AlmaLinux, Rocky Linux, Ubuntu, Debian and other popular Linux distributions depending on your requirements.",
  },
  {
    question: "Who should use a Managed Dedicated Server?",
    answer:
      "Managed Dedicated Servers are ideal for agencies, SaaS providers, enterprises, eCommerce stores and businesses that require dedicated hardware without managing the server themselves.",
  },
];

export default function ManagedDedicatedFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white" id="faq">

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-4">
            Managed Dedicated FAQ
          </h2>

          <p className="text-slate-600">
            Answers to common questions about our Managed Dedicated Server solutions.
          </p>

        </div>

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border border-slate-200 rounded-2xl overflow-hidden bg-blue-50"
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