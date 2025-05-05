
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <Separator className="mb-8" />
        
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <p className="text-sm text-muted-foreground mb-6">
              This research network is funded by Riksbankens Jubileumsfond (RJ) under the{" "}
              <a 
                href="https://www.rj.se/en/research/RJ-research-initiation/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline transition-colors"
              >
                RJ Research initiation program
              </a>{" "}
              aiming to facilitate initial scholarly processes and help define and delimit various scholarly 
              questions for future research.
            </p>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>&copy; {currentYear} Sweden-Brazil XR & AI Research Network. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
