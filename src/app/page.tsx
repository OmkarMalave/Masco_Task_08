import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
import HeroSection from "./components/hero_section";
import BrandSliderSection from "./components/logos";
import ServiceSection from "./components/services";
import ContentSection from "./components/content";
import Footer from "./components/footer";
import TestimonialSection from "./components/feedback";

export default function Home() {
  return (
    <div>

      <Header />
      <HeroSection />
      <ServiceSection />
      <ContentSection />
      <TestimonialSection />
      <Footer />

    </div >
  );
}
