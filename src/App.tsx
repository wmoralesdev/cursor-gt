import { Hero } from './components/hero';
import { AboutSection } from './components/about-section';
import { SponsorsGrid } from './components/sponsors-grid';
import { RegistrationEmbed } from './components/registration-embed';
import { Footer } from './components/footer';

function App() {
  return (
    <main className="min-h-screen bg-brand-black text-brand-light selection:bg-brand-orange selection:text-black">
      <Hero />
      <AboutSection />
      <SponsorsGrid />
      <RegistrationEmbed />
      <Footer />
    </main>
  );
}

export default App;
