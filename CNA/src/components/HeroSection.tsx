interface HeroSectionProps {
  fadeIn: boolean;
  activeIndex: number;
  rotatingPhrases: string[];
}

export default function HeroSection({ fadeIn, activeIndex, rotatingPhrases }: HeroSectionProps) {
  return (
    <section
      className="min-h-screen w-full flex items-center justify-center px-6 pt-24 pb-12"
      style={{
        background: 'linear-gradient(to bottom, #e9dff0 0%, #f0f4ff 100%)'
      }}
    >
      <div className={`w-full max-w-6xl transition-all duration-1000 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <div style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', fontWeight: '400', color: '#000000', lineHeight: '1.2', letterSpacing: '-0.02em', minWidth: 'max-content' }}>
            We are
          </div>

          <div className="relative h-24 w-full md:w-80 overflow-hidden">
            {rotatingPhrases.map((phrase, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-700 ease-in-out ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    fontSize: 'clamp(2rem, 6vw, 3rem)',
                    fontWeight: '300',
                    color: '#c9b5d0',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {phrase}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: '200ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: '400ms' }}></div>
        </div>
      </div>
    </section>
  );
}
