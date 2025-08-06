import { useInView } from "../../hooks/useInView.tsx";
import { Counter } from "../Counter.tsx";

interface Props {
  number: number;
  label: string;
  delay?: number;
}

export const StatCard = ({ number, label, delay = 0 }: Props) => {
  const [ref, isInView] = useInView<HTMLDivElement>(1, delay);

  return (
    <div
      ref={ref}
      className={`stat bg-base-100 rounded-box border-0! shadow-lg hover:shadow-xl transition-all duration-500 transform ${
        isInView.value ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } hover:scale-105`}
    >
      <div class="stat-value text-primary tabular-nums">
        <Counter end={number} suffix="+" />
      </div>
      <div class="stat-title">{label}</div>
      <div class="stat-desc">and counting...</div>
    </div>
  );
};
