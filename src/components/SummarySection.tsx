import { Layers, Palette, Globe, GraduationCap, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SummarySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Layers,
      title: "Polyvalence technique",
      description:
        "Vue 3, Nuxt 3 et React : je choisis l'outil le plus adapté à chaque projet",
    },
    {
      icon: Palette,
      title: "Fidélité aux maquettes",
      description:
        "Intégration soignée de maquettes Figma avec Tailwind CSS et des design tokens sur mesure",
    },
    {
      icon: Globe,
      title: "Solutions pensées pour l'Afrique",
      description:
        "Des applications web adaptées aux réalités et aux besoins du continent",
    },
    {
      icon: GraduationCap,
      title: "Pédagogie et transmission",
      description:
        "Formateur à ISRA Informatique Tech, je crée des supports pour former la prochaine génération",
    },
  ];

  return (
    <section ref={ref} className="py-28 lg:py-40 bg-background relative overflow-hidden">
      {/* Fond dégradé subtil */}
      <div className="absolute inset-0 bg-gradient-mesh" />

      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* En-tête de section */}
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block text-accent font-medium tracking-wider uppercase text-sm mb-4">
              Profil professionnel
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              À propos de moi
            </h2>
            <motion.div
              className="w-24 h-1 bg-accent mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </AnimatedSection>

          {/* Carte de présentation */}
          <AnimatedSection delay={0.2} className="mb-20">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-accent/5 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative glass rounded-3xl p-10 md:p-14">
                <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed text-center font-light">
                  <span className="font-semibold text-foreground">Développeur Front-end</span> ambitieux
                  avec <span className="font-semibold text-accent">plus de 3 ans d'expérience</span>,
                  je transforme des idées en interfaces web performantes, pensées pour avoir un impact réel.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center mt-6">
                  J'ai conçu des solutions variées :{" "}
                  <span className="font-medium text-foreground/70">
                    DOOMU (paiements et transactions), EDCE (gestion d'école du dimanche),
                    SAPEN (programme d'entrepreneuriat des jeunes) et RADAR (audit de sécurité web)
                  </span>
                  .
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Cartes d'atouts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <AnimatedSection
                key={index}
                delay={0.1 * index}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="group relative h-full"
                >
                  <div className="absolute inset-0 bg-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-start gap-5 p-6 rounded-2xl glass h-full">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                      <item.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-lg text-foreground mb-2 flex items-center gap-2">
                        {item.title}
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent" />
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;