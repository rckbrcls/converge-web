import { HeroSection } from "@/components/landing/HeroSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { ScreenshotsSection } from "@/components/landing/ScreenshotsSection";
import { WhyDesktopSection } from "@/components/landing/WhyDesktopSection";
import { DownloadSection } from "@/components/landing/DownloadSection";

export default function Page() {
  return (
    <main className="h-svh md:snap-y md:snap-mandatory overflow-y-scroll scroll-smooth">
      <HeroSection />
      <HowItWorksSection />
      <ScreenshotsSection />
      <WhyDesktopSection />
      <DownloadSection />
    </main>
  );
}
