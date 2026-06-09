import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import RateCards from "./components/RateCards";
import OurTeam from "./components/OurTeam";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <OurTeam />
      <RateCards />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
