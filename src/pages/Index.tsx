
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EventBanner from "@/components/EventBanner";
import ResearchTeam from "@/components/ResearchTeam";
import ResearchArea from "@/components/ResearchArea";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <EventBanner />
        <ResearchTeam />
        <ResearchArea />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
