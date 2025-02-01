import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { About } from "@/components/About";
import { ContactForm } from "@/components/ContactForm";
import { CostCalculator } from "@/components/CostCalculator";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Categories />
      <About />
      <CostCalculator />
      <ContactForm />
    </main>
  );
};

export default Index;