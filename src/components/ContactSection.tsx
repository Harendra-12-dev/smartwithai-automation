import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 px-6 relative">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to{" "}
            <span className="text-gradient">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't let another opportunity slip away. Get your custom AI agent solution
            and start converting every conversation into revenue.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
          {/* WhatsApp Contact */}
          <div className="card-premium p-8 rounded-2xl text-center group hover:scale-105 transition-all duration-500 glow">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              WhatsApp Direct
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Get instant answers and start planning your AI solution
            </p>
            <a 
              href="https://wa.me/916376424102" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="btn-hero group w-full">
                Chat Now: +91 6376424102
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          {/* Email Contact */}
          <div className="card-premium p-8 rounded-2xl text-center group hover:scale-105 transition-all duration-500 glow">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Email Consultation
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Send us your requirements for a detailed proposal
            </p>
            <a 
              href="mailto:Smartwithai85@gmail.com" 
              className="inline-block"
            >
              <Button variant="outline" className="btn-secondary w-full group">
                Smartwithai85@gmail.com
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>

        {/* Urgency Section */}
        <div className="text-center bg-gradient-to-r from-destructive/10 to-primary/10 rounded-3xl p-12 border border-primary/20 mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            ⚡ Limited Time: Free AI Strategy Session
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're only taking 10 new clients this month. Book your free consultation
            and discover exactly how AI agents can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/916376424102?text=I%20want%20my%20free%20AI%20strategy%20session" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="btn-hero group text-lg px-8 py-4">
                Book Free Strategy Session
                <Phone className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </a>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex items-center justify-center">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse mr-3" />
            <span className="text-muted-foreground">24/7 Support Included</span>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse mr-3" />
            <span className="text-muted-foreground">Custom AI Training</span>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse mr-3" />
            <span className="text-muted-foreground">ROI Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;