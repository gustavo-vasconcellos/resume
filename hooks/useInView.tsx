import { useSignal } from "@preact/signals";
import { useRef, useEffect, useMemo } from "preact/hooks";

let timer = 0;

export function useInView<T extends HTMLElement>(threshold = 0.1, delay = 0) {
  const isInView = useSignal(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    if (isInView.value) return
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        timer = setTimeout(() => {
          if (isInView.value) return observer.disconnect();

          isInView.value = entry.isIntersecting;
        }, delay);
        return () => clearTimeout(timer);
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, delay]);

  return useMemo(
    () => [ref, isInView] as const,
    [ref.current, isInView.peek()]
  );
}
