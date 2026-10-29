import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/Portfolio";
export const Route = createFileRoute("/")({
 head:()=>({meta:[{title:"José Gabriel Mendes | Backend & AI — Portfólio"},{name:"description",content:"Portfólio de José Gabriel Mendes: projetos, tecnologias e currículo. Desenvolvedor backend júnior com foco em Java/Spring Boot e IA aplicada. Em busca da primeira vaga."},{property:"og:title",content:"José Gabriel Mendes | Backend & AI — Portfólio"},{property:"og:description",content:"Projetos, skills e currículo. Java, Spring Boot, Python, RAG. Buscando vaga júnior."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Portfolio
});
