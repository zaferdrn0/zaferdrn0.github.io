import Head from "next/head";
import { motion } from "framer-motion";
import { 
  Menu, 
  X,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import styles from "@/styles/Home.module.css";
import IntroAnimation from "@/components/IntroAnimation";
import { introUtils } from "@/utils/introUtils";
import translations from "../data/translations.json";
import HeroView from "../views/HeroView";
import AboutView from "../views/AboutView";
import TechStackView from "../views/TechStackView";
import ProjectsView from "../views/ProjectsView";
import HobbiesView from "../views/HobbiesView";
import ExperienceView from "../views/ExperienceView";
import ContactView from "../views/ContactView";
import FooterView from "../views/FooterView";
import techStackData from "../data/techStack.json";
import projectsData from "../data/projects.json";
import experienceData from "../data/experience.json";
import hobbiesData from "../data/hobbies.json";

const techStack = techStackData;
const projects = projectsData;
const hobbies = hobbiesData;

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('tr');
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [introCompleted, setIntroCompleted] = useState(false);
  const [currentCodeLine, setCurrentCodeLine] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const languageToggleRef = useRef<HTMLDivElement>(null);

  const t = translations[language as keyof typeof translations];

  // Email content based on language
  const isturkish = language === 'tr';
  const emailSubject = isturkish ? 'İş Teklifim' : 'Job Opportunity';
  const emailBody = isturkish 
    ? 'Merhaba Zafer, size bir iş teklifi yapmak istiyorum.' 
    : 'Hello Zafer, I would like to make you a job offer.';
  const emailLink = `mailto:zaferdrn0@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  // Handle clicking outside language menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (languageToggleRef.current && !languageToggleRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Check if intro has been shown before
  useEffect(() => {
    setIsClient(true);
    if (introUtils.hasSeenIntro()) {
      setShowIntro(false);
      setIntroCompleted(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setIntroCompleted(true);
    introUtils.markIntroAsShown();
    
    // Start code typing animation after a delay
    setTimeout(() => {
      setCurrentCodeLine(0);
    }, 1000);
  };

  const handleCodeLineComplete = () => {
    setCurrentCodeLine(prev => prev + 1);
  };

  const restartCodeAnimation = () => {
    setCurrentCodeLine(0);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
    setIsLanguageMenuOpen(false);
  };

  // Don't render main content until intro is completed
  if (!introCompleted) {
    return (
      <>
        <Head>
          <title>Zafer Duran - Frontend Developer</title>
          <meta name="description" content="Frontend Developer specialized in React, Next.js, and TypeScript. Crafting sleek, scalable digital experiences." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Rajdhani:wght@300;400;500;600;700&family=Exo+2:ital,wght@0,100..900;1,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet" />
        </Head>
        {showIntro && isClient && <IntroAnimation onComplete={handleIntroComplete} />}
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Zafer Duran - Frontend Developer</title>
        <meta name="description" content="Frontend Developer specialized in React, Next.js, and TypeScript. Crafting sleek, scalable digital experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />          <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Rajdhani:wght@300;400;500;600;700&family=Exo+2:ital,wght@0,100..900;1,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet" />
      </Head>

      <motion.div 
        className={styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
      >
        {/* Navigation */}
        <nav className={styles.navbar}>
          <div className={styles.navContent}>
            <motion.div 
              className={styles.logo}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Zafer.dev
            </motion.div>
            
            <div className={styles.navLinks}>
              <a href="#home">{t.nav.home}</a>
              <a href="#about">{t.nav.about}</a>
              <a href="#projects">{t.nav.projects}</a>
              <a href="#hobbies">{t.hobbies.title}</a>
              <a href="#experience">{t.nav.experience}</a>
              <a href="#contact">{t.nav.contact}</a>
              
              {/* Desktop Language Toggle */}
              <div className={styles.languageToggle} ref={languageToggleRef}>
                <button 
                  className={styles.languageButton}
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                >
                  {language === 'tr' ? '🇹🇷 TR' : '🇺🇸 EN'}
                  <span style={{ marginLeft: '0.5rem' }}>▼</span>
                </button>
                {isLanguageMenuOpen && (
                  <div className={styles.languageMenu}>
                    <button 
                      className={`${styles.languageOption} ${language === 'tr' ? styles.active : ''}`}
                      onClick={() => {
                        setLanguage('tr');
                        setIsLanguageMenuOpen(false);
                      }}
                    >
                      🇹🇷 Türkçe
                    </button>
                    <button 
                      className={`${styles.languageOption} ${language === 'en' ? styles.active : ''}`}
                      onClick={() => {
                        setLanguage('en');
                        setIsLanguageMenuOpen(false);
                      }}
                    >
                      🇺🇸 English
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.navActions}>
              {/* Remove language toggle from here for desktop */}
              <motion.a 
                href={emailLink}
                className={styles.hireButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.nav.hireMe}
              </motion.a>
            </div>

            <button 
              className={styles.mobileMenuButton}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <motion.div 
              className={styles.mobileMenu}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <a href="#home">{t.nav.home}</a>
              <a href="#about">{t.nav.about}</a>
              <a href="#projects">{t.nav.projects}</a>
              <a href="#hobbies">{t.hobbies.title}</a>
              <a href="#experience">{t.nav.experience}</a>
              <a href="#contact">{t.nav.contact}</a>
              <div className={styles.mobileLanguageToggle}>
                <button 
                  onClick={() => {
                    setLanguage('tr');
                    setIsMenuOpen(false);
                  }} 
                  className={language === 'tr' ? styles.active : ''}
                >
                  🇹🇷 Türkçe
                </button>
                <button 
                  onClick={() => {
                    setLanguage('en');
                    setIsMenuOpen(false);
                  }} 
                  className={language === 'en' ? styles.active : ''}
                >
                  🇺🇸 English
                </button>
              </div>
              <motion.a 
                href={emailLink}
                className={styles.mobileHireButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.nav.hireMe}
              </motion.a>
            </motion.div>
          )}
        </nav>

        {/* Hero Section */}
        <HeroView key={`hero-${language}`} t={t} currentCodeLine={currentCodeLine} handleCodeLineComplete={handleCodeLineComplete} />
        {/* About Section */}
        <AboutView key={`about-${language}`} t={t} />
        {/* Tech Stack Section */}
        <TechStackView key={`tech-${language}`} t={t} techStack={techStack} />
        {/* Projects Section */}
        <ProjectsView key={`projects-${language}`} t={t} projects={projects} />
         {/* Experience Section */}
        <ExperienceView 
          key={language} 
          t={t} 
          experience={experienceData[language as keyof typeof experienceData]} 
        />
        {/* Hobbies Section */}
        <HobbiesView key={`hobbies-${language}`} t={t} hobbies={hobbies} />
        {/* Contact Section */}
        <ContactView key={`contact-${language}`} t={t} />
        {/* Footer */}
        <FooterView key={`footer-${language}`} t={t} language={language} setLanguage={setLanguage} />
      </motion.div>
    </>
  );
}
