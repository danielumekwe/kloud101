import FaqSection from "@/components/site/FaqSection";

const faqs = [
  { question: "Do I get full root access?", answer: "Yes. All dedicated servers include full root or administrator access." },
  {
    question: "Can I reinstall the operating system?",
    answer: "Yes. You can reinstall supported operating systems whenever required.",
  },
  {
    question: "Do you provide DDoS protection?",
    answer: "Yes. Dedicated servers include enterprise-grade network protection.",
  },
  {
    question: "Can I upgrade hardware later?",
    answer: "Upgrade options depend on the server model and available resources.",
  },
  { question: "Which operating systems are available?", answer: "Linux and Windows Server operating systems are available." },
  {
    question: "Do you offer managed dedicated servers?",
    answer: "Yes. Managed services are available for businesses requiring assistance.",
  },
];

export default function DedicatedFaq() {
  return <FaqSection text="Common questions about dedicated servers." items={faqs} />;
}
