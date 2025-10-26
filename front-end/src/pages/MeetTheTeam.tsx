import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";
import leoImage from "@/assets/leo.png";
import pabloImage from "@/assets/pablo.png";
import gabrielImage from "@/assets/gabriel.png";
import anastasiaImage from "@/assets/anastasia.png";

const MeetTheTeam = () => {
  const teamMembers = [
    {
      name: "Gabriel Suarez",
      role: "Co-Founder",
      bio: "Passionate about renewable energy and community empowerment.",
      initials: "GS",
      linkedin: "https://www.linkedin.com/in/gabrielsuarezz/",
      image: gabrielImage
    },
    {
      name: "Pablo Molina",
      role: "Co-Founder",
      bio: "Dedicated to making solar energy accessible to everyone.",
      initials: "PM",
      linkedin: "https://www.linkedin.com/in/pablo-molina-ro/",
      image: pabloImage
    },
    {
      name: "Leo Sadoun",
      role: "Co-Founder",
      bio: "Innovating to bring down energy costs for communities.",
      initials: "LS",
      linkedin: "https://www.linkedin.com/in/leo-sadoun/",
      image: leoImage
    },
    {
      name: "Anastasia Tarasenko",
      role: "Co-Founder",
      bio: "Committed to sustainable energy solutions and education.",
      initials: "AT",
      linkedin: "https://www.linkedin.com/in/anastasia-tarasenko-382293172/",
      image: anastasiaImage
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-background pointer-events-none" />
        
        {/* Animated glow effects */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Meet the Team
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're a team of four passionate students who came together for a hackathon and discovered a shared mission: 
              to educate our communities and transform the energy industry. What started as a project has become our commitment 
              to making sustainable energy accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 transition-all hover:shadow-[var(--shadow-glow)] group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <Avatar className="h-48 w-48 border-4 border-primary/20 group-hover:border-primary/40 transition-all">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-accent text-3xl font-bold text-primary">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl group-hover:blur-2xl transition-all" />
                  </div>

                  <h3 className="text-2xl font-bold mb-1 text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/50 text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="p-8 max-w-2xl mx-auto bg-accent/30 border-2 border-primary/30">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Born from a hackathon, fueled by passion. We're committed to cutting out the middleman, 
                bringing transparency to the solar industry, and empowering communities with the knowledge 
                and tools they need to access affordable, sustainable energy.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeetTheTeam;
