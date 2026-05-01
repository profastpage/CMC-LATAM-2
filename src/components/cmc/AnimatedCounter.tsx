"use client";

import { useState, useEffect, useRef } from "react";

interface AnimatedCounterProps {
  target: string;
  duration?: number;
}

export default function AnimatedCounter({
  target,
  duration = 2000,
}: AnimatedCounterProps) {
  const [display, setDisplay] = useState("0");
  const startedRef = useRef(false);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;

          const numericMatch = target.match(/[\d,.]+/);
          if (!numericMatch) {
            setDisplay(target);
            return;
          }

          const numericTarget = parseFloat(
            numericMatch[0].replace(/,/g, "")
          );
          const prefix = target.substring(
            0,
            target.indexOf(numericMatch[0])
          );
          const suffix = target.substring(
            target.indexOf(numericMatch[0]) + numericMatch[0].length
          );
          const hasComma = numericMatch[0].includes(",");
          const hasDecimal = numericMatch[0].includes(".");

          if (target.includes("-")) {
            const rangeMatch = target.match(/(\d+)-(\d+)/);
            if (rangeMatch) {
              const start = parseInt(rangeMatch[1]);
              const end = parseInt(rangeMatch[2]);
              const rangeSuffix = target.replace(/\d+-\d+/, "");
              let current = 0;
              const steps = 40;
              const increment = (start + end) / 2 / steps;

              const timer = setInterval(() => {
                current += increment;
                if (current >= start) {
                  setDisplay(`${start}-${end}${rangeSuffix}`);
                  clearInterval(timer);
                } else {
                  setDisplay(
                    `${Math.round(current)}-${Math.round(current + (end - start))}${rangeSuffix}`
                  );
                }
              }, duration / steps);
              return;
            }
          }

          const startTime = performance.now();
          let animFrame: number;

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * numericTarget;

            let formatted: string;
            if (hasDecimal) {
              formatted = current.toFixed(
                numericMatch[0].split(".")[1].length
              );
            } else if (hasComma) {
              formatted = Math.round(current).toLocaleString();
            } else {
              formatted = Math.round(current).toString();
            }

            setDisplay(`${prefix}${formatted}${suffix}`);

            if (progress < 1) {
              animFrame = requestAnimationFrame(animate);
            }
          };

          animFrame = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={spanRef}>{display}</span>;
}
