import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Details } from "./components/details";
import { Sponsors } from "./components/sponsors";
import { Partners } from "./components/partners";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Hero />
      <main>
        <About />
        <Details />
        <Sponsors />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

export default App;
