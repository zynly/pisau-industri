import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F1E8]">
      <Navbar />
      <Hero />
      <Products />
      <Testimonials />
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}