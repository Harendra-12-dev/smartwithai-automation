import { ArrowDown, Brain, MessageSquare, Phone, Sparkles } from "lucide-react";

const BridgeSection = () => {
  const steps = [
    {
      number: "01",
      title: "AI Voice Agent",
      description: "Intelligent phone conversations that sound human, handle objections, and book appointments",
      icon: <Phone className="h-8 w-8 text-primary" />
    },
    {
      number: "02", 
      title: "AI Chat Agent",
      description: "Website visitors engaged instantly with personalized conversations that convert",
      icon: <MessageSquare className="h-8 w-8 text-secondary" />
    },
    {
      number: "03",
      title: "Smart Integration",
      description: "Seamlessly connects to your CRM, calendar, and existing systems",
      icon: <Brain className="h-8 w-8 text-accent" />
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Smart With AI</span> Is Your Bridge
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From struggling with missed opportunities to dominating your market—
            here's exactly how we transform your business:
          </p>
        </div>

        {/* Bridge Visual */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          {/* Current State */}
          <div className="flex-1 text-center lg:text-right">
            <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-destructive mb-4">Your Current State</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Missed calls = Lost revenue</li>
                <li>• Slow response times</li>
                <li>• Limited business hours</li>
                <li>• Manual, inefficient processes</li>
                <li>• Frustrated customers</li>
              </ul>
            </div>
          </div>

          {/* Bridge Arrow */}
          <div className="flex-shrink-0">
            <div className="relative">
              <ArrowDown className="h-12 w-12 text-primary transform rotate-90 hidden lg:block" />
              <ArrowDown className="h-12 w-12 text-primary lg:hidden" />
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-primary/20 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Desired State */}
          <div className="flex-1 text-center lg:text-left">
            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-accent mb-4">Your Success State</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Every call answered instantly</li>
                <li>• 3x higher conversion rates</li>
                <li>• 24/7 revenue generation</li>
                <li>• Automated customer delight</li>
                <li>• Market leadership position</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Solution Steps */}
        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative card-premium p-8 rounded-2xl text-center group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
              </div>

              <div className="pt-6">
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
            <Sparkles className="h-5 w-5 text-primary mr-3" />
            <span className="text-primary font-semibold">Ready to bridge the gap?</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BridgeSection;