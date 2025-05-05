
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section 
      id="home"
      className="relative h-[60vh] min-h-[500px] w-full flex flex-col items-center justify-center overflow-hidden pt-16"
      style={{
        backgroundImage: 'url("/lovable-uploads/f8dc8783-aa72-4e58-9b82-602c9a47cb6b.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
      
      <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 animate-fade-in-up text-white">
          Sweden-Brazil XR & AI Research Network
        </h1>
        <p className="text-lg md:text-xl text-center max-w-2xl mb-8 text-white/90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Bringing together researchers, practitioners, and innovators from Sweden and Brazil, and strengthening ties with a broader international community, to advance the frontiers of Extended Reality and Artificial Intelligence.
        </p>

        <Button 
          size="lg" 
          className="mt-2 animate-fade-in-up" 
          style={{ animationDelay: '0.4s' }}
          onClick={() => {
            const teamSection = document.getElementById('team');
            if (teamSection) {
              teamSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <span>Meet the Team</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
