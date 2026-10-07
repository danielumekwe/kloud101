import FaqSection from "@/components/site/FaqSection";

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
    answer: "Yes. You retain full root access to your dedicated server while benefiting from our management services.",
  },
  {
    question: "Can you migrate my websites?",
    answer:
      "Yes. We can assist with website, cPanel and server migrations from your current provider with minimal downtime.",
  },
  {
    question: "Do you provide backups?",
    answer: "Yes. Automated backup options are available to protect your business-critical data and applications.",
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
  return (
    <FaqSection
      eyebrow="FREQUENTLY ASKED QUESTIONS"
      title="Managed Dedicated FAQ"
      text="Answers to common questions about our Managed Dedicated Server solutions."
      items={faqs}
    />
  );
}
