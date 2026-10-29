export type ProjectId =
  | "rag-assistant"
  | "checkinhub"
  | "odontosystem"
  | "reservas";

export type Project = {
  id: ProjectId;
  title: string;
  technologies: string[];
  highlights: string[];
  backendUrl: string;
  frontendUrl?: string;
  liveUrl?: string;
  clientProject?: boolean;
  inProgress?: boolean;
  layout: string;
};

export const projects: Project[] = [
  {
    id: "rag-assistant",
    title: "Assistente Corporativo RAG",
    inProgress: true,
    layout: "lg:col-span-12",
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "ChromaDB",
      "Groq API",
      "Java 17",
      "Spring Boot",
      "PostgreSQL",
      "RabbitMQ",
      "Docker",
    ],
    highlights: [
      "Perguntas e respostas restritas ao conteúdo indexado (RAG)",
      "Microsserviço de IA em Python/FastAPI integrado via RabbitMQ",
      "Embeddings, busca semântica em ChromaDB e geração com Llama 3",
      "API Java/Spring Boot como entrada (auth, upload e chat)",
    ],
    backendUrl: "https://github.com/mendesx5/rag-assistant-api",
    frontendUrl: "https://github.com/mendesx5/rag-assistant-ai-service",
  },
  {
    id: "checkinhub",
    title: "CheckInHub",
    layout: "lg:col-span-6",
    technologies: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "Flyway",
      "JUnit 5",
      "Docker Compose",
      "GitHub Actions",
    ],
    highlights: [
      "Inscrição e check-in por QR Code",
      "Prevenção de duplicidade",
      "Autorização por perfis",
      "Migrações Flyway, testes e CI",
    ],
    backendUrl: "https://github.com/mendesx5/CheckInHub-api",
    frontendUrl: "https://github.com/mendesx5/CheckInHub-web",
    liveUrl: "https://check-in-hub-web.vercel.app",
  },
  {
    id: "odontosystem",
    title: "OdontoSystem",
    layout: "lg:col-span-6",
    technologies: [
      "Java 21",
      "Spring Boot 3.5",
      "PostgreSQL",
      "AWS S3",
      "Testcontainers",
      "JWT",
      "Docker",
    ],
    highlights: [
      "API modular para pacientes, agendamentos e prontuários",
      "Acesso por perfis com JWT",
      "Arquivos clínicos no AWS S3",
      "Testes de integração com Testcontainers",
    ],
    backendUrl: "https://github.com/mendesx5/odonto-system-api",
    frontendUrl: "https://github.com/mendesx5/odonto-system-web",
  },
  {
    id: "reservas",
    title: "Reservas",
    clientProject: true,
    layout: "lg:col-span-12",
    technologies: [
      "Java 21",
      "Spring Boot",
      "PostgreSQL",
      "Spring Security",
      "JWT",
      "Flyway",
      "Docker",
    ],
    highlights: [
      "Controle de conflitos de horário",
      "Acesso do cliente por código UUID",
      "Painel administrativo",
      "Confirmação de pagamento via WhatsApp",
    ],
    backendUrl: "https://github.com/mendesx5/reservas-api",
    frontendUrl: "https://github.com/mendesx5/reservas-web",
    liveUrl: "https://reservas-web-delta.vercel.app",
  },
];
