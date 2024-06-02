
import { Hero } from "@/app/Components/Hero";
import { Features } from "@/app/Components/Feature"
import { FAQ } from "@/app/Components/FAQ";
import { Footer } from "@/app/Components/Footer";

export default function Home() {
  return (
    <>

      {/* Section Hero */}
      <Hero />


      {/* Section Features */}
      <Features />

      {/* Section FAQ */}
      <FAQ />

      {/* Section Footer */}
      <Footer />

    </>
  );
}
