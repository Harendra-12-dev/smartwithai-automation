import { ArrowRight, CheckCircle, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const VisionSection = () => {
  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Instant Response",
      description: "Every inquiry answered in under 10 seconds, 24/7/365"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: "3x More Conversions",
      description: "Convert more leads with intelligent, personalized conversations"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-accent" />,
      title: "Never Miss a Deal",
      description: "Capture every opportunity while your competitors sleep"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Imagine Your Business{" "}
            <span className="text-gradient">Dominating</span> the Market
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Picture this: Your competitors struggle with missed calls while your AI agents
            convert every inquiry into revenue. This is your future with Smart With AI.
          </p>
        </div>

        {/* Vision Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card-premium p-8 rounded-2xl text-center group hover:scale-105 transition-all duration-500 glow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Success Story Preview */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12 border border-primary/20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            "Our Revenue Increased by{" "}
            <span className="text-gradient">300%</span> in 60 Days"
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            "Smart With AI transformed our customer engagement. We now capture leads 24/7,
            convert faster, and our customers love the instant, intelligent responses."
          </p>
          <div className="flex items-center justify-center text-accent font-semibold text-lg">
            <CheckCircle className="h-6 w-6 mr-2" />
            Join 500+ businesses already dominating their market
          </div>
        </div>

        {/* Vision CTA */}
        <div className="text-center mt-16">
          <Button className="btn-hero group text-xl px-12 py-6">
            Make This Your Reality
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;