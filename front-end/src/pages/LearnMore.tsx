import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Sun, Battery, TrendingDown, Zap, Shield, Leaf, DollarSign, TrendingUp, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { SunGearLogo } from "@/components/SunGearLogo";

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-background pointer-events-none" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto max-w-4xl relative z-10">
          <Link to="/">
            <Button variant="ghost" className="mb-8 hover:text-primary transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center mb-6 relative">
              <SunGearLogo className="h-20 w-20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Learn More About Our Mission
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Understanding the solar solution and our innovative technology
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-16">

            {/* The Challenge */}
            <section className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Card className="p-8 border-2 hover:border-destructive/50 transition-all hover:shadow-lg group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-destructive/10 rounded-full group-hover:scale-110 transition-transform">
                    <TrendingDown className="h-8 w-8 text-destructive" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">The Challenge We Face</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Electricity costs are reaching crisis levels. In areas where data centers are being built,
                  wholesale electricity prices have surged <span className="text-destructive font-semibold">up to 267%
                    higher</span> than they were just five years ago. These massive increases are being passed
                  directly to residential customers.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Regions like Baltimore, Maryland are experiencing the impact firsthand. Families report bills
                  they can no longer afford, with many struggling to understand why their costs have increased
                  so dramatically. As tech companies build more AI and cloud computing infrastructure, the strain
                  on local power grids intensifies.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This isn't sustainable. Communities deserve energy solutions that are reliable, affordable,
                  and don't force them to compete with massive data centers for power resources.
                </p>
              </Card>
            </section>

            {/* Why Solar */}
            <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card className="p-8 border-2 border-primary/50 hover:border-primary hover:shadow-[var(--shadow-glow)] transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Sun className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Why Solar Energy?</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-accent/30 p-6 rounded-lg hover:shadow-md transition-all hover:-translate-y-1">
                    <DollarSign className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Cost Savings</h3>
                    <p className="text-muted-foreground">
                      Reduce electricity bills by 50-90%. Most systems pay for themselves within 7-10 years.
                    </p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg hover:shadow-md transition-all hover:-translate-y-1">
                    <Shield className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Energy Independence</h3>
                    <p className="text-muted-foreground">
                      Generate clean energy and reduce grid reliance. Power your home during outages.
                    </p>
                  </div>
                  <div className="bg-accent/30 p-6 rounded-lg hover:shadow-md transition-all hover:-translate-y-1">
                    <Leaf className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Environmental Impact</h3>
                    <p className="text-muted-foreground">
                      Zero emissions. Offset 3-4 tons of CO₂ annually – like planting 100 trees.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            {/* Middleman Issue */}
            <section className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Card className="p-8 border-2 border-secondary/50 hover:shadow-[var(--shadow-panel)] transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-secondary/10 rounded-full">
                    <Battery className="h-8 w-8 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Cutting Out the Middleman</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Many solar companies add 20-30% markups to installations, making this life-changing
                  technology unnecessarily expensive. These middleman costs create a significant barrier
                  to adoption, especially for families who need affordable energy solutions most.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We're working to eliminate these unnecessary markups by providing direct-to-consumer
                  education and resources. By cutting out the middleman, we can make solar energy
                  accessible and affordable for everyone in our community.
                </p>
                <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-6 rounded-lg border border-border">
                  <p className="font-semibold text-lg mb-4 text-foreground">Our Approach:</p>
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start">
                      <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></div>
                      <span className="text-muted-foreground">Educate the community on direct installation options</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></div>
                      <span className="text-muted-foreground">Connect families with transparent, fair-priced solar solutions</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></div>
                      <span className="text-muted-foreground">Provide resources to understand true installation costs</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </section>

            {/* Innovation */}
            <section className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Card className="p-8 border-2 border-primary/50 bg-gradient-to-br from-accent/30 via-accent/10 to-background hover:shadow-[var(--shadow-glow)] transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <SunGearLogo className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Our Innovation: Sun-Tracking Solar Panel</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We've developed a revolutionary sun-tracking solar panel system that automatically
                  follows the sun's path throughout the day. This innovation can increase energy
                  output by <span className="text-primary font-semibold">up to 40%</span> compared to fixed solar panels.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all hover:-translate-y-1 group">
                    <Zap className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Smart Tracking</h3>
                    <p className="text-muted-foreground">
                      Our system uses sensors and motors to automatically adjust panel angle and
                      orientation for optimal sun exposure all day long.
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border hover:border-secondary/50 transition-all hover:-translate-y-1 group">
                    <Battery className="h-10 w-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Maximum Efficiency</h3>
                    <p className="text-muted-foreground">
                      By maintaining optimal angles, our panels capture significantly more energy,
                      reducing payback time and maximizing your investment.
                    </p>
                  </div>
                </div>
              </Card>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Link to="/">
              <Button size="lg" className="bg-primary text-primary-foreground hover:shadow-[var(--shadow-glow)] hover:bg-primary/90 transition-all text-lg px-8 py-6">
                Have Questions? Chat With Us
                <Zap className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
