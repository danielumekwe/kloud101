import FaqSection from "@/components/site/FaqSection";

const faqs = [
  {
    question: "What is Backup & Security?",
    answer:
      "Backup & Security provides automated backups, monitoring, malware protection and disaster recovery solutions to keep your business data safe.",
  },
  { question: "How often are backups performed?", answer: "Depending on your plan, backups can be daily, hourly or real-time." },
  {
    question: "Can I restore individual files?",
    answer: "Yes. You can restore individual files, folders, databases or complete websites.",
  },
  {
    question: "Do you protect against ransomware?",
    answer: "Yes. Our solutions include ransomware recovery and secure backup storage.",
  },
  {
    question: "What happens if my website is hacked?",
    answer:
      "You can quickly restore a clean version of your website from backup while our team helps investigate the issue.",
  },
  { question: "How long are backups retained?", answer: "Retention periods vary by plan, from 30 days to 365 days." },
  {
    question: "Do you offer disaster recovery?",
    answer: "Yes. We provide disaster recovery solutions designed to minimize downtime and data loss.",
  },
  {
    question: "Can I protect multiple websites?",
    answer: "Absolutely. Business and Enterprise plans support multiple websites and applications.",
  },
];

export default function BackupSecurityFaq() {
  return (
    <FaqSection
      eyebrow="FREQUENTLY ASKED QUESTIONS"
      title="Backup & Security FAQ"
      text="Common questions about protecting your business data."
      items={faqs}
    />
  );
}
