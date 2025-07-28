import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export function useIsVisible() {
  const isVisible = useSignal(false);

  useEffect(() => {
    isVisible.value = true;
  }, []);

  return isVisible.value;
}
