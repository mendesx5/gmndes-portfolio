import { useEffect, useMemo, useState, type FormEvent } from "react";
import { ArrowRight, ArrowUp, BriefcaseBusiness, Check, ChevronLeft, ChevronRight, Download, ExternalLink, Github, Instagram, Linkedin, Mail, Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/data/projects";
import { localeNames, translations, type Locale } from "@/i18n/translations";

const ids = ["inicio", "sobre", "projetos", "habilidades", "experiencia", "contato"];
const CV_URL = "/curriculo-jose-gabriel-backend-ia.pdf";
const SOCIAL = {
  email: "mailto:bielmendes2208@gmail.com",
  linkedin: "https://linkedin.com/in/gabrielmendes06",
  github: "https://github.com/mendesx5",
  instagram: "https://www.instagram.com/gabrielmendes_dev/",
};

function Head({ n, label, title, intro }: { n: string; label: string; title: string; intro?: string }) {
  return (
    <header className="section-head reveal">
      <b>{n}</b>
      <div>
        <p className="overline">{label}</p>
        <h2>{title}</h2>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
    </header>
  );
}

function Portrait({ t }: { t: any }) {
  const [a, setA] = useState(0);
  const [bad, setBad] = useState([false, false]);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const i = setInterval(() => setA((v) => (v ? 0 : 1)), 5000);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="portrait-wrap reveal">
      <div className="portrait-frame">
        {[1, 2].map((x, i) =>
          bad[i] ? (
            <div key={i} className={`portrait-placeholder ${a === i ? "is-active" : ""}`}>
              <strong>JG</strong>
              <small>{t.hero.placeholder}</small>
            </div>
          ) : (
            <img
              key={i}
              src={`/images/profile/profile-${x}.webp`}
              alt={t.hero.photo}
              className={a === i ? "is-active" : ""}
              onError={() => setBad((m) => m.map((v, j) => (j === i ? true : v)))}
            />
          )
        )}
        <span className="portrait-count">0{a + 1} / 02</span>
      </div>
      <div className="portrait-caption">
        <span>{t.hero.specialty}</span>
        <span>{t.hero.capacity}</span>
      </div>
    </div>
  );
}

function ProjectImage({ p, text, slide = 0 }: { p: Project; text: string; slide?: number }) {
  const [bad, setBad] = useState(false);
  const src = `/images/projects/${p.id}${slide ? `-${slide + 1}` : ""}.webp`;
  return (
    <div className="project-image">
      {bad ? (
        <div className="project-placeholder">
          <strong>{p.title.slice(0, 2).toUpperCase()}</strong>
          <small>{text}</small>
        </div>
      ) : (
        <img src={src} alt={`${p.title} — ${text}`} loading="lazy" onError={() => setBad(true)} />
      )}
    </div>
  );
}

function Modal({ p, close, t }: { p: Project; close: () => void; t: any }) {
  const [s, setS] = useState(0);
  const d = t.projects.desc[p.id];
  useEffect(() => {
    document.body.classList.add("scroll-locked");
    return () => document.body.classList.remove("scroll-locked");
  }, []);
  return (
    <div className="modal-overlay" onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <header>
          <div>
            <p className="overline">{d[0]}</p>
            <h2 id="modal-title">{p.title}</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={close} aria-label={t.actions.close}>
            <X />
          </Button>
        </header>
        <div className="modal-body">
          <div className="gallery">
            <ProjectImage p={p} text={t.projects.screenshot} slide={s} />
            <Button variant="secondary" size="icon" className="prev" onClick={() => setS((s + 2) % 3)} aria-label="Previous">
              <ChevronLeft />
            </Button>
            <Button variant="secondary" size="icon" className="next" onClick={() => setS((s + 1) % 3)} aria-label="Next">
              <ChevronRight />
            </Button>
            <div className="dots">
              {[0, 1, 2].map((i) => (
                <button key={i} className={s === i ? "active" : ""} onClick={() => setS(i)} aria-label={`Slide ${i + 1}`} />
              ))}
            </div>
          </div>
          <div className="modal-grid">
            <div>
              <p className="modal-description">{d[1]}</p>
              <h3>{t.projects.highlights}</h3>
              <ul>
                {p.highlights.map((x) => (
                  <li key={x}>
                    <Check />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <aside>
              <h3>{t.projects.technologies}</h3>
              <div className="tags">
                {p.technologies.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
              <div className="modal-actions">
                <Button asChild>
                  <a href={p.backendUrl} target="_blank" rel="noreferrer">
                    <Github />
                    {t.actions.backend}
                  </a>
                </Button>
                {p.frontendUrl && (
                  <Button variant="outline" asChild>
                    <a href={p.frontendUrl} target="_blank" rel="noreferrer">
                      <Github />
                      {t.actions.frontend}
                    </a>
                  </Button>
                )}
                {p.liveUrl && (
                  <Button variant="ghost" asChild>
                    <a href={p.liveUrl} target="_blank" rel="noreferrer">
                      <ExternalLink />
                      {t.actions.live}
                    </a>
                  </Button>
                )}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Portfolio() {
  const [locale, setLocale] = useState<Locale>("pt");
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("inicio");
  const [selected, setSelected] = useState<Project | null>(null);
  const [top, setTop] = useState(false);
  const t = translations[locale] as any;

  useEffect(() => {
    const s = localStorage.getItem("theme");
    const d = s ? s === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(d);
    document.documentElement.classList.toggle("dark", d);
    const l = localStorage.getItem("locale") as Locale | null;
    if (l && translations[l]) setLocale(l);
  }, []);
  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : locale;
    localStorage.setItem("locale", locale);
  }, [locale]);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  useEffect(() => {
    const fn = () => setTop(scrollY > 700);
    addEventListener("scroll", fn, { passive: true });
    const o = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-35% 0px -55%" });
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) o.observe(el);
    });
    return () => {
      removeEventListener("scroll", fn);
      o.disconnect();
    };
  }, []);
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelected(null);
        setMenu(false);
      }
    };
    addEventListener("keydown", fn);
    return () => removeEventListener("keydown", fn);
  }, []);
  useEffect(() => {
    const o = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("visible")), { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach((e) => o.observe(e));
    return () => o.disconnect();
  }, [locale]);

  const nav = useMemo(() => ids.map((id, i) => ({ id, label: t.nav[i] })), [t]);
  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    location.href = `mailto:bielmendes2208@gmail.com?subject=${encodeURIComponent(`Contato — ${d.get("name")}`)}&body=${encodeURIComponent(`${d.get("message")}\n\n${d.get("company")}\n${d.get("email")}`)}`;
  };

  return (
    <div>
      <header className="navbar">
        <a className="brand" href="#inicio" onClick={(e) => { e.preventDefault(); go("inicio"); }}>JG</a>
        <nav className="desktop-nav">
          {nav.map((n) => (
            <button className={active === n.id ? "active" : ""} key={n.id} onClick={() => go(n.id)}>{n.label}</button>
          ))}
        </nav>
        <div className="nav-tools">
          <select value={locale} onChange={(e) => setLocale(e.target.value as Locale)} aria-label={t.actions.language}>
            {(Object.keys(localeNames) as Locale[]).map((l) => (
              <option key={l} value={l}>{l.toUpperCase()}</option>
            ))}
          </select>
          <Button variant="ghost" size="icon" onClick={() => setDark((v) => !v)} aria-label={t.actions.theme}>{dark ? <Sun /> : <Moon />}</Button>
          <Button className="desktop-cta" variant="outline" asChild>
            <a href={CV_URL} download target="_blank" rel="noreferrer"><Download />{t.actions.cv}</a>
          </Button>
          <Button className="mobile-menu" variant="ghost" size="icon" onClick={() => setMenu((v) => !v)} aria-label={t.actions.menu}>{menu ? <X /> : <Menu />}</Button>
        </div>
      </header>
      {menu && (
        <nav className="mobile-nav">
          {nav.map((n) => (
            <button key={n.id} onClick={() => go(n.id)}>{n.label}<ArrowRight /></button>
          ))}
          <a className="mobile-cv" href={CV_URL} download target="_blank" rel="noreferrer"><Download />{t.actions.cv}</a>
        </nav>
      )}

      <main>
        <section id="inicio" className="hero">
          <div className="hero-copy reveal">
            <p className="overline">{t.hero.overline}</p>
            <p className="hero-name">José Gabriel Mendes</p>
            <h1>{t.hero.title}</h1>
            <p className="hero-text">{t.hero.text}</p>
            <div className="hero-actions">
              <Button size="lg" onClick={() => go("projetos")}>{t.actions.projects}<ArrowRight /></Button>
              <Button size="lg" variant="outline" asChild>
                <a href={CV_URL} download target="_blank" rel="noreferrer"><Download />{t.actions.cv}</a>
              </Button>
            </div>
            <div className="hero-social">
              <a href={SOCIAL.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
              <a href={SOCIAL.email} aria-label="Email"><Mail /></a>
            </div>
            <div className="availability"><span />{t.hero.available}</div>
          </div>
          <Portrait t={t} />
          <div className="tech-pipeline">
            {["Java", "Spring Boot", "Python", "RAG", "RabbitMQ", "Docker"].map((x, i) => (
              <span key={x}>{x}{i < 5 && <ArrowRight />}</span>
            ))}
          </div>
        </section>

        <section id="sobre" className="section section-alt">
          <div className="container">
            <Head n="01" label={t.about.label} title={t.about.title} />
            <div className="about-grid reveal">
              <div>{t.about.text.map((p: string) => <p key={p}>{p}</p>)}</div>
              <div className="business-flow">
                {t.about.flow.map((x: string, i: number) => (
                  <div key={x}><span>0{i + 1}</span><b>{x}</b></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projetos" className="section">
          <div className="container">
            <Head n="02" label={t.projects.label} title={t.projects.title} intro={t.projects.intro} />
            <div className="projects-grid">
              {projects.map((p, i) => {
                const d = t.projects.desc[p.id];
                return (
                  <article className={`project-card reveal ${p.layout} ${p.clientProject ? "client-project" : ""} ${p.inProgress ? "in-progress-project" : ""}`} key={p.id}>
                    <button className="project-open" onClick={() => setSelected(p)} aria-label={`${t.actions.open}: ${p.title}`}>
                      <div className="project-media">
                        <ProjectImage p={p} text={t.projects.screenshot} />
                        {p.clientProject && <span className="client-badge"><BriefcaseBusiness />{t.projects.client}</span>}
                        {p.inProgress && <span className="client-badge in-progress">{t.projects.inProgress}</span>}
                      </div>
                      <div className="project-content">
                        <div>
                          <p className="overline">0{i + 1} — {d[0]}</p>
                          <h3>{p.title}</h3>
                          <p>{d[1]}</p>
                        </div>
                        <div className="project-foot">
                          <div className="tags">{p.technologies.slice(0, 4).map((x) => <span key={x}>{x}</span>)}</div>
                          <span className="text-link">{t.actions.open}<ArrowRight /></span>
                        </div>
                      </div>
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="habilidades" className="section section-alt">
          <div className="container">
            <Head n="03" label={t.skills.label} title={t.skills.title} intro={t.skills.intro} />
            <div className="skills-grid">
              {t.skills.groups.map((g: any, i: number) => (
                <article className={`skill-group reveal ${i === 0 ? "skill-primary" : ""}`} key={g[0]}>
                  <span>0{i + 1}</span>
                  <h3>{g[0]}</h3>
                  <div className="tags">{g[1].map((x: string) => <em key={x}>{x}</em>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experiencia" className="section">
          <div className="container">
            <Head n="04" label={t.experience.label} title={t.experience.title} />
            <div className="experience-list">
              {t.experience.items.map((x: string[], i: number) => (
                <article className="experience-item reveal" key={x[0]}>
                  <span>0{i + 1}</span>
                  <div>
                    <p className="overline">{x[2]}</p>
                    <h3>{x[0]}</h3>
                    <h4>{x[1]}</h4>
                    <p>{x[3]}</p>
                    <code>{x[4]}</code>
                  </div>
                </article>
              ))}
            </div>
            <div className="education">
              <h2>{t.education.title}</h2>
              {t.education.items.map((x: string[]) => (
                <article key={x[0]}>
                  <div>
                    <h3>{x[0]}</h3>
                    <p>{x[1]}</p>
                  </div>
                  <span>{x[2]}</span>
                </article>
              ))}
            </div>
            <div className="cv-banner reveal">
              <div>
                <p className="overline">PDF</p>
                <h3>{t.actions.cv}</h3>
                <p>{t.contact.text}</p>
              </div>
              <Button size="lg" asChild>
                <a href={CV_URL} download target="_blank" rel="noreferrer"><Download />{t.actions.cv}</a>
              </Button>
            </div>
          </div>
        </section>

        <section id="contato" className="section contact-section">
          <div className="container contact-grid">
            <div className="contact-copy reveal">
              <p className="overline">05 — {t.contact.label}</p>
              <h2>{t.contact.title}</h2>
              <p>{t.contact.text}</p>
              <div className="social-list">
                <a href={SOCIAL.email}><Mail />bielmendes2208@gmail.com</a>
                <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer"><Linkedin />LinkedIn<ExternalLink /></a>
                <a href={SOCIAL.github} target="_blank" rel="noreferrer"><Github />GitHub<ExternalLink /></a>
                <a href={SOCIAL.instagram} target="_blank" rel="noreferrer"><Instagram />Instagram<ExternalLink /></a>
                <a href={CV_URL} download target="_blank" rel="noreferrer"><Download />{t.actions.cv}<ExternalLink /></a>
              </div>
            </div>
            <form className="contact-form reveal" onSubmit={submit}>
              <div className="form-row">
                <label>{t.contact.fields[0]}<input name="name" required /></label>
                <label>{t.contact.fields[1]}<input name="email" type="email" required /></label>
              </div>
              <label>{t.contact.fields[2]}<input name="company" /></label>
              <label>{t.contact.fields[3]}<textarea name="message" required rows={5} /></label>
              <p>{t.contact.note}</p>
              <Button size="lg" type="submit">{t.actions.send}<ArrowRight /></Button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div>
            <a className="brand" href="#inicio">JG</a>
            <h3>José Gabriel da Silva Mendes</h3>
            <p>{t.footer.role}</p>
          </div>
          <p className="footer-phrase">{t.footer.phrase}</p>
          <div className="footer-links">
            <a href={SOCIAL.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={SOCIAL.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={CV_URL} download>CV (PDF)</a>
            <a href={SOCIAL.email}>Email</a>
            <small>{t.footer.rights}</small>
          </div>
        </div>
      </footer>
      {top && (
        <Button className="back-top" size="icon" onClick={() => go("inicio")} aria-label={t.actions.top}>
          <ArrowUp />
        </Button>
      )}
      {selected && <Modal p={selected} close={() => setSelected(null)} t={t} />}
    </div>
  );
}
