import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from '@/styles/IntroAnimation.module.css';

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [isVisible, setIsVisible] = useState(true);

  // Fixed particle positions to avoid hydration mismatch
  const particlePositions = [
    { x: -50, y: -30, targetX: -120, targetY: -80 },
    { x: 60, y: 20, targetX: 150, targetY: 60 },
    { x: -20, y: 80, targetX: -90, targetY: 180 },
    { x: 40, y: -60, targetX: 110, targetY: -140 },
    { x: -80, y: 10, targetX: -170, targetY: 40 },
    { x: 30, y: 70, targetX: 90, targetY: 160 }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Wait for exit animation to complete
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className={styles.introContainer}
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -20,
            transition: {
              duration: 0.8,
              ease: [0.4, 0.0, 0.2, 1]
            }
          }}
        >
          {/* Background */}
          <motion.div
            className={styles.background}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: [0.4, 0.0, 0.2, 1]
            }}
          />

          {/* Main Logo/Text */}
          <motion.div
            className={styles.logoContainer}
            initial={{ 
              scale: 0.9,
              opacity: 0 
            }}
            animate={{ 
              scale: [0.9, 1.2, 1.0],
              opacity: 1 
            }}
            transition={{
              scale: {
                duration: 2,
                ease: [0.34, 1.56, 0.64, 1],
                times: [0, 0.6, 1]
              },
              opacity: {
                duration: 1,
                ease: [0.4, 0.0, 0.2, 1]
              }
            }}
          >
            <motion.div
              className={styles.logoText}
              animate={{
                filter: [
                  "drop-shadow(0 0 20px rgba(78, 205, 196, 0.8))",
                  "drop-shadow(0 0 30px rgba(78, 205, 196, 0.6))",
                  "drop-shadow(0 0 20px rgba(78, 205, 196, 0.8))"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Zafer.dev
            </motion.div>
            
            {/* Subtle glow ring */}
            <motion.div
              className={styles.glowRing}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Particle effects */}
          <div className={styles.particles}>
            {particlePositions.map((pos, i) => (
              <motion.div
                key={i}
                className={styles.particle}
                initial={{ 
                  opacity: 0,
                  scale: 0,
                  x: pos.x,
                  y: pos.y
                }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: pos.targetX,
                  y: pos.targetY
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 