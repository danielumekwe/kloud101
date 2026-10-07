import FaqSection from "@/components/site/FaqSection";

const faqs = [
  {
    question: "What is Business Email Hosting?",
    answer:
      "Business Email Hosting allows you to create professional email addresses using your own domain name, such as info@yourcompany.com.",
  },
  {
    question: "Can I use my own domain name?",
    answer: "Yes. You can use any domain name you own to create branded business email addresses.",
  },
  {
    question: "Can I access email on my phone?",
    answer: "Absolutely. Our email service supports Android, iPhone, Outlook and other popular email clients.",
  },
  {
    question: "Do you provide spam filtering?",
    answer: "Yes. Advanced spam and malware protection helps keep your inbox clean and secure.",
  },
  {
    question: "Can I migrate from another provider?",
    answer: "Yes. Our team can assist with migrating emails from your current email provider.",
  },
  {
    question: "How much storage do I get?",
    answer: "Storage depends on your selected plan, ranging from 5GB to 100GB and beyond.",
  },
  {
    question: "Is email encrypted?",
    answer: "Yes. Emails are protected using industry-standard encryption and security technologies.",
  },
  {
    question: "Can I create multiple email accounts?",
    answer: "Yes. Business and Enterprise plans support multiple mailboxes for your team.",
  },
];

export default function BusinessEmailFaq() {
  return (
    <FaqSection
      eyebrow="FREQUENTLY ASKED QUESTIONS"
      title="Business Email FAQ"
      text="Answers to common questions about our business email hosting service."
      items={faqs}
    />
  );
}
