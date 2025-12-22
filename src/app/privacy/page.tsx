import LegalLayout from "@/components/legal/LegalLayout";
import PrivacyContent from "@/components/legal/PrivacyContent";

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy policy" lastUpdated="">
      <PrivacyContent />
    </LegalLayout>
  );
}
