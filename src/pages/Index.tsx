import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { About } from "@/components/About";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Categories />
      <About />
      <ContactForm />
    </main>
  );
};

export default Index;