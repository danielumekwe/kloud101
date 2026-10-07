import FaqSection from "@/components/site/FaqSection";

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
    answer: "Yes. Depending on your plan, you can host one or multiple websites on our cloud hosting platform.",
  },
  {
    question: "Do you provide automatic backups?",
    answer: "Yes. Daily automated backups are included to help protect your data and simplify recovery.",
  },
  { question: "Is SSL included?", answer: "Yes. Free SSL certificates are included with all cloud hosting plans." },
  {
    question: "Can I scale resources later?",
    answer: "Absolutely. You can upgrade CPU, RAM and storage resources as your business grows.",
  },
  {
    question: "Do you offer website migration?",
    answer: "Yes. Our team can assist with migrating your website from another hosting provider.",
  },
  {
    question: "Do you provide email hosting?",
    answer:
      "Yes. Professional Business Email Hosting is available as a standalone service or alongside your hosting plan.",
  },
];

export default function CloudHostingFaq() {
  return (
    <FaqSection
      eyebrow="FREQUENTLY ASKED QUESTIONS"
      title="Cloud Hosting FAQ"
      text="Answers to common questions about our cloud hosting platform."
      items={faqs}
    />
  );
}
