'use client';

import { useEffect, useRef, useState } from 'react';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
};

const VIEWPORT_OFFSET_RATIO = 0.92;
const VISIBILITY_FALLBACK_MS = 1400;

export function Reveal({ children, className = '', delayMs = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let observer: IntersectionObserver | null = null;
    let frameId = 0;

    const reveal = () => {
      setIsVisible(true);
      observer?.disconnect();
      observer = null;
    };

    const isAlreadyInViewport = () => {
      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      return rect.top <= viewportHeight * VIEWPORT_OFFSET_RATIO && rect.bottom >= 0;
    };

    frameId = window.requestAnimationFrame(() => {
      if (isAlreadyInViewport()) {
        reveal();
        return;
      }

      if (!('IntersectionObserver' in window)) {
        reveal();
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            reveal();
          }
        },
        {
          threshold: 0.16,
          rootMargin: '0px 0px -8% 0px',
        }
      );

      observer.observe(node);
    });

    const fallbackTimer = window.setTimeout(() => {
      reveal();
    }, VISIBILITY_FALLBACK_MS);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(fallbackTimer);
      observer?.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
