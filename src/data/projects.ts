export type ProjectId = "reservas" | "checkinhub" | "odontosystem" | "vetagenda" | "scheduling";
export type Project = {
  id: ProjectId;
  title: string;
  technologies: string[];
  highlights: string[];
  backendUrl: string;
  frontendUrl: string;
  liveUrl?: string;
  clientProject?: boolean;
  layout: string;
};

export const projects: Project[] = [
  {
    id: "reservas", title: "Reservas", clientProject: true, layout: "lg:col-span-7",
    technologies: ["Java 21", "Spring Boot", "PostgreSQL", "Spring Security", "JWT", "Flyway", "Docker"],
    highlights: ["Controle de conflitos de horário", "Acesso do cliente por código UUID", "Painel administrativo", "Confirmação manual via WhatsApp"],
    backendUrl: "https://github.com/mendesx5/reservas-api", frontendUrl: "https://github.com/mendesx5/reservas-web", liveUrl: "https://reservas-web-delta.vercel.app",
  },
  {
    id: "checkinhub", title: "CheckInHub", layout: "lg:col-span-5",
    technologies: ["Java 21", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "Flyway", "JUnit 5", "Mockito", "Docker", "React", "TypeScript"],
    highlights: ["QR Code único por inscrição", "Papéis de organizador, participante e porteiro", "Scanner via câmera", "PWA instalável"],
    backendUrl: "https://github.com/mendesx5/CheckInHub-api", frontendUrl: "https://github.com/mendesx5/CheckInHub-web", liveUrl: "https://check-in-hub-web.vercel.app",
  },
  {
    id: "odontosystem", title: "OdontoSystem", layout: "lg:col-span-6",
    technologies: ["Java 21", "Spring Boot", "PostgreSQL", "JWT", "AWS S3", "Testcontainers", "Docker", "React", "TypeScript"],
    highlights: ["Perfis de acesso", "Conflitos de agendamento", "Prontuários e odontograma", "Arquivos clínicos no AWS S3"],
    backendUrl: "https://github.com/mendesx5/odonto-system-api", frontendUrl: "https://github.com/mendesx5/odonto-system-web",
  },
  {
    id: "vetagenda", title: "VetAgenda", layout: "lg:col-span-6",
    technologies: ["Java 21", "Spring Boot", "PostgreSQL", "JWT", "Docker", "Swagger/OpenAPI", "React"],
    highlights: ["Gestão de tutores e animais", "Controle de acesso por perfil", "Prevenção de conflitos", "Fluxo de status de agendamentos"],
    backendUrl: "https://github.com/mendesx5/VetAgenda-api", frontendUrl: "https://github.com/mendesx5/VetAgenda-Frontend",
  },
  {
    id: "scheduling", title: "Scheduling Platform", layout: "lg:col-span-12",
    technologies: ["Java 21", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "Flyway", "Docker", "React", "TypeScript"],
    highlights: ["Arquitetura multi-tenant", "Página pública por identificador", "Onboarding de assinantes", "Modelos de precificação configuráveis"],
    backendUrl: "https://github.com/mendesx5/scheduling-platform-api", frontendUrl: "https://github.com/mendesx5/scheduling-platform-web", liveUrl: "https://scheduling-platform-web-amber.vercel.app",
  },
];
