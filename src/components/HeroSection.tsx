import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, MapPin, ArrowDown, ArrowRight, Code2, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "./MagneticButton";
import { useRef } from "react";
import { usePortfolio } from "@/context/PortfolioContext";

const techStack = ["Vue 3", "Nuxt 3", "React", "TypeScript", "Tailwind CSS", "Pinia", "Figma"];

const HeroSection = () => {
  const { personalInfo } = usePortfolio();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExpertise = () => {
    document.getElementById("expertise")?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { value: personalInfo.yearsExperience, label: "Années d’expérience" },
    { value: personalInfo.projectsDelivered, label: "Projets livrés" },
    { value: personalInfo.industriesServed, label: "Secteur d’activité" },
  ];

  return (
    <section
      ref={containerRef}
      aria-labelledby="hero-title"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-primary noise"
    >
      {/* Orbes dégradés animés */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Motif en grille */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary-foreground) / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary-foreground) / 0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Barre d’accent : masquée sur mobile pour ne pas toucher le texte */}
      <motion.div
        aria-hidden="true"
        className="hidden lg:block absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-accent to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="container relative z-10 px-6 py-24 lg:py-20"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-12 items-center">
          {/* ───────── Colonne gauche : contenu ───────── */}
          <div className="text-center lg:text-left">
            {/* Badge de statut */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-start mb-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full glass-dark px-5 py-2.5 text-sm">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span className="text-primary-foreground/80">{personalInfo.status}</span>
              </div>
            </motion.div>

            {/* Accroche + localisation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 mb-5 text-primary-foreground/60"
            >
              <p className="text-base font-medium text-primary-foreground/80">
                Bonjour, je suis{" "}
                <span className="text-accent">
                  {personalInfo.name} {personalInfo.lastName}
                </span>
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs tracking-wide uppercase">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {personalInfo.location}
              </span>
            </motion.div>

            {/* Titre principal (H1) */}
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-heading font-bold text-primary-foreground tracking-tight leading-[1.1] mb-6"
            >
              Développeur Front-end qui conçoit des applications web{" "}
              <span className="text-accent">rapides</span> et fidèles aux maquettes
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-primary-foreground/60 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Je construis des interfaces avec Vue 3, Nuxt 3, React et Tailwind CSS.{" "}
              {personalInfo.tagline}
            </motion.p>

            {/* Boutons d’action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <MagneticButton>
                <Button
                  onClick={scrollToExpertise}
                  size="lg"
                  className="group w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-base rounded-full transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    Découvrir mon travail
                    <ArrowRight
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Button>
              </MagneticButton>

              <MagneticButton>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  size="lg"
                  className="group w-full sm:w-auto bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:border-primary-foreground font-medium px-8 py-6 text-base rounded-full transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                    Me contacter
                  </span>
                </Button>
              </MagneticButton>
            </motion.div>

            {/* Technologies maîtrisées */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="mb-10"
            >
              <p className="text-xs uppercase tracking-widest text-primary-foreground/40 mb-3">
                Technologies
              </p>
              <ul className="flex flex-wrap justify-center lg:justify-start gap-2">
                {techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-primary-foreground/15 px-3 py-1 text-xs text-primary-foreground/60 transition-colors duration-300 hover:border-accent hover:text-accent"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Statistiques */}
            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0 pt-8 border-t border-primary-foreground/10"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <dd className="text-3xl md:text-4xl font-heading font-bold text-accent mb-1">
                    {stat.value}
                  </dd>
                  <dt className="text-[11px] text-primary-foreground/40 uppercase tracking-wider leading-tight">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* ───────── Colonne droite : carte développeur ───────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-full max-w-lg mx-auto lg:max-w-none"
          >
            {/* Halo */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-accent/10 blur-2xl"
            />

            {/* Puce flottante : Code */}
            <motion.div
              aria-hidden="true"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:flex absolute -top-5 -right-3 z-20 items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs text-primary-foreground/80 shadow-lg"
            >
              <Code2 className="h-4 w-4 text-accent" />
              Nuxt 3 + Tailwind
            </motion.div>

            {/* Puce flottante : Figma */}
            <motion.div
              aria-hidden="true"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:flex absolute -bottom-5 -left-3 z-20 items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs text-primary-foreground/80 shadow-lg"
            >
              <Palette className="h-4 w-4 text-accent" />
              Figma → Code
            </motion.div>

            {/* Fenêtre d’éditeur */}
            <div className="relative rounded-2xl glass-dark border border-primary-foreground/10 overflow-hidden shadow-2xl">
              {/* Barre de titre */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-primary-foreground/10 bg-primary-foreground/5">
                <span className="h-3 w-3 rounded-full bg-destructive" aria-hidden="true" />
                <span className="h-3 w-3 rounded-full bg-accent" aria-hidden="true" />
                <span className="h-3 w-3 rounded-full bg-primary-foreground/30" aria-hidden="true" />
                <span className="ml-3 text-xs text-primary-foreground/40 font-mono">eudes.ts</span>
              </div>

              {/* Code */}
              <pre className="p-5 sm:p-7 text-[13px] sm:text-sm leading-relaxed font-mono overflow-x-auto text-left">
                <code>
                  <span className="text-primary-foreground/40">{"// Qui suis-je ?"}</span>
                  {"\n"}
                  <span className="text-accent">const</span>{" "}
                  <span className="text-primary-foreground">developpeur</span>{" "}
                  <span className="text-primary-foreground/60">=</span>{" "}
                  <span className="text-primary-foreground/60">{"{"}</span>
                  {"\n  "}
                  <span className="text-primary-foreground">nom</span>
                  <span className="text-primary-foreground/60">:</span>{" "}
                  <span className="text-accent">"{personalInfo.name} {personalInfo.lastName}"</span>
                  <span className="text-primary-foreground/60">,</span>
                  {"\n  "}
                  <span className="text-primary-foreground">role</span>
                  <span className="text-primary-foreground/60">:</span>{" "}
                  <span className="text-accent">"Front-end"</span>
                  <span className="text-primary-foreground/60">,</span>
                  {"\n  "}
                  <span className="text-primary-foreground">base</span>
                  <span className="text-primary-foreground/60">:</span>{" "}
                  <span className="text-accent">"{personalInfo.location}"</span>
                  <span className="text-primary-foreground/60">,</span>
                  {"\n  "}
                  <span className="text-primary-foreground">stack</span>
                  <span className="text-primary-foreground/60">: [</span>
                  <span className="text-accent">"Vue"</span>
                  <span className="text-primary-foreground/60">, </span>
                  <span className="text-accent">"Nuxt"</span>
                  <span className="text-primary-foreground/60">, </span>
                  <span className="text-accent">"React"</span>
                  <span className="text-primary-foreground/60">],</span>
                  {"\n  "}
                  <span className="text-primary-foreground">disponible</span>
                  <span className="text-primary-foreground/60">:</span>{" "}
                  <span className="text-accent">true</span>
                  {"\n"}
                  <span className="text-primary-foreground/60">{"}"}</span>
                  <motion.span
                    aria-hidden="true"
                    className="inline-block w-2 h-4 bg-accent align-middle ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Indicateur de défilement (masqué sur mobile pour éviter les chevauchements) */}
      <motion.div
        aria-hidden="true"
        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-primary-foreground/40"
        >
          <span className="text-xs uppercase tracking-widest">Défiler</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;