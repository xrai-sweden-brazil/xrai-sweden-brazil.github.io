
import { Card, CardContent } from "@/components/ui/card";

interface TeamMember {
  name: string;
  title: string;
  secondaryTitle?: string;
  affiliation: string;
  email: string;
  imagePath: string;
  isPrincipal?: boolean;
}

function TeamMemberCard({ member, delay }: { member: TeamMember; delay: number }) {
  return (
    <Card 
      className="card-hover rounded-xl overflow-hidden opacity-0 animate-fade-in-up h-full"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="aspect-square bg-muted">
        <img
          src={member.imagePath}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4 text-center">
        <h4 className="font-semibold text-base mb-1">{member.name}</h4>
        <p className="text-sm text-primary">{member.title}</p>
        {member.secondaryTitle && (
          <p className="text-sm text-primary">{member.secondaryTitle}</p>
        )}
        <p className="text-xs text-muted-foreground mt-1 mb-2">{member.affiliation}</p>
        <p className="text-xs flex items-center justify-center gap-1">
          📧 <a 
              href={`mailto:${member.email}`} 
              className="text-primary hover:underline transition-colors"
            >
              {member.email}
            </a>
        </p>
      </CardContent>
    </Card>
  );
}

export default function ResearchTeam() {
  const principalInvestigators: TeamMember[] = [
    {
      name: "Dr. Asreen Rostami",
      title: "Senior Researcher",
      secondaryTitle: "Sweden-Brazil Research Lead and Coordinator",
      affiliation: "RISE Research Institutes of Sweden",
      email: "asreen.rostami@ri.se",
      imagePath: "/images/Asreen_Rostami.jpg",
      isPrincipal: true
    },
    {
      name: "Dr. Donald McMillan",
      title: "Associate Professor",
      secondaryTitle: "Sweden-Brazil Research Lead and Coordinator",
      affiliation: "Department of Computer and Systems Sciences, Stockholm University",
      email: "donald.mcmillan@dsv.su.se",
      imagePath: "/images/McMillan.jpg",
      isPrincipal: true
    },
  ];

  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Andrii Matviienko",
      title: "Assistant Professor",
      affiliation: "KTH Royal Institute of Technology",
      email: "andriim@kth.se",
      imagePath: "/images/andrii-matviienko.jpg",
    },
    {
      name: "Dr. Luis Quintero",
      title: "Assistant Professor",
      affiliation: "Department of Computer and Systems Sciences, Stockholm University",
      email: "luis-eduardo@dsv.su.se",
      imagePath: "/images/Luis.jpg",
    },
    {
      name: "Noak Petersson",
      title: "PhD Candidate",
      affiliation: "Department of Computer and Systems Sciences, Stockholm University",
      email: "noak.petersson@dsv.su.se",
      imagePath: "/images/NoakPhoto.png",
    },
    {
      name: "Negin Soltani",
      title: "Research Assistant",
      affiliation: "RISE Research Institutes of Sweden",
      email: "negin.soltani@ri.se",
      imagePath: "/images/NeginSoltani.JPG",
    },
    {
      name: "Prof. Debora C. Muchaluat Saade",
      title: "Professor",
      affiliation: "Fluminense Federal University",
      email: "debora@midiacom.uff.br",
      imagePath: "/images/Debora.jpg",
    },
    {
      name: "Dr. Heloisa Candello",
      title: "Senior Research Scientist",
      affiliation: "IBM Research Brazil",
      email: "heloisacandello@br.ibm.com",
      imagePath: "/images/Heloisa-Candello.jpg",
    },
    {
      name: "Prof. Pablo Cesar",
      title: "Professor",
      affiliation: "Centrum Wiskunde & Informatica",
      email: "garcia@cwi.nl",
      imagePath: "/images/Pablo_Cesar.jpg",
    },
    {
      name: "Prof. Esteban Clua",
      title: "Director",
      affiliation: "UFF Medialab",
      email: "esteban@ic.uff.br",
      imagePath: "/images/EstebanClua.jpg",
    },
  ];

  return (
    <section id="team" className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-3">Research Team</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Meet our international team of researchers exploring the frontiers of XR and AI
        </p>
        
        <div className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {principalInvestigators.map((member, index) => (
              <TeamMemberCard key={index} member={member} delay={index * 0.1} />
            ))}
          </div>
        </div>
        
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} delay={(index + 2) * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
