
import { Card, CardContent } from "@/components/ui/card";
import { Glasses, Brain, MousePointerClick } from "lucide-react";

interface ResearchAreaProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ResearchAreaCard = ({ title, description, icon, delay }: ResearchAreaProps) => {
  return (
    <Card 
      className="card-hover glass-card rounded-xl overflow-hidden opacity-0 animate-fade-in-up h-full flex flex-col"
      style={{ animationDelay: `${delay}s` }}
    >
      <CardContent className="p-6 pt-8 flex-grow">
        <div className="mb-4 flex justify-center">
          <div className="p-3 rounded-full bg-primary/10 text-primary">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
        <p className="text-muted-foreground text-center">{description}</p>
      </CardContent>
    </Card>
  );
};

export default function ResearchArea() {
  const areas = [
    {
      title: "Extended Reality (XR)",
      description: "Exploring virtual, augmented, and mixed reality technologies for immersive experiences.",
      icon: <Glasses className="h-8 w-8" />,
    },
    {
      title: "Artificial Intelligence",
      description: "Developing advanced AI systems for practical use and research, with a particular emphasis on XR.",
      icon: <Brain className="h-8 w-8" />,
    },
    {
      title: "Human-Computer Interaction",
      description: "Exploring user experience, interaction design, and emerging technologies for research and practical application.",
      icon: <MousePointerClick className="h-8 w-8" />,
    },
  ];

  return (
    <section id="research" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-3">Research Areas</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Our collaborative network focuses on these key research domains
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {areas.map((area, index) => (
            <ResearchAreaCard
              key={index}
              title={area.title}
              description={area.description}
              icon={area.icon}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
