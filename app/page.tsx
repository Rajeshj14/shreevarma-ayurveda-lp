
import ConsultationBooking from "@/component/ConsultationBooking";
import DoctorsCarousel from "@/component/DoctorsCarousel";
import FaqSection from "@/component/FaqSection";
import Footer from "@/component/Footer";
import HealingJourney from "@/component/HealingJourney";
import HealingJourneyAnimated from "@/component/HealingJourneyAnimated";
import HeroSection from "@/component/Hero";
import HowItWorks from "@/component/HowItWorks";
import PageAnimations from "@/component/PageAnimations";
import WhyChoose from "@/component/WhyChoose";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <PageAnimations />
      <HeroSection />
      <WhyChoose />
      <ConsultationBooking />
      <FaqSection />
      <HowItWorks />
      <DoctorsCarousel />
      <HealingJourney />
      <Footer />
    </div>
  );
}
