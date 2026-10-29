export type Locale = "pt" | "en" | "es";
export const localeNames = { pt: "Português", en: "English", es: "Español" } as const;

const techGroups = [
  ["Backend", ["Java 17/21", "Python", "Spring Boot", "FastAPI", "Spring Security", "REST APIs", "JWT"]],
  ["IA e LLMs", ["RAG", "LangChain", "Embeddings", "ChromaDB", "Engenharia de prompt", "Groq / Llama 3"]],
  ["Dados", ["PostgreSQL", "SQL", "Flyway", "RabbitMQ"]],
  ["Qualidade", ["JUnit 5", "Testcontainers", "Clean Code", "SOLID"]],
  ["DevOps", ["Docker", "Git", "GitHub Actions", "Maven"]],
  ["Cloud", ["AWS (Fundamentos)", "AWS S3"]],
] as const;

export const translations = {
  pt: {
    nav: ["Início", "Sobre", "Projetos", "Habilidades", "Experiência", "Contato"],
    actions: {
      talk: "Entrar em contato",
      projects: "Ver projetos",
      cv: "Baixar currículo",
      open: "Ver projeto",
      backend: "Repositório backend",
      frontend: "Repositório IA / frontend",
      live: "Ver aplicação",
      close: "Fechar",
      top: "Voltar ao topo",
      menu: "Abrir menu",
      theme: "Alternar tema",
      language: "Selecionar idioma",
      send: "Enviar mensagem",
    },
    hero: {
      overline: "DESENVOLVEDOR BACKEND E IA",
      title: "Construindo backend e IA aplicada — em busca da primeira vaga júnior.",
      text: "Estudante de Ciência da Computação e desenvolvedor backend júnior. Trabalho com Java/Spring Boot, Python/FastAPI, APIs REST, PostgreSQL, Docker e um sistema distribuído de RAG com LangChain e microsserviços.",
      available: "Buscando Desenvolvedor Backend Júnior ou Engenheiro de IA Júnior",
      specialty: "Backend",
      capacity: "IA aplicada",
      photo: "Foto de José Gabriel Mendes",
      placeholder: "Adicione profile-1.webp e profile-2.webp",
    },
    about: {
      label: "Sobre",
      title: "Quem eu sou",
      text: [
        "Sou José Gabriel, estudante de Ciência da Computação (2º período, UnP) e desenvolvedor backend júnior com interesse forte em IA aplicada.",
        "Tenho construído APIs REST com autenticação JWT, PostgreSQL, testes, Docker e CI/CD. Meu projeto principal em andamento é um assistente corporativo com RAG: API em Java/Spring Boot integrada a um microsserviço Python/FastAPI via RabbitMQ, com embeddings, ChromaDB e geração via Llama 3 (Groq).",
        "Atuo como Analista de Suporte e TI júnior em ambiente corporativo e busco minha primeira vaga como Desenvolvedor Backend Júnior ou Engenheiro de IA Júnior.",
      ],
      flow: ["APIs REST", "Microsserviços", "RAG / LLMs", "Testes", "Docker", "CI/CD"],
    },
    projects: {
      label: "Projetos",
      title: "Projetos que demonstram o que sei fazer",
      intro: "Sistemas e APIs que desenvolvi para praticar backend, IA e boas práticas de engenharia.",
      client: "Cliente real",
      inProgress: "Em desenvolvimento",
      screenshot: "Screenshot em preparação",
      technologies: "Tecnologias",
      highlights: "O que implementei",
      desc: {
        "rag-assistant": [
          "IA • RAG • Microsserviços",
          "Sistema distribuído de perguntas e respostas sobre documentos. API Java/Spring Boot + microsserviço Python/FastAPI com LangChain, ChromaDB e Llama 3 (Groq), integrados via RabbitMQ.",
        ],
        checkinhub: [
          "Eventos • QR Code • Segurança",
          "Inscrição e check-in por QR Code, autorização por perfis, Flyway, testes e CI com GitHub Actions.",
        ],
        odontosystem: [
          "Gestão • JWT • AWS S3",
          "API modular para pacientes, agendamentos e prontuários, com perfis JWT, arquivos no S3 e testes de integração.",
        ],
        reservas: [
          "Reservas • Regras de negócio",
          "Reservas de espaços para eventos, controle de conflitos de horário e confirmação de pagamento via WhatsApp.",
        ],
      },
    },
    skills: {
      label: "Habilidades",
      title: "Tecnologias e ferramentas",
      intro: "Stack que uso nos projetos e estudo continuamente.",
      groups: techGroups,
    },
    experience: {
      label: "Experiência",
      title: "Trajetória",
      items: [
        [
          "Analista de Suporte Júnior & Analista de TI Júnior",
          "Super MegaVendas",
          "Set/2026 — Atual",
          "Suporte a sistemas internos, registro de incidentes, comunicação com equipes e clientes, e suporte à infraestrutura e redes.",
          "Suporte • Sistemas internos • Infraestrutura",
        ],
        [
          "Projetos de estudo e prática",
          "Pessoais e cliente real",
          "2025 — Atual",
          "APIs e sistemas com Java/Spring Boot; sistema distribuído de RAG (Java + Python); API de reservas para cliente real.",
          "Spring Boot • FastAPI • RAG • RabbitMQ • Docker • CI/CD",
        ],
      ],
    },
    education: {
      title: "Formação e cursos",
      items: [
        ["Bacharelado em Ciência da Computação", "Universidade Potiguar (UnP) — Natal/RN", "2º período, em andamento"],
        ["AWS Cloud Practitioner Essentials", "AWS Skill Builder", "Em andamento"],
        ["Programação Orientada a Objetos com Java", "Udemy", "Concluído"],
      ],
    },
    contact: {
      label: "Contato",
      title: "Vamos conversar",
      text: "Aberto a oportunidades de Desenvolvedor Backend Júnior ou Engenheiro de IA Júnior. Currículo, LinkedIn, GitHub e Instagram abaixo.",
      fields: ["Nome", "Email", "Empresa / Contexto", "Mensagem"],
      note: "O formulário abre seu e-mail. Também: bielmendes2208@gmail.com",
    },
    footer: {
      role: "Desenvolvedor Backend e IA",
      phrase: "Portfólio para a primeira vaga júnior.",
      rights: "© 2026 José Gabriel da Silva Mendes",
    },
  },
  en: {
    nav: ["Home", "About", "Projects", "Skills", "Experience", "Contact"],
    actions: {
      talk: "Get in touch",
      projects: "View projects",
      cv: "Download resume",
      open: "View project",
      backend: "Backend repository",
      frontend: "AI / frontend repository",
      live: "Live app",
      close: "Close",
      top: "Back to top",
      menu: "Open menu",
      theme: "Toggle theme",
      language: "Select language",
      send: "Send message",
    },
    hero: {
      overline: "BACKEND & AI DEVELOPER",
      title: "Building backend and applied AI — looking for my first junior role.",
      text: "Computer Science student and junior backend developer. I work with Java/Spring Boot, Python/FastAPI, REST APIs, PostgreSQL, Docker, and a distributed RAG system with LangChain and microservices.",
      available: "Seeking Junior Backend Developer or Junior AI Engineer roles",
      specialty: "Backend",
      capacity: "Applied AI",
      photo: "Photo of José Gabriel Mendes",
      placeholder: "Add profile-1.webp and profile-2.webp",
    },
    about: {
      label: "About",
      title: "Who I am",
      text: [
        "I'm José Gabriel, a Computer Science student (2nd semester, UnP) and junior backend developer with a strong interest in applied AI.",
        "I've built REST APIs with JWT auth, PostgreSQL, tests, Docker and CI/CD. My main project in progress is a corporate RAG assistant: a Java/Spring Boot API integrated with a Python/FastAPI microservice via RabbitMQ, using embeddings, ChromaDB and Llama 3 (Groq).",
        "I work as a junior Support and IT analyst in a corporate environment and I'm looking for my first role as Junior Backend Developer or Junior AI Engineer.",
      ],
      flow: ["REST APIs", "Microservices", "RAG / LLMs", "Tests", "Docker", "CI/CD"],
    },
    projects: {
      label: "Projects",
      title: "Projects that show what I can do",
      intro: "Systems and APIs I built to practice backend, AI and solid engineering habits.",
      client: "Real client",
      inProgress: "In progress",
      screenshot: "Screenshot coming soon",
      technologies: "Technologies",
      highlights: "What I implemented",
      desc: {
        "rag-assistant": [
          "AI • RAG • Microservices",
          "Distributed Q&A over documents. Java/Spring Boot API + Python/FastAPI microservice with LangChain, ChromaDB and Llama 3 (Groq), via RabbitMQ.",
        ],
        checkinhub: [
          "Events • QR Code • Security",
          "Registration and QR Code check-in, role-based access, Flyway, tests and CI with GitHub Actions.",
        ],
        odontosystem: [
          "Management • JWT • AWS S3",
          "Modular API for patients, appointments and records, JWT roles, S3 files and integration tests.",
        ],
        reservas: [
          "Bookings • Business rules",
          "Event space bookings, schedule conflict control and payment confirmation via WhatsApp.",
        ],
      },
    },
    skills: {
      label: "Skills",
      title: "Technologies and tools",
      intro: "Stack I use in projects and keep learning.",
      groups: techGroups,
    },
    experience: {
      label: "Experience",
      title: "Path",
      items: [
        [
          "Junior Support Analyst & Junior IT Analyst",
          "Super MegaVendas",
          "Sep/2026 — Present",
          "Support for internal systems, incident logging, communication with teams and clients, and infrastructure/network support.",
          "Support • Internal systems • Infrastructure",
        ],
        [
          "Study and practice projects",
          "Personal and real client",
          "2025 — Present",
          "APIs and systems with Java/Spring Boot; distributed RAG system (Java + Python); bookings API for a real client.",
          "Spring Boot • FastAPI • RAG • RabbitMQ • Docker • CI/CD",
        ],
      ],
    },
    education: {
      title: "Education and courses",
      items: [
        ["Bachelor's in Computer Science", "Universidade Potiguar (UnP) — Natal/RN", "2nd semester, in progress"],
        ["AWS Cloud Practitioner Essentials", "AWS Skill Builder", "In progress"],
        ["Object-Oriented Programming with Java", "Udemy", "Completed"],
      ],
    },
    contact: {
      label: "Contact",
      title: "Let's talk",
      text: "Open to Junior Backend Developer or Junior AI Engineer opportunities. Resume, LinkedIn, GitHub and Instagram below.",
      fields: ["Name", "Email", "Company / Context", "Message"],
      note: "The form opens your email app. Also: bielmendes2208@gmail.com",
    },
    footer: {
      role: "Backend & AI Developer",
      phrase: "Portfolio for the first junior role.",
      rights: "© 2026 José Gabriel da Silva Mendes",
    },
  },
  es: {
    nav: ["Inicio", "Sobre", "Proyectos", "Habilidades", "Experiencia", "Contacto"],
    actions: {
      talk: "Contactar",
      projects: "Ver proyectos",
      cv: "Descargar currículum",
      open: "Ver proyecto",
      backend: "Repositorio backend",
      frontend: "Repositorio IA / frontend",
      live: "Ver aplicación",
      close: "Cerrar",
      top: "Volver arriba",
      menu: "Abrir menú",
      theme: "Cambiar tema",
      language: "Seleccionar idioma",
      send: "Enviar mensaje",
    },
    hero: {
      overline: "DESARROLLADOR BACKEND E IA",
      title: "Construyendo backend e IA aplicada — buscando el primer puesto junior.",
      text: "Estudiante de Ciencias de la Computación y desarrollador backend junior. Trabajo con Java/Spring Boot, Python/FastAPI, APIs REST, PostgreSQL, Docker y un sistema distribuido de RAG con LangChain y microservicios.",
      available: "Buscando Desarrollador Backend Junior o Ingeniero de IA Junior",
      specialty: "Backend",
      capacity: "IA aplicada",
      photo: "Foto de José Gabriel Mendes",
      placeholder: "Añade profile-1.webp y profile-2.webp",
    },
    about: {
      label: "Sobre",
      title: "Quién soy",
      text: [
        "Soy José Gabriel, estudiante de Ciencias de la Computación (2.º período, UnP) y desarrollador backend junior con fuerte interés en IA aplicada.",
        "He construido APIs REST con JWT, PostgreSQL, tests, Docker y CI/CD. Mi proyecto principal en curso es un asistente corporativo RAG: API Java/Spring Boot integrada con un microservicio Python/FastAPI vía RabbitMQ, con embeddings, ChromaDB y Llama 3 (Groq).",
        "Trabajo como Analista de Soporte y TI junior en entorno corporativo y busco mi primera vacante como Desarrollador Backend Junior o Ingeniero de IA Junior.",
      ],
      flow: ["APIs REST", "Microservicios", "RAG / LLMs", "Tests", "Docker", "CI/CD"],
    },
    projects: {
      label: "Proyectos",
      title: "Proyectos que muestran lo que sé hacer",
      intro: "Sistemas y APIs que desarrollé para practicar backend, IA y buenas prácticas.",
      client: "Cliente real",
      inProgress: "En desarrollo",
      screenshot: "Captura en preparación",
      technologies: "Tecnologías",
      highlights: "Qué implementé",
      desc: {
        "rag-assistant": [
          "IA • RAG • Microservicios",
          "Q&A distribuido sobre documentos. API Java/Spring Boot + microservicio Python/FastAPI con LangChain, ChromaDB y Llama 3 (Groq), vía RabbitMQ.",
        ],
        checkinhub: [
          "Eventos • QR Code • Seguridad",
          "Inscripción y check-in por QR Code, perfiles, Flyway, tests y CI con GitHub Actions.",
        ],
        odontosystem: [
          "Gestión • JWT • AWS S3",
          "API modular para pacientes, citas e historiales, JWT, archivos en S3 y tests de integración.",
        ],
        reservas: [
          "Reservas • Reglas de negocio",
          "Reservas de espacios para eventos, conflictos de horario y confirmación de pago vía WhatsApp.",
        ],
      },
    },
    skills: {
      label: "Habilidades",
      title: "Tecnologías y herramientas",
      intro: "Stack que uso en los proyectos y estudio de forma continua.",
      groups: techGroups,
    },
    experience: {
      label: "Experiencia",
      title: "Trayectoria",
      items: [
        [
          "Analista de Soporte Junior & Analista de TI Junior",
          "Super MegaVendas",
          "Sep/2026 — Actual",
          "Soporte a sistemas internos, incidentes, comunicación con equipos y clientes, e infraestructura y redes.",
          "Soporte • Sistemas internos • Infraestructura",
        ],
        [
          "Proyectos de estudio y práctica",
          "Personales y cliente real",
          "2025 — Actual",
          "APIs y sistemas con Java/Spring Boot; RAG distribuido (Java + Python); API de reservas para cliente real.",
          "Spring Boot • FastAPI • RAG • RabbitMQ • Docker • CI/CD",
        ],
      ],
    },
    education: {
      title: "Formación y cursos",
      items: [
        ["Licenciatura en Ciencias de la Computación", "Universidade Potiguar (UnP) — Natal/RN", "2.º período, en curso"],
        ["AWS Cloud Practitioner Essentials", "AWS Skill Builder", "En curso"],
        ["Programación Orientada a Objetos con Java", "Udemy", "Completado"],
      ],
    },
    contact: {
      label: "Contacto",
      title: "Hablemos",
      text: "Abierto a oportunidades de Desarrollador Backend Junior o Ingeniero de IA Junior. Currículum, LinkedIn, GitHub e Instagram abajo.",
      fields: ["Nombre", "Email", "Empresa / Contexto", "Mensaje"],
      note: "El formulario abre tu correo. También: bielmendes2208@gmail.com",
    },
    footer: {
      role: "Desarrollador Backend e IA",
      phrase: "Portafolio para el primer puesto junior.",
      rights: "© 2026 José Gabriel da Silva Mendes",
    },
  },
};

export type Translation = typeof translations.pt;
