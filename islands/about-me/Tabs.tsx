import { useSignal } from "@preact/signals";
import { useCallback } from "preact/hooks";
import { ExpertiseCard } from "./ExpertiseCard.tsx";
import { SkillBadge } from "./SkillBadge.tsx";

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Semantic HTML (HTML5)",
  "CSS3",
  "Deno",
  "Fresh",
  "NodeJS",
  "GraphQL",
  "PostgreSQL",
  "MySQL",
  "VTEX IO",
  "Shopify",
  "VNDA",
  "Google Cloud Computing (GCP)",
  "Deco.cx",
  "DOMQL",
  "Docker",
  "Kubernetes (K8S)",
  "gRPC",
  "YAML",
  "REST API Development & Usage",
  "Express",
  "Nest.js",
  "Cypress",
  "Jest",
  "Vite",
  "Webpack",
  "Rollup",
  "React Testing Library",
  "SASS",
  "LESS",
  "Stylus",
] as const;

const expertises = [
  {
    area: "Advanced Frontend Architecture",
    description:
      "Expert in React, TypeScript, and modern web performance and acessibility optimization with microfrontend systems.",
  },
  {
    area: "Emerging Technology Mastery",
    description:
      "Early adopter of cutting-edge platforms including VTEX IO, Deco.cx, and DOMQL frameworks with fast evolution and grow.",
  },
  {
    area: "Full-Stack System Design",
    description:
      "Database design and API architecture and development expertise with complex integration experience in NodeJS environments.",
  },
  {
    area: "Technical Leadership",
    description:
      "Component system architect creating reusable solutions that accelerate team velocity.",
  },
] as const;

export function Tabs() {
  const activeTab = useSignal("skills");

  const handleClick = useCallback((ev: MouseEvent) => {
    const target = (ev.target || ev.currentTarget) as HTMLButtonElement;
    activeTab.value = target.dataset.tab!;
  }, []);

  return (
    <>
      <div className="tabs sm:tabs-lg tabs-sm tabs-box w-fit mx-auto mb-8 gap-2">
        <button
          type="button"
          className={`tab transition-colors duration-300 ${
            activeTab.value === "skills" ? "tab-active" : ""
          }`}
          data-tab="skills"
          onClick={handleClick}
        >
          Technical Skills
        </button>
        <button
          type="button"
          className={`tab transition-colors duration-300 ${
            activeTab.value === "expertise" ? "tab-active" : ""
          }`}
          data-tab="expertise"
          onClick={handleClick}
        >
          Expertises
        </button>
      </div>
      <div>
        {activeTab.value === "skills" && (
          <div className="flex flex-row gap-2 flex-wrap justify-center">
            {skills.map((skill, index) => (
              <SkillBadge
                key={skill}
                skill={skill}
                delay={Math.min(1000, index * 100)}
              />
            ))}
          </div>
        )}
        {activeTab.value === "expertise" && (
          <div className="grid md:grid-cols-2 gap-6">
            {expertises.map(({ area, description }, index) => (
              <ExpertiseCard
                label={area}
                description={description}
                delay={index * 100}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
