import { motion } from "framer-motion";
import TypewriterText from "@/components/TypewriterText";
import DeveloperSVG from "@/components/DeveloperSVG";
import styles from "@/styles/Home.module.css";

interface HeroViewProps {
  t: any;
  currentCodeLine: number;
  handleCodeLineComplete: () => void;
}

export default function HeroView({ t, currentCodeLine, handleCodeLineComplete }: HeroViewProps) {
  // Get current language to set email content
  const isturkish = t.nav.home === 'Ana Sayfa';
  const emailSubject = isturkish ? 'İş Teklifim' : 'Job Opportunity';
  const emailBody = isturkish 
    ? 'Merhaba Zafer, size bir iş teklifi yapmak istiyorum.' 
    : 'Hello Zafer, I would like to make you a job offer.';
  
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t.hero.title}
          </motion.h1>
          <motion.h2 
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {t.hero.subtitle}
          </motion.h2>
          <motion.p 
            className={styles.heroTagline}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {t.hero.tagline}
          </motion.p>
          <motion.p 
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {t.hero.description}
          </motion.p>
          <motion.div 
            className={styles.heroButtons}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <motion.a 
              href="#projects"
              className={styles.primaryButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.hero.viewProjects}
            </motion.a>
            <motion.a 
              href={`mailto:zaferdrn0@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
              className={styles.secondaryButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.hero.hireMe}
            </motion.a>
          </motion.div>
        </div>
        <div className={styles.heroVisual}>
          {/* Add the animated SVG */}
          <motion.div 
            className={styles.heroSvg}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <DeveloperSVG />
          </motion.div>
          
          <div className={styles.floatingElements}>
            <motion.div 
              className={styles.codeBlock} 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              {currentCodeLine >= 0 && (
                <div className={styles.codeLine}>
                  <TypewriterText 
                    text="const developer = {"
                    delay={80}
                    startDelay={200}
                    onComplete={handleCodeLineComplete}
                  />
                </div>
              )}
              {currentCodeLine >= 1 && (
                <div className={styles.codeLine}>
                  <TypewriterText 
                    text={`  name: "${t.hero.title}",`}
                    delay={60}
                    startDelay={100}
                    onComplete={handleCodeLineComplete}
                  />
                </div>
              )}
              {currentCodeLine >= 2 && (
                <div className={styles.codeLine}>
                  <TypewriterText 
                    text='  skills: ["React", "TypeScript", "Node.js", ".NET Core", "Docker"],'
                    delay={50}
                    startDelay={100}
                    onComplete={handleCodeLineComplete}
                  />
                </div>
              )}
              {currentCodeLine >= 3 && (
                <div className={styles.codeLine}>
                  <TypewriterText 
                    text={isturkish ? '  passion: "Ölçeklenebilir web çözümleri"' : '  passion: "Scalable web solutions"'}
                    delay={60}
                    startDelay={100}
                    onComplete={handleCodeLineComplete}
                  />
                </div>
              )}
              {currentCodeLine >= 4 && (
                <div className={styles.codeLine}>
                  <TypewriterText 
                    text="};"
                    delay={120}
                    startDelay={150}
                    onComplete={handleCodeLineComplete}
                  />
                </div>
              )}
            </motion.div>
            <div className={styles.floatingOrb}></div>
            <div className={styles.floatingOrb}></div>
            <div className={styles.floatingOrb}></div>
          </div>
        </div>
      </div>
    </section>
  );
} 