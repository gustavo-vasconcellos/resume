import { useIsVisible } from "../../hooks/useIsVisible.tsx";

interface Props {
  label: string;
  description: string;
  delay?: number;
}

export const ExpertiseCard = ({ label, description, delay = 0 }: Props) => {
  const isVisible = useIsVisible(delay);

  return (
    <div
      key={label}
      className={`${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } card bg-base-200 shadow-md hover:shadow-lg transition-all duration-300`}
    >
      <div className="card-body">
        <h3 className="card-title text-primary">{label}</h3>
        <p className="text-sm opacity-80">{description}</p>
      </div>
    </div>
  );
};
