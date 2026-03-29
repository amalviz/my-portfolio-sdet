import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 relative overflow-hidden">
      <div className="fixed inset-0 mesh-gradient opacity-60" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
