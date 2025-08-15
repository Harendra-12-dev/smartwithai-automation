import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden parallax-section">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-90" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <div className="glow float-3d">
            <img 
              src="/lovable-uploads/8d9afd62-5469-4c37-84f3-2af5ff794621.png" 
              alt="Smart With AI - AI Voice Agent and Chat Agent Services"
              className="w-32 h-32 md:w-48 md:h-48 object-contain"
            />
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          Turn Every{" "}
          <span className="text-gradient">Conversation</span>
          <br />
          into{" "}
          <span className="text-gradient-secondary">Revenue</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          Your business is losing opportunities every hour without intelligent engagement.
          <br />
          <span className="text-foreground font-semibold">Transform missed calls into closed deals</span> with our AI Voice & Chat Agents.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button className="btn-hero group">
            Get My Custom AI Plan
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" className="btn-secondary">
            See How It Works
            <Sparkles className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Urgency Message */}
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse mr-3" />
          <span className="text-accent font-medium">Limited onboarding slots this month</span>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;