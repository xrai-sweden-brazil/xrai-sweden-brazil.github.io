import { Card, CardContent } from "@/components/ui/card";

interface TeamMember {
  name: string;
  title: string;
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
      <div className="aspect-square bg-muted max-h-48">
        <img
          src={member.imagePath}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h4 className="font-semibold text-base mb-1">{member.name}</h4>
        <p className="text-sm text-primary">{member.title}</p>
        <p className="text-xs text-muted-foreground mt-1 mb-2">{member.affiliation}</p>
        <p className="text-xs flex items-center gap-1">
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
      title: "PI – Senior Researcher",
      affiliation: "RISE Research Institutes of Sweden",
      email: "asreen.rostami@ri.se",
      imagePath: "/placeholder.svg",
      isPrincipal: true
    },
    {
      name: "Dr. Donald McMillan",
      title: "Co-PI – Associate Professor",
      affiliation: "Department of Computer and Systems Sciences, Stockholm University",
      email: "donald.mcmillan@dsv.su.se",
      imagePath: "/placeholder.svg",
      isPrincipal: true
    },
  ];

  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Andrii Matviienko",
      title: "Assistant Professor",
      affiliation: "KTH Royal Institute of Technology",
      email: "andriim@kth.se",
      imagePath: "/placeholder.svg",
    },
    {
      name: "Dr. Luis Quintero",
      title: "Assistant Professor",
      affiliation: "Department of Computer and Systems Sciences, Stockholm University",
      email: "luis-eduardo@dsv.su.se",
      imagePath: "/placeholder.svg",
    },
    {
      name: "Noak Petersson",
      title: "PhD Candidate",
      affiliation: "Department of Computer and Systems Sciences, Stockholm University",
      email: "noak.petersson@dsv.su.se",
      imagePath: "/placeholder.svg",
    },
    {
      name: "Negin Soltani",
      title: "Research Assistant",
      affiliation: "RISE Research Institutes of Sweden",
      email: "negin.soltani@ri.se",
      imagePath: "/placeholder.svg",
    },
    {
      name: "Prof. Debora C. Muchaluat Saade",
      title: "Professor",
      affiliation: "Fluminense Federal University",
      email: "Contact via coordinators",
      imagePath: "/placeholder.svg",
    },
    {
      name: "Dr. Heloisa Candello",
      title: "Senior Research Scientist",
      affiliation: "IBM Research Brazil",
      email: "heloisacandello@br.ibm.com",
      imagePath: "/placeholder.svg",
    },
    {
      name: "Prof. Pablo Cesar",
      title: "Professor",
      affiliation: "Centrum Wiskunde & Informatica",
      email: "garcia@cwi.nl",
      imagePath: "/placeholder.svg",
    },
    {
      name: "Dr. Mylene Farias",
      title: "Professor",
      affiliation: "University of Brasilia",
      email: "Contact via coordinators",
      imagePath: "/placeholder.svg",
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
          <h3 className="text-xl font-medium text-center mb-6">Principal Investigators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {principalInvestigators.map((member, index) => (
              <TeamMemberCard key={index} member={member} delay={index * 0.1} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-medium text-center mb-6">Team Members</h3>
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
