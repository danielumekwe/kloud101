import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import BackupSecurityHero from "@/components/backup-security/BackupSecurityHero";
import BackupSecurityPlans from "@/components/backup-security/BackupSecurityPlans";
import BackupSecurityFeatures from "@/components/backup-security/BackupSecurityFeatures";
import BackupSecurityBenefits from "@/components/backup-security/BackupSecurityBenefits";
import BackupSecurityFaq from "@/components/backup-security/BackupSecurityFaq";
import BackupSecurityCta from "@/components/backup-security/BackupSecurityCta";

export default function BackupSecurityPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-white">

      <Navbar />

      <BackupSecurityHero />

      <BackupSecurityPlans />

      <BackupSecurityFeatures />

      <BackupSecurityBenefits />

      <BackupSecurityFaq />

      <BackupSecurityCta />

      <Footer />

    </main>
  );
}