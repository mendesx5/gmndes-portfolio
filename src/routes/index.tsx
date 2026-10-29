import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/Portfolio";
export const Route = createFileRoute("/")({
 head:()=>({meta:[{title:"José Gabriel Mendes | Desenvolvedor Backend e IA"},{name:"description",content:"Portfólio de José Gabriel Mendes — desenvolvedor backend júnior com foco em Java/Spring Boot e IA aplicada (RAG, LangChain, microsserviços)."},{property:"og:title",content:"José Gabriel Mendes | Desenvolvedor Backend e IA"},{property:"og:description",content:"Backend com Java/Spring Boot, APIs REST, RAG, Python/FastAPI e sistemas distribuídos. Em busca da primeira vaga."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Portfolio
});
