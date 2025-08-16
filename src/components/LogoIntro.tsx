import { useEffect, useState } from 'react';

interface LogoIntroProps {
  onComplete: () => void;
}

const LogoIntro = ({ onComplete }: LogoIntroProps) => {
  const [showText, setShowText] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'enter' | 'display' | 'exit'>('enter');

  useEffect(() => {
    const timeline = [
      { delay: 500, action: () => setShowText(true) },
      { delay: 2500, action: () => setAnimationPhase('display') },
      { delay: 3500, action: () => setAnimationPhase('exit') },
      { delay: 4200, action: () => onComplete() }
    ];

    const timeouts = timeline.map(({ delay, action }) =>
      setTimeout(action, delay)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-90" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float3d ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Logo container */}
      <div className="relative z-10 text-center">
        {/* Logo with sophisticated animations */}
        <div 
          className={`mb-8 transition-all duration-1000 ${
            animationPhase === 'enter' 
              ? 'scale-0 opacity-0 rotate-[-180deg]' 
              : animationPhase === 'display'
              ? 'scale-100 opacity-100 rotate-0'
              : 'scale-75 opacity-0 rotate-[180deg]'
          }`}
        >
          <div className="relative glow">
            {/* Glow effect rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-20 animate-pulse scale-150 blur-xl" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-primary to-secondary opacity-15 animate-pulse scale-125 blur-lg animation-delay-500" />
            
            {/* Logo image */}
            <img 
              src="/lovable-uploads/40d3efed-5e94-44e9-90a8-769129dde5f0.png" 
              alt="Smart With AI - Intelligent Brain Logo"
              className="relative w-32 h-32 md:w-40 md:h-40 object-contain mx-auto float-3d"
              style={{
                filter: 'drop-shadow(0 0 30px hsl(var(--primary) / 0.3))',
                animation: animationPhase === 'display' ? 'float3d 4s ease-in-out infinite' : undefined
              }}
            />
          </div>
        </div>

        {/* Animated text */}
        <div 
          className={`transition-all duration-800 delay-500 ${
            showText && animationPhase !== 'exit'
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-2">
            {"SMART WITH AI".split('').map((char, index) => (
              <span
                key={index}
                className="inline-block"
                style={{
                  animation: showText ? `fade-in 0.1s ease-out forwards` : undefined,
                  animationDelay: `${index * 0.1}s`,
                  opacity: showText ? 1 : 0
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
          <p className="text-lg text-muted-foreground font-inter">
            AI Voice & Chat Agents
          </p>
        </div>

        {/* Loading indicator */}
        <div 
          className={`mt-12 transition-all duration-500 ${
            animationPhase === 'exit' ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="w-48 h-1 bg-muted rounded-full mx-auto overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-3000 ease-out"
              style={{
                width: animationPhase === 'enter' ? '0%' : animationPhase === 'display' ? '100%' : '100%',
                transform: animationPhase === 'exit' ? 'translateX(100%)' : 'translateX(0%)'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoIntro;