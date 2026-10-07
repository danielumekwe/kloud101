"use client";

import { useState, useRef, useEffect, useCallback, FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpDown,
  Briefcase,
  CheckCircle2,
  Headset,
  LoaderCircle,
  MessageSquare,
  Server,
  Shield,
  Users,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/site/PageHero";
import CtaLink from "@/components/site/CtaLink";
import HeroDetails from "@/components/site/HeroDetails";
import Eyebrow from "@/components/site/Eyebrow";
import SectionHeading from "@/components/site/SectionHeading";
import FeatureGrid from "@/components/site/FeatureGrid";
import ClosingCta from "@/components/site/ClosingCta";

// Note: Since this is a "use client" file, metadata must be in a separate
// layout.tsx or a wrapper server component.

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  department: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

// ─── Constants ────────────────────────────────────────────────────────────────

const DEPARTMENTS = [
  "Sales Team",
  "Technical Support",
  "Billing Department",
  "WhatsApp Support",
  "Business Development",
];

const OFFICES = [
  {
    country: "Nigeria",
    region: "West Africa Hub",
    coverage: "Sub-Saharan Africa",
    hours: "08:00 – 22:00 WAT",
    phone: "0808 969 9705",
    address: "16 Oduola Ogunrinde Ave, Ikotun, Lagos 100266, Lagos",
  },
  {
    country: "United Kingdom",
    region: "EMEA HQ",
    coverage: "Europe, Middle East, Africa",
    hours: "09:00 – 18:00 GMT",
    phone: "Coming soon",
    address: "Coming soon",
  },
  {
    country: "United States",
    region: "Americas Hub",
    coverage: "North & South America",
    hours: "09:00 – 18:00 EST",
    phone: "Coming soon",
    address: "Coming soon",
  },
];

const ADVANTAGES = [
  {
    icon: Users,
    title: "Cloud Experts",
    text: "Certified engineers with deep expertise across AWS-compatible, bare-metal, and managed cloud stacks.",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    text: "Round-the-clock incident response and proactive monitoring so your uptime never sleeps.",
  },
  {
    icon: ArrowUpDown,
    title: "Migration Assistance",
    text: "Zero-downtime lift-and-shift migrations handled by specialists who have done it thousands of times.",
  },
  {
    icon: Briefcase,
    title: "Dedicated Account Managers",
    text: "A single point of contact who knows your infrastructure and proactively optimises your estate.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    text: "DDoS protection, WAF, SSL, private networking, and compliance-ready environments built in.",
  },
  {
    icon: Server,
    title: "Scalable Infrastructure",
    text: "From a single VPS to hundreds of bare-metal nodes — scale horizontally without re-architecting.",
  },
];

// ─── Form fields ──────────────────────────────────────────────────────────────

function Field({ id, label, required, children }: { id: string; label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="form-field">
      <label htmlFor={id}>
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      {children}
    </div>
  );
}

// ─── Image Captcha ────────────────────────────────────────────────────────────

const CAPTCHA_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no O/0, I/1

function generateCaptchaCode(length = 5) {
  let code = "";
  for (let i = 0; i < length; i++) {
    code += CAPTCHA_CHARS[Math.floor(Math.random() * CAPTCHA_CHARS.length)];
  }
  return code;
}

interface CaptchaFieldProps {
  onVerifiedChange: (verified: boolean) => void;
}

function CaptchaField({ onVerifiedChange }: CaptchaFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [touched, setTouched] = useState(false);

  const drawCaptcha = useCallback((value: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);

    // Background
    ctx.fillStyle = "#f3f5f8";
    ctx.fillRect(0, 0, width, height);

    // Noise lines
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = `rgba(59,130,246,${0.15 + Math.random() * 0.2})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(Math.random() * width, Math.random() * height);
      ctx.lineTo(Math.random() * width, Math.random() * height);
      ctx.stroke();
    }

    // Noise dots
    for (let i = 0; i < 40; i++) {
      ctx.fillStyle = `rgba(30,64,175,${0.1 + Math.random() * 0.25})`;
      ctx.beginPath();
      ctx.arc(Math.random() * width, Math.random() * height, 1, 0, Math.PI * 2);
      ctx.fill();
    }

    // Distorted characters
    const charWidth = width / value.length;
    [...value].forEach((char, i) => {
      const x = charWidth * i + charWidth / 2;
      const y = height / 2 + (Math.random() * 8 - 4);
      const angle = (Math.random() * 30 - 15) * (Math.PI / 180);

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.font = `bold ${Math.floor(height * 0.55)}px monospace`;
      ctx.fillStyle = ["#1d4ed8", "#4338ca", "#0e7490", "#1e293b"][i % 4];
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(char, 0, 0);
      ctx.restore();
    });
  }, []);

  const refresh = useCallback(() => {
    const next = generateCaptchaCode();
    setCode(next);
    setInput("");
    setTouched(false);
    onVerifiedChange(false);
    requestAnimationFrame(() => drawCaptcha(next));
  }, [drawCaptcha, onVerifiedChange]);

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const verified = touched && input.trim().length > 0 && input.trim().toUpperCase() === code;
    onVerifiedChange(verified);
  }, [input, code, touched, onVerifiedChange]);

  const isInvalid = touched && input.trim().length > 0 && input.trim().toUpperCase() !== code;

  return (
    <div>
      <label htmlFor="captcha">
        Image verification <span className="text-primary">*</span>
      </label>
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <canvas
          ref={canvasRef}
          width={160}
          height={56}
          role="img"
          aria-label="Captcha image showing a distorted code to verify you are not a bot"
          className="rounded border border-border"
        />
        <button
          type="button"
          onClick={refresh}
          aria-label="Refresh captcha image"
          className="flex h-9 w-9 items-center justify-center rounded border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>
      <input
        id="captcha"
        name="captcha"
        type="text"
        value={input}
        onChange={(e) => { setInput(e.target.value); setTouched(true); }}
        onBlur={() => setTouched(true)}
        required
        autoComplete="off"
        aria-label="Enter the characters shown in the image"
        placeholder="Enter the code shown above"
        aria-invalid={isInvalid}
      />
      {isInvalid && (
        <p className="form-error mt-2">Code doesn&apos;t match. Try again or refresh the image.</p>
      )}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    department: "",
    message: "",
  });
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const updateField = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!captchaVerified) {
      setFormStatus("error");
      return;
    }
    setFormStatus("loading");

    try {
      // ── Replace this with your actual form submission logic ──
      await new Promise((res) => setTimeout(res, 1800));
      setFormStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", subject: "", department: "", message: "" });
      setCaptchaVerified(false);
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      <PageHero
        breadcrumb="Contact"
        eyebrow="KLOUD101 CONTACT CENTER"
        title={"Talk To Cloud\nInfrastructure Experts"}
        description="Whether you're launching a startup, migrating enterprise workloads, scaling a SaaS platform, or building a hosting business, our cloud specialists are ready to help."
        icon={MessageSquare}
        actions={
          <>
            <CtaLink href="#contact-form">Contact Sales</CtaLink>
            <CtaLink href="#contact-form" variant="outline">Schedule Consultation</CtaLink>
          </>
        }
      >
        <HeroDetails items={["24/7 Support", "99.99% Uptime SLA", "Global Network", "Enterprise Security"]} />
      </PageHero>

      {/* Contact form */}
      <section id="contact-form" className="section scroll-mt-20" aria-label="Contact form">
        <div className="wrap contact-layout">
          <aside className="contact-aside">
            <Eyebrow>MESSAGE FORM</Eyebrow>
            <h2>Send Us A Message</h2>
            <p>
              Choose the department that should receive your request. Existing customers should use the{" "}
              <a href="https://my.kloud101.com/login" className="text-primary font-medium hover:underline">
                portal
              </a>{" "}
              when the message involves an active service.
            </p>
            <div className="contact-details">
              <div>
                <span>EMAIL</span>
                <a href="mailto:info@kloud101.com">info@kloud101.com</a>
              </div>
              <div>
                <span>PHONE</span>
                <a href="tel:+2348089699705">0808 969 9705</a>
              </div>
              <div>
                <span>LAGOS OFFICE</span>
                <strong>
                  16 Oduola Ogunrinde Ave, Ikotun,
                  <br />
                  Lagos 100266, Lagos
                </strong>
              </div>
              <div>
                <span>EXISTING CUSTOMERS</span>
                <a href="https://my.kloud101.com/login">Customer portal →</a>
              </div>
            </div>
          </aside>

          {formStatus === "success" ? (
            <div className="contact-success">
              <CheckCircle2 />
              <h3>Message Sent Successfully</h3>
              <p>Thanks for reaching out. A Kloud101 specialist will contact you within one business day.</p>
              <button
                type="button"
                onClick={() => setFormStatus("idle")}
                className="cta-button inline-flex items-center justify-center border border-input bg-background font-medium transition-colors hover:bg-accent"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} noValidate aria-label="Contact form" className="contact-form">
              <div className="form-row">
                <Field id="firstName" label="First Name" required>
                  <input id="firstName" name="firstName" value={formData.firstName} onChange={updateField("firstName")} required autoComplete="given-name" />
                </Field>
                <Field id="lastName" label="Last Name" required>
                  <input id="lastName" name="lastName" value={formData.lastName} onChange={updateField("lastName")} required autoComplete="family-name" />
                </Field>
              </div>

              <div className="form-row">
                <Field id="email" label="Email Address" required>
                  <input id="email" name="email" type="email" value={formData.email} onChange={updateField("email")} required autoComplete="email" />
                </Field>
                <Field id="phone" label="Phone Number">
                  <input id="phone" name="phone" type="tel" value={formData.phone} onChange={updateField("phone")} autoComplete="tel" />
                </Field>
              </div>

              <div className="form-row">
                <Field id="subject" label="Subject" required>
                  <input id="subject" name="subject" value={formData.subject} onChange={updateField("subject")} required />
                </Field>
                <Field id="department" label="Department" required>
                  <select id="department" name="department" value={formData.department} onChange={updateField("department")} required>
                    <option value="" disabled>
                      Choose a department
                    </option>
                    {DEPARTMENTS.map((department) => (
                      <option key={department} value={department}>
                        {department}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field id="message" label="Message" required>
                <textarea id="message" name="message" value={formData.message} onChange={updateField("message")} rows={5} required />
              </Field>

              <div className="form-field">
                <CaptchaField onVerifiedChange={setCaptchaVerified} />
              </div>

              {formStatus === "error" && (
                <p className="form-error" role="alert">
                  {captchaVerified
                    ? "Something went wrong. Please try again or email us directly."
                    : "Please complete the image verification before sending your message."}
                </p>
              )}

              <button
                type="submit"
                disabled={formStatus === "loading"}
                className="cta-button inline-flex items-center justify-center gap-2 whitespace-nowrap bg-primary font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {formStatus === "loading" ? (
                  <>
                    <LoaderCircle className="size-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="size-4" />
                  </>
                )}
              </button>
              <p className="form-footnote">
                By submitting, you agree to the{" "}
                <a href="/privacy-policy" className="text-primary">
                  Kloud101 privacy policy
                </a>
                .
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Office locations */}
      <section className="section bg-card border-y" aria-label="Office locations">
        <div className="wrap">
          <SectionHeading
            eyebrow="WHERE WE OPERATE"
            title="Global Presence"
            text="Kloud101 operates data centres and support teams across three continents to ensure low-latency, high-availability infrastructure wherever your users are."
          />
          <div className="office-grid">
            {OFFICES.map((office) => (
              <article key={office.country}>
                <h3>{office.country}</h3>
                <span className="office-region">{office.region}</span>
                <dl>
                  <div>
                    <dt>Coverage</dt>
                    <dd>{office.coverage}</dd>
                  </div>
                  <div>
                    <dt>Hours</dt>
                    <dd>{office.hours}</dd>
                  </div>
                  <div>
                    <dt>Phone</dt>
                    <dd>{office.phone}</dd>
                  </div>
                  <div>
                    <dt>Address</dt>
                    <dd>{office.address}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <div className="media-frame mt-10">
            <iframe
              title="Kloud101 Technology location on Google Maps"
              src="https://www.google.com/maps?q=KLOUD101+TECHNOLOGY&output=embed"
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Why Kloud101 */}
      <section className="section" aria-label="Why Kloud101">
        <div className="wrap">
          <SectionHeading
            eyebrow="OUR ADVANTAGES"
            title="Why Contact Kloud101?"
            text="We don't just sell cloud services — we architect long-term infrastructure strategies with you."
          />
          <FeatureGrid items={ADVANTAGES} columns={3} />
        </div>
      </section>

      <ClosingCta
        eyebrow="GET STARTED TODAY"
        title={
          <>
            Ready To Build On
            <br />
            Better Infrastructure?
          </>
        }
        text="Let's design the perfect cloud environment for your business."
        actions={
          <>
            <CtaLink href="#contact-form">Talk To An Expert</CtaLink>
            <CtaLink href="#contact-form" variant="outline">Request Proposal</CtaLink>
          </>
        }
        points={["SOC 2 Compliant", "99.99% SLA", "24/7 Response", "Global CDN"]}
      />

      <Footer />
    </main>
  );
}
