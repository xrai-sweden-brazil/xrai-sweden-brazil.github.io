
import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EventBanner() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto">
        <div className="glass-card rounded-xl p-8 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join us at ACM IMX'25</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto md:mx-0">
              Our research network event will be co-located with The ACM International Conference on Interactive Media Experiences (IMX).
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 text-sm mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Rio de Janeiro, Brazil</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span>June 2025</span>
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => window.open("https://imx.acm.org/2025", "_blank")}
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
