import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/Portfolio";
export const Route = createFileRoute("/")({
 head:()=>({meta:[{title:"José Gabriel Mendes | Desenvolvedor de Software Java & Spring Boot"},{name:"description",content:"Portfólio de José Gabriel Mendes, desenvolvedor de software especializado em Java, Spring Boot, APIs REST e sistemas web personalizados."},{property:"og:title",content:"José Gabriel Mendes | Desenvolvedor de Software Java & Spring Boot"},{property:"og:description",content:"Desenvolvimento de sistemas web personalizados, APIs REST e soluções em Java e Spring Boot."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Portfolio
});
