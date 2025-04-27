
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
              This project is funded by Riksbankens Jubileumsfond (RJ) under the RJ Research initiation program 
              aiming to facilitate initial scholarly processes and help define and delimit various scholarly 
              questions for future research.
            </p>
            
            <div className="flex justify-center mb-8">
              <div className="h-16 w-32 bg-muted rounded flex items-center justify-center text-muted-foreground">
                Logo Placeholder
              </div>
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>&copy; {currentYear} XR-AI Bridges: Sweden-Brazil Research Network. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
