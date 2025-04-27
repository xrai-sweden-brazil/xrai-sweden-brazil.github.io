
import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EventBanner() {
  return (
    <section className="py-8 bg-primary/5">
      <div className="container mx-auto">
        <div className="glass-card rounded-xl p-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-bold mb-2">Join us at ACM IMX'25</h2>
            <p className="text-muted-foreground mb-4">
              Our research network will be featured at the Interactive Media Experiences conference
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Rio de Janeiro, Brazil</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span>June 2025</span>
              </div>
            </div>
          </div>
          <Button className="mt-4 md:mt-0" variant="outline" size="sm">
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
}
