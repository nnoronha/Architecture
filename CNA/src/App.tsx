import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import ProjectsGrid from './components/ProjectsGrid';

function App() {
  const [fadeIn, setFadeIn] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  useEffect(() => {
    const rotatingPhrases = [
      'Rothelowman',
      'makers',
      'collectors of memories',
      'curators of place',
      'shaping tomorrow',
      'strategic designers',
      'Rothelowman'
    ];

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const rotatingPhrases = [
    'Rothelowman',
    'makers',
    'collectors of memories',
    'curators of place',
    'shaping tomorrow',
    'strategic designers',
    'Rothelowman'
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-sm border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-xl font-light tracking-tight">rothelowman</div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm font-light hover:opacity-60 transition-opacity">Projects</a>
            <a href="#" className="text-sm font-light hover:opacity-60 transition-opacity">Practice</a>
            <a href="#" className="text-sm font-light hover:opacity-60 transition-opacity">Insights</a>
            <a href="#" className="text-sm font-light hover:opacity-60 transition-opacity">Contact</a>
            <button className="hover:opacity-60 transition-opacity">
              <Search size={20} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>

      <HeroSection fadeIn={fadeIn} activeIndex={activeIndex} rotatingPhrases={rotatingPhrases} />
      <ProjectsGrid />
    </div>
  );
}

export default App;
