import SectionHeading from "@/components/site/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Install Sentinel Agent",
    description: "Add the KloudSentinel plugin to WordPress, WHM or your cloud server in minutes.",
  },
  {
    number: "02",
    title: "Scan Your Environment",
    description: "KloudSentinel scans files, plugins, configurations and server activity for risk.",
  },
  {
    number: "03",
    title: "Detect Security Threats",
    description: "AI-powered analysis flags malware, backdoors and unauthorized changes in real time.",
  },
  {
    number: "04",
    title: "Receive Alerts & Protection",
    description: "Get instant alerts and guided remediation so threats are handled before they spread.",
  },
];

export default function SentinelHowItWorks() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="Protection Up And Running In Minutes"
          text="A simple, four-step process to bring continuous security monitoring to your website, server or cloud infrastructure."
        />
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.number}>
              <strong>{step.number}</strong>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
