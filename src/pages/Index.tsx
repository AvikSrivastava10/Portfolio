import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ExpertiseStrip } from '@/components/ExpertiseStrip';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ExpertiseStrip />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
