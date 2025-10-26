import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Users, Lightbulb, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";
import { SunGearLogo } from "@/components/SunGearLogo";
import Chat from "@/components/Chat";

const Index = () => {
  const scrollToChat = () => {
    const chatSection = document.getElementById('chat-section');
    chatSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-background pointer-events-none" />

        {/* Animated glow effects */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-gradient-conic from-primary/10 via-transparent to-transparent animate-[spin_40s_linear_infinite]" />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <SunGearLogo className="h-24 w-24 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl animate-pulse" />
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in">
            HELIOS
          </h1>

          <p className="text-2xl md:text-3xl text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Building a Brighter Future
          </p>

          <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/learn-more">
              <Button size="lg" variant="secondary" className="shadow-[var(--shadow-panel)] hover:shadow-lg transition-all">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              onClick={scrollToChat}
              className="bg-primary text-primary-foreground hover:shadow-[var(--shadow-glow)] hover:bg-primary/90 transition-all"
            >
              Chat w/ Us
              <Zap className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="p-8 border-2 hover:border-destructive/50 transition-all hover:shadow-lg group">
              <div className="flex items-center gap-3 mb-4">
                <TrendingDown className="h-8 w-8 text-destructive" />
                <h2 className="text-3xl font-bold text-foreground">The Problem</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Electricity costs are skyrocketing, especially in areas with data centers. In regions like Baltimore,
                wholesale electricity now costs <span className="text-destructive font-semibold">up to 267% more</span> than
                it did five years ago - and those costs are being passed directly to residential customers.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Meanwhile, many solar companies add 20-30% middleman markups, making clean energy solutions
                even less accessible when families need them most.
              </p>
            </Card>

            <Card className="p-8 border-2 border-primary/50 hover:border-primary transition-all hover:shadow-[var(--shadow-glow)] group">
              <div className="flex items-center gap-3 mb-4">
                <SunGearLogo className="h-8 w-8" />
                <h2 className="text-3xl font-bold text-foreground">The Solution</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Direct-to-consumer education on alternative energy solutions, cutting out middleman markups,
                and innovative technology like our sun-tracking solar panel that maximizes energy output.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center hover:shadow-[var(--shadow-panel)] transition-all hover:-translate-y-1 group">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-accent rounded-full group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Accessibility</h3>
              <p className="text-muted-foreground">
                Making solar energy solutions available and affordable for everyone in our community.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-[var(--shadow-panel)] transition-all hover:-translate-y-1 group">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-accent rounded-full group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Equality</h3>
              <p className="text-muted-foreground">
                Ensuring all families have equal access to clean, reliable, and affordable energy.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-[var(--shadow-panel)] transition-all hover:-translate-y-1 group">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-accent rounded-full group-hover:scale-110 transition-transform">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Innovation</h3>
              <p className="text-muted-foreground">
                Pioneering new technologies like our sun-tracking solar panel to maximize efficiency.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Chat Section */}
      <section id="chat-section" className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Chat With Us</h2>
            <p className="text-lg text-muted-foreground">
              Ask our AI assistant anything about solar energy, our project, or how you can get involved.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Chat />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
