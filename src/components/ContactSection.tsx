import { Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";
import MagneticButton from "./MagneticButton";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: MapPin,
      label: "Localisation",
      value: "Cotonou, Bénin",
      href: null,
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+229 01 99 71 93 18",
      href: "tel:+2290199719318",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "hodonoueudeshdn@gmail.com",
      href: "mailto:hodonoueudeshdn@gmail.com",
    },
  ];

  return (
    <section ref={ref} id="contact" className="py-28 lg:py-40 bg-gradient-primary relative overflow-hidden noise">
      {/* Orbes dégradés animés */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Motif en grille */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(0 0% 100% / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(0 0% 100% / 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container px-6 relative z-10">
        {/* En-tête de section */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-accent font-medium tracking-wider uppercase text-sm mb-4">
            Restons en contact
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
            Me contacter
          </h2>
          <motion.div 
            className="w-24 h-1 bg-accent mx-auto rounded-full mb-8"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-primary-foreground/60 max-w-2xl mx-auto text-lg">
            Disponible pour de nouvelles opportunités en développement web front-end.
            Discutons de la façon dont je peux contribuer à la réussite de votre projet.
          </p>
        </AnimatedSection>

        {/* Cartes de contact */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((item, index) => (
              <AnimatedSection key={index} delay={0.1 * index}>
                <motion.a
                  href={item.href || undefined}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`group block glass-dark rounded-2xl p-6 text-center ${
                    item.href ? "cursor-pointer" : "cursor-default"
                  }`}
                >
                  <div className="w-16 h-16 rounded-xl bg-accent mx-auto mb-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <item.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <p className="text-sm text-primary-foreground/50 mb-1 uppercase tracking-wider">{item.label}</p>
                  <p className="font-semibold text-primary-foreground text-sm whitespace-nowrap">{item.value}</p>
                </motion.a>
              </AnimatedSection>
            ))}
          </div>

          {/* Appel à l'action */}
          <AnimatedSection delay={0.4} className="text-center">
            <MagneticButton className="inline-block">
              <Button
                size="lg"
                className="group relative bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-12 py-7 text-lg rounded-full overflow-hidden transition-all duration-300 glow-accent"
                asChild
              >
                <a href="mailto:hodonoueudeshdn@gmail.com">
                  <span className="relative z-10 flex items-center gap-3">
                    <Send className="h-5 w-5" />
                    Envoyer un message
                    <Sparkles className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </a>
              </Button>
            </MagneticButton>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;