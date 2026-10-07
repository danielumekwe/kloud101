import FaqSection from "@/components/site/FaqSection";

const faqs = [
  {
    question: "How quickly is my VPS deployed?",
    answer: "Most VPS instances are provisioned automatically within 60 seconds after successful payment.",
  },
  {
    question: "Do I get full root access?",
    answer: "Yes. All Linux VPS plans include full root access, giving you complete control over your server.",
  },
  {
    question: "Can I upgrade my VPS later?",
    answer: "Absolutely. You can scale CPU, RAM and storage resources as your requirements grow.",
  },
  {
    question: "Which operating systems are available?",
    answer:
      "Ubuntu, Debian, Rocky Linux, AlmaLinux, Fedora and Windows Server are available depending on the VPS type.",
  },
  {
    question: "Do you provide backups?",
    answer: "Backup options are available to help protect your applications and data.",
  },
  {
    question: "Can I install cPanel or other control panels?",
    answer: "Yes. cPanel, DirectAdmin, Plesk, CyberPanel and Webmin can be installed on supported VPS plans.",
  },
  {
    question: "Do you offer managed VPS support?",
    answer: "Yes. Managed VPS plans are available for customers who prefer assistance with server administration.",
  },
];

export default function VpsFaq() {
  return (
    <FaqSection
      text="Answers to common questions about our VPS hosting services."
      items={faqs}
    />
  );
}
