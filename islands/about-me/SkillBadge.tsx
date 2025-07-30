import { useIsVisible } from "../../hooks/useIsVisible.tsx";

interface Props {
  skill: string;
  delay?: number;
}

export const SkillBadge = ({ skill, delay = 0 }: Props) => {
  const isVisible = useIsVisible(delay);

  return (
    <div
      className={`transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <span className="kbd badge badge-primary badge-soft badge-lg h-auto text-center hover:badge-secondary transition-colors duration-300 cursor-default">
        {skill}
      </span>
    </div>
  );
};
