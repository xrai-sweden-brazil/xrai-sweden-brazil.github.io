
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Animation starts after component mounts
    const lines = svgRef.current?.querySelectorAll('.connect-line');
    lines?.forEach(line => {
      line.classList.add('animate-connect-dots');
    });
  }, []);

  return (
    <section 
      id="home"
      className="relative h-[70vh] min-h-[600px] w-full flex flex-col items-center justify-center bg-hero-gradient overflow-hidden pt-16"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-sweden/10 rounded-full filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-brazil/10 rounded-full filter blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 animate-fade-in-up">
          XR-AI Bridges: Sweden-Brazil
        </h1>
        <p className="text-lg md:text-xl text-center max-w-2xl mb-12 text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          A research collaboration network exploring the frontiers of Extended Reality and Artificial Intelligence
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-auto gap-16 md:gap-32 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative flex flex-col items-center animate-float">
            <div className="w-32 h-32 overflow-hidden rounded-full shadow-lg border-4 border-white dark:border-gray-800">
              <div className="w-full h-full bg-sweden"></div>
            </div>
            <span className="mt-4 font-medium text-lg">Sweden</span>
          </div>

          <svg ref={svgRef} className="w-32 h-20 hidden md:block" viewBox="0 0 200 80" fill="none">
            <path className="connect-line" d="M0,40 C70,10 130,70 200,40" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
            <path className="connect-line" d="M200,40 C130,10 70,70 0,40" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" strokeDashoffset="-20" />
          </svg>

          <div className="relative flex flex-col items-center animate-float" style={{ animationDelay: '1s' }}>
            <div className="w-32 h-32 overflow-hidden rounded-full shadow-lg border-4 border-white dark:border-gray-800">
              <div className="w-full h-full bg-brazil"></div>
            </div>
            <span className="mt-4 font-medium text-lg">Brazil</span>
          </div>
        </div>

        <Button size="lg" className="mt-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <span>Meet the Research Network</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
