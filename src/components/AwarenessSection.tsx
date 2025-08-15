import { AlertTriangle, Clock, TrendingDown, Users } from "lucide-react";

const AwarenessSection = () => {
  const painPoints = [
    {
      icon: <Clock className="h-8 w-8 text-destructive" />,
      title: "Missed Opportunities",
      description: "Every unanswered call is a potential customer walking away to your competitor."
    },
    {
      icon: <TrendingDown className="h-8 w-8 text-destructive" />,
      title: "Delayed Responses",
      description: "72% of customers expect immediate responses. Delays kill conversions."
    },
    {
      icon: <Users className="h-8 w-8 text-destructive" />,
      title: "Customer Frustration",
      description: "Long hold times and unavailable staff create negative brand experiences."
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-destructive" />,
      title: "Revenue Leakage",
      description: "Without 24/7 engagement, you're literally losing money while you sleep."
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Your Business Is{" "}
            <span className="text-destructive">Bleeding</span> Opportunities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every minute your customers can't reach you is money walking out the door.
            Here's what's happening to your business right now:
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="card-premium p-8 rounded-2xl text-center group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {point.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="text-center bg-gradient-to-r from-destructive/10 to-destructive/5 rounded-3xl p-12 border border-destructive/20">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-destructive">
            The Hidden Cost: $50,000+ Lost Revenue Per Month
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most businesses lose 40-60% of potential customers due to poor response times and unavailable support.
            That's not just missed calls—that's missed revenue, missed growth, and missed market share.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AwarenessSection;