"use client";

import { createContext, useState, useContext, ReactNode } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<Language, TranslationType>;
}

interface TranslationType {
  navLinks: {
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    description: string;
    projectsShowcase: string;
    experience: string;
    insights: string;
    explore: string;
    hireMe: string;
    downloadCV: string;
    animation: (string | number)[];
  };
  about: {
    title: string;
    description: string;
    tabTitles: {
      skills: string;
      education: string;
      experience: string;
    };
    education: {
      school42: string;
      openClassrooms: string;
      scrimba: string;
    };
    experience: {
      openClassrooms: string;
      chabe: string;
    };
  };
  projects: {
    title: string;
    tags: {
      all: string;
      web: string;
      mobile: string;
    };
  }
  contact: {
    title: string;
    description: string;
    form: {
      emailLabel: string;
      emailPlaceholder: string;
      subjectLabel: string;
      subjectPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitButton: string;
      successMessage: string;
    };
  }
  // Add more sections as needed
}

const translations: Record<Language, TranslationType> = {
  en: {
    navLinks: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm Adil",
      description: "This portfolio showcases my journey, including:",
      projectsShowcase: "Projects that reflect creativity and technical skills.",
      experience: "A glimpse into my professional experience and contributions.",
      insights: "Insights into my development process, tools, and methodologies.",
      explore: "Feel free to explore and connect with me for collaboration opportunities. Let's build something amazing together!",
      hireMe: "Let's Connect",
      downloadCV: "Download CV",
      animation: ["FullStack Developer", 1000, "JavaScript Expert", 1000],
    },
    about: {
        title: "About Me",
        description: "👋 Hello! I'm Adil Yakdi 🚀 Full-Stack Developer (NodeJS, NextJS and TypeScript) with a passion for creating robust and scalable web applications.",
        tabTitles: {
          skills: "Skills",
          education: "Education",
          experience: "Experience"
        },
        education: {
          school42: "42 School - Paris",
          openClassrooms: "OpenClassRooms - Online",
          scrimba: "FrontEnd Roadmap - Scrimba"
        },
        experience: {
          openClassrooms: "Web Developer - OpenClassrooms - 18 months",
          chabe: "FullStack Developer - Chabé - 18 months"
        }
      },
      projects: {
        title: "My Projects",
        tags: {
          all: "All",
          web: "Web",
          mobile: "Mobile"
        }
      },
      contact: {
        title: "Let's Connect",
        description: "I'm always looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
        form: {
          emailLabel: "Your email",
          emailPlaceholder: "name@gmail.com",
          subjectLabel: "Subject",
          subjectPlaceholder: "Just saying hi!",
          messageLabel: "Message",
          messagePlaceholder: "Let's talk about...",
          submitButton: "Send Message",
          successMessage: "Email sent successfully!"
        }
      }
  },
  fr: {
    navLinks: {
      about: "À Propos",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      greeting: "Bonjour, je suis Adil",
      description: "Ce portfolio présente mon parcours, comprenant:",
      projectsShowcase: "Des projets qui reflètent ma créativité et mes compétences techniques.",
      experience: "Un aperçu de mon expérience professionnelle et de mes contributions.",
      insights: "Des perspectives sur mon processus de développement, mes outils et mes méthodologies.",
      explore: "N'hésitez pas à explorer et à me contacter pour des opportunités de collaboration. Construisons ensemble quelque chose d'extraordinaire!",
      hireMe: "Connectons-nous",
      downloadCV: "Télécharger CV",
      animation: ["Développeur FullStack", 1000, "Expert JavaScript", 1000],
    },
    about: {
        title: "À Propos De Moi",
        description: "👋 Bonjour! Je suis Adil Yakdi 🚀 Développeur Full-Stack (NodeJS, NextJS et TypeScript) passionné par la création d'applications web robustes et évolutives.",
        tabTitles: {
          skills: "Compétences",
          education: "Formation",
          experience: "Expérience"
        },
        education: {
          school42: "École 42 - Paris",
          openClassrooms: "OpenClassRooms - En ligne",
          scrimba: "Parcours FrontEnd - Scrimba"
        },
        experience: {
          openClassrooms: "Développeur Web - OpenClassrooms - 18 mois",
          chabe: "Développeur FullStack - Chabé - 18 mois"
        }
      },
      projects: {
        title: "Mes Projets",
        tags: {
          all: "Tous",
          web: "Web",
          mobile: "Mobile"
        }
      },
      contact: {
        title: "Contactez-moi",
        description: "Je suis toujours à la recherche de nouvelles opportunités, ma boîte de réception est toujours ouverte. Que vous ayez une question ou que vous vouliez simplement dire bonjour, je ferai de mon mieux pour vous répondre !",
        form: {
          emailLabel: "Votre email",
          emailPlaceholder: "nom@gmail.com",
          subjectLabel: "Sujet",
          subjectPlaceholder: "Juste pour dire bonjour !",
          messageLabel: "Message",
          messagePlaceholder: "Parlons de...",
          submitButton: "Envoyer le Message",
          successMessage: "Email envoyé avec succès !"
        }
      }
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};