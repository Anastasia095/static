import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { SunGearLogo } from "./SunGearLogo";

export const Navigation = () => {
  const scrollToChat = () => {
    const chatSection = document.getElementById('chat-section');
    chatSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md border-b border-border/50 shadow-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <SunGearLogo className="h-10 w-10 text-secondary" />
            <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            HELIOS
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/learn-more">
            <Button variant="ghost" className="font-medium text-foreground hover:text-primary transition-colors">
              Learn More
            </Button>
          </Link>
          <Link to="/meet-the-team">
            <Button variant="ghost" className="font-medium text-foreground hover:text-primary transition-colors">
              Meet the Team
            </Button>
          </Link>
          <Button 
            onClick={scrollToChat}
            className="bg-primary text-primary-foreground font-medium hover:shadow-[var(--shadow-glow)] hover:bg-primary/90 transition-all"
          >
            Chat w/ Us
          </Button>
        </div>
      </div>
    </nav>
  );
};
