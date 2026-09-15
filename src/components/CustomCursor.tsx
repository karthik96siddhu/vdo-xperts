import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only activate on non-touch desktop screens
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice || window.innerWidth < 1024) {
      return;
    }

    setIsVisible(true);
    document.body.classList.add('custom-cursor-enabled');

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check element under cursor for custom data-cursor attributes
      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest('[data-cursor]') as HTMLElement | null;

      if (cursorTarget) {
        const text = cursorTarget.getAttribute('data-cursor') || '';
        setCursorText(text);
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.classList.remove('custom-cursor-enabled');
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
      style={{
        x: smoothX,
        y: smoothY,
      }}
    >
      <motion.div
        animate={{
          scale: isHovered ? 1 : 0.4,
          width: isHovered ? (cursorText ? 'auto' : 48) : 24,
          height: isHovered ? (cursorText ? 'auto' : 48) : 24,
          paddingLeft: cursorText ? 16 : 0,
          paddingRight: cursorText ? 16 : 0,
          paddingTop: cursorText ? 8 : 0,
          paddingBottom: cursorText ? 8 : 0,
          backgroundColor: isHovered ? 'rgba(229, 9, 76, 0.95)' : 'rgba(255, 42, 109, 0.75)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className="rounded-full flex items-center justify-center shadow-lg shadow-[#E5094C]/40 backdrop-blur-xs text-white font-bold text-[11px] uppercase tracking-wider whitespace-nowrap"
      >
        {cursorText && (
          <span className="font-heading tracking-widest text-white">{cursorText}</span>
        )}
      </motion.div>
    </motion.div>
  );
};
