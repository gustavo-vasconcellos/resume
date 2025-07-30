import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export function useIsVisible(delay = 0) {
  const isVisible = useSignal(false);

  useEffect(() => {
    const timer = setTimeout(() => isVisible.value = true, delay);
    return () => clearTimeout(timer);
    
  }, []);

  return isVisible.value;
}
