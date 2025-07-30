import { useSignal } from "@preact/signals";
import { useInView } from "../hooks/useInView.tsx";
import { useEffect } from "preact/hooks";

interface Props {
  end: number;
  duration?: number;
  suffix?: string;
}

export const Counter = ({ end, duration = 2000, suffix = "" }: Props) => {
  const count = useSignal(0);
  const [ref, isInView] = useInView<HTMLSpanElement>();

  useEffect(() => {
    let startTime: number | null = null;

    if (!isInView.value) return;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;

      const progress = Math.min((currentTime - startTime) / duration, 1);
      count.value = Math.floor(progress * end);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView.value, end, duration]);

  return (
    <span ref={ref}>
      {count.value}
      {suffix}
    </span>
  );
};
