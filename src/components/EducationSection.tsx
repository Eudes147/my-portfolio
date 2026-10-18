import {
  GraduationCap,
  Languages,
  MessageCircle,
  Lightbulb,
  Users,
  Sparkles,
  RefreshCw,
  Target,
  Rocket,
  Cpu,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { usePortfolio } from "@/context/PortfolioContext";

const softSkills = [
  {
    icon: MessageCircle,
    title: "Communication et pédagogie",
    description: "Expliquer clairement, former et transmettre mon savoir",
  },
  {
    icon: Lightbulb,
    title: "Résolution de problèmes",
    description: "Analyser, diagnostiquer et trouver des solutions concrètes",
  },
  {
    icon: Users,
    title: "Esprit d'équipe",
    description: "Collaborer efficacement avec designers, développeurs et clients",
  },
  {
    icon: Sparkles,
    title: "Créativité",
    description: "Imaginer des interfaces originales et efficaces",
  },
  {
    icon: RefreshCw,
    title: "Adaptabilité",
    description: "M'adapter vite aux nouveaux outils, contextes et besoins",
  },
  {
    icon: Target,
    title: "Rigueur",
    description: "Un code propre et un souci du détail à chaque livraison",
  },
];

const interests = [
  {
    icon: Rocket,
    title: "Entrepreneuriat",
    description: "Bâtir des projets et des solutions à impact",
  },
  {
    icon: Cpu,
    title: "Technologie et veille",
    description: "Me former en continu sur les nouvelles technologies web",
  },
];

const EducationSection = () => {
  const { education, languages } = usePortfolio();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 lg:py-40 bg-background relative overflow-hidden">
      {/* Fond en dégradé */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      
      <div className="container px-6 relative z-10">
        {/* En-tête de section */}
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block text-accent font-medium tracking-wider uppercase text-sm mb-4">
            Parcours académique
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Formation & diplômes
          </h2>
          <motion.div 
            className="w-24 h-1 bg-accent mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </AnimatedSection>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Ligne du haut : Formation + Langues */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Formation */}
            <AnimatedSection delay={0.1}>
              <motion.div 
                whileHover={{ y: -4 }}
                className="group relative h-full"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-accent to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                <div className="relative glass rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-orange-500 flex items-center justify-center shadow-lg">
                      <GraduationCap className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground">Formation</h3>
                  </div>
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <motion.div 
                        key={index} 
                        className="relative pl-5 border-l-2 border-accent"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      >
                        <p className="font-semibold text-foreground">{edu.degree}</p>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        <p className="text-sm text-accent font-medium mt-1">{edu.year}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Langues */}
            <AnimatedSection delay={0.2}>
              <motion.div 
                whileHover={{ y: -4 }}
                className="group relative h-full"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                <div className="relative glass rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center shadow-lg">
                      <Languages className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground">Langues</h3>
                  </div>
                  <div className="space-y-5">
                    {languages.map((lang, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-foreground">{lang.name}</span>
                          <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                            {lang.level}
                          </span>
                        </div>
                        <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${lang.percent}%` } : {}}
                            transition={{ 
                              duration: 1, 
                              delay: 0.6 + index * 0.1,
                              ease: [0.22, 1, 0.36, 1]
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>

          {/* Ligne du bas (pleine largeur) : Soft skills + Centres d'intérêt */}
          <AnimatedSection delay={0.3}>
            <div className="glass rounded-2xl p-8 md:p-10">
              {/* Compétences humaines */}
              <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                Compétences humaines
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {softSkills.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="group flex items-start gap-4 p-5 rounded-xl bg-card/60 border border-border hover:border-accent/50 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-gradient-to-br from-accent to-orange-500 flex items-center justify-center shadow-md">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground leading-tight mb-1">{item.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Centres d'intérêt */}
              <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                Centres d'intérêt
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {interests.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 1 + index * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="group flex items-start gap-4 p-5 rounded-xl bg-card/60 border border-border hover:border-accent/50 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center shadow-md">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground leading-tight mb-1">{item.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;