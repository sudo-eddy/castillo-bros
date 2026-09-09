import SiteHeader from "../components/layout/siteHeader";
import HeroSection from "../components/sections/heroSection";
import ServicesPreview from "../components/sections/servicesPreview";

export default function HomePage() {
  return (
    <main className="bg-[#050816] text-white">
      <SiteHeader />
      <HeroSection />
      <ServicesPreview />
    </main>
  );
}