'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function Section1Accueil() {
  const images = useMemo(
    () => [
      '/chaloupeGrandAngle.avif',
      '/section1AccueilImg2.avif',
      '/section1AccueilImg3.avif',
      '/pontNoyalo.avif',
    ],
    [],
  );

  const HOLD_MS = 2500; // 2.5s fixe
  const TRANSITION_MS = 700; // flou + slide
  const TOTAL_MS = HOLD_MS + TRANSITION_MS;

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const timerRef = useRef(null);

  const nextIndex = (i) => (i + 1) % images.length;
  const prevIndex = (i) => (i - 1 + images.length) % images.length;

  const goTo = (target) => {
    setDirection(target > index ? 1 : -1);
    setIndex(target);
  };

  const goNext = () => {
    setDirection(1);
    setIndex((i) => nextIndex(i));
  };

  const goPrev = () => {
    setDirection(-1);
    setIndex((i) => prevIndex(i));
  };

  // autoplay propre (reset quand index change)
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(goNext, TOTAL_MS);
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const currentSrc = images[index];

  const variants = {
    enter: (dir) => ({
      x: dir === 1 ? '100%' : '-100%',
      opacity: 1,
      filter: 'blur(0px)',
    }),
    center: {
      x: '0%',
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        x: { duration: TRANSITION_MS / 1000, ease: 'easeInOut' },
      },
    },
    exit: (dir) => ({
      x: dir === 1 ? '-100%' : '100%',
      opacity: 1,
      filter: 'blur(8px)',
      transition: {
        x: { duration: TRANSITION_MS / 1000, ease: 'easeInOut' },
      },
    }),
  };

  return (
    <section className="w-full h-[500px] relative overflow-hidden mt-8">
      {/* Stage */}
      <div className="absolute inset-0">
        <AnimatePresence custom={direction} mode="sync">
          <motion.img
            key={currentSrc}
            src={currentSrc}
            alt={`slide-${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
          />
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Section1Accueil;
