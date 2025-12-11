import Hero from "../components/home/Hero";
import ServicesOverview from "../components/home/ServicesOverview";
import DoctorHighlight from "../components/home/DoctorHighlight";
import FacilityHighlight from "../components/home/FacilityHighlight";
import Testimonials from "../components/home/Testimonials";
import WhyChooseUs from "../components/home/WhyChooseUs";
import StatsCounter from "../components/home/StatsCounter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <DoctorHighlight />
      <FacilityHighlight />
      <Testimonials />
      <WhyChooseUs />
      <StatsCounter />
    </>
  );
}
