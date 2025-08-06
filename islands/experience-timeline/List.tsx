import { useMemo } from "preact/hooks";
import {
  CompanyBadge,
  CompanyType,
} from "../../components/experience-timeline/CompanyBadge.tsx";
import { useInView } from "../../hooks/useInView.tsx";
import { selectedFilter } from "./FilterButton.tsx";

interface Experience {
  position: string;
  company: string;
  period: string;
  periodTime: string;
  companyType: CompanyType;
  achievements: string[];
  techStack: string[];
}

export const experiences = [
  {
    position: "Senior Front-end Engineer",
    company: "Symbols",
    period: "Dec 2024 - May 2025",
    periodTime: "6 months",
    companyType: "startup",
    achievements: [
      "Rapidly mastered proprietary low-code framework (DOMQL) for building dynamic web interfaces.",
      "Promoted to Technical Lead based on the ability to solve the most challenging technical problems.",
      "Established development patterns and architectural standards for team adoption of complex DOMQL concepts.",
      "Successfully delivered features with minimal design specifications.",
    ],
    techStack: ["DOMQL", "JavaScript", "CSS", "Design Systems"],
  },
  {
    position: "Senior Front-end Engineer",
    company: "Revvable",
    period: "Oct 2024 - Jun 2025",
    periodTime: "9 months",
    companyType: "startup",
    achievements: [
      "Delivered high-complexity frontend features for an established CRM serving thousands of Powersports dealers.",
      "Successfully accelerated development of critical CRM functionalities that significantly enhanced user experience and commercial viability.",
      "Built features requiring deep integration with existing customer workflows, email systems, and business process automation.",
      "Delivered high-quality solutions working autonomously while collaborating effectively with backend developers and technical leadership.",
    ],
    techStack: [
      "TypeScript",
      "Google Cloud",
      "MySQL",
      "React",
      "Redux",
      "React Hook Form",
      "Formik",
      "yup",
      "zod",
      "Docker",
      "Material UI (MUI)",
      "Performance Optimization",
      "gRPC",
    ],
  },
  {
    position: "Principal Engineer",
    company: "Carcará",
    period: "May 2024 - Sep 2024",
    periodTime: "5 months",
    companyType: "founder",
    achievements: [
      "Built and led a 9-developer technical team from the ground up.",
      "Managed sales, architecture decisions, team mentoring, project delivery, and organizational development.",
      "Architected high-performance web solutions using Preact, Deno, Tailwind CSS, and Fresh framework, achieving dramatic PageSpeed improvements.",
      "Led technical delivery for renowned brands including AL's Sporting Goods, Reserva, Farm Rio, Granado, Electrolux, and Fila.",
      "Solved complex React/Preact compatibility issues by building custom solutions from scratch.",
      "Created a Discord bot for streamlined code review communication and developed comprehensive written documentation for implementation standards.",
      "Successfully guided team towards autonomous operation while maintaining exceptional technical standards and consistent client satisfaction across enterprise-level projects.",
    ],
    techStack: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Preact",
      "Performance Optimization",
      "Cypress",
      "E-commerce",
      "Deno",
      "Integration Architecture",
      "Deco.cx",
      "Fresh",
      "Team Leadership",
    ],
  },
  {
    position: "Founder & Principal Engineer",
    company: "MVProjects",
    period: "Apr 2023 - May 2024",
    periodTime: "1 year 2 months",
    companyType: "founder",
    achievements: [
      "Delivered 8 strategic projects, including complex implementations and designs for Bolovo and Niivo Bank",
      "Successfully identified and capitalized on growing SMB demand for specialized Deco.cx development services",
      "Exceptional delivery quality led directly to an invitation to create the Carcará team, a subsidiary company of Deco.cx",
    ],
    techStack: [
      "Deco.cx",
      "TypeScript",
      "Content Management System (CMS)",
      "Headless CMS",
      "Tailwind CSS",
      "Preact",
      "E-commerce",
      "Deno",
      "Integration Architecture",
      "PostgreSQL",
      "Supabase",
    ],
  },
  {
    position: "Specialist Teacher",
    company: "EBAC - British School of Creative Arts and Technology",
    period: "Mar 2022 - May 2023",
    periodTime: "1 year 3 months",
    companyType: "education",
    achievements: [
      "Designed and developed comprehensive 'React Course: From Zero to Pro' - 120-hour curriculum covering complete web development journey from fundamentals to advanced concepts",
      "Structured learning path including JavaScript, TypeScript, Git, accessibility, functional programming, testing, and ReactJS",
      "Created progressive learning experience starting with engaging, memorable content and advancing to complex team-based exercises simulating real-world company collaboration",
      "Optimized delivery processes, enhancing course engagement and streamlining access to learning materials for students",
      "Designed final exercises to demonstrate collaborative skills essential for professional development teams",
    ],
    techStack: [
      "JavaScript",
      "TypeScript",
      "React",
      "Git",
      "Accessibility",
      "Performance",
      "Functional Programming",
      "Jest",
      "Unit Test",
      "REST API",
    ],
  },
  {
    position: "Fullstack Engineer",
    company: "ArcTouch",
    period: "Oct 2021 - May 2024",
    periodTime: "2 years 8 months",
    companyType: "enterprise",
    achievements: [
      "Consistently delivered features 70% faster than team estimates through architectural understanding in ABC News Internal Tools project by identifying and leveraging the existing project components and generic abstractions",
      "Contributed to a sophisticated single-spa managed microfrontend ecosystem with multiple teams working on interconnected frontend modules in HP project",
      "Developed comprehensive Storybook documentation that reduced international team onboarding time and enabled seamless knowledge transfer to HP's development team in India",
      "Built responsive landing pages with complex animations and interactive features for ML-powered products for Franks RedHot promotional page for SuperBowl",
      "Successfully navigated language barriers and cultural differences in technical discovery sessions and code reviews, enhancing English proficiency specifically for technical communication, leading to increased international project opportunities and career advancement within the company",
    ],
    techStack: [
      "JavaScript",
      "TypeScript",
      "React",
      "Single Page Applications (SPAs)",
      "CSS3",
      "Storybook",
      "Jest",
      "Responsive Design",
      "Styled Components",
      "Microfrontends",
      "React Testing Library",
      "Developer Mentoring",
      "React Hook Form",
      "single-spa",
    ],
  },
  {
    position: "Guest Technical Instructor",
    company: "FATEC Bragança Paulista",
    period: "Jul 2019 - Jun 2021",
    periodTime: "2 years",
    companyType: "education",
    achievements: [
      "Led targeted Web Development workshops for university IT students through ACCT's strategic hiring partnership with FATEC",
      "Achieved 30% hiring success rate for students trained in workshops",
      "30% of workshop participants achieved professional competency level for immediate hiring",
      "Successfully translated complex enterprise development practices into accessible educational content",
    ],
    techStack: [
      "JavaScript",
      "TypeScript",
      "MongoDb",
      "React",
      "Git",
      "Developer Mentoring",
    ],
  },
  {
    position: "Fullstack Engineer",
    company: "ACCT Consulting & Technology",
    period: "Mar 2017 - Oct 2021",
    periodTime: "4 years 8 months",
    companyType: "enterprise",
    achievements: [
      "Rapid progression from intern to Senior in 4 years",
      "Successfully transitioned from traditional web development to React, TypeScript and GraphQL architecture",
      "Delivered VTEX IO applications for major clients including F64, Carrefour, Tok&Stok, Samsung, McDonalds (POC) and eMAG Marketplace Integration",
      "Led a team of 8 developers on the Carrefour Market & Shopping Project, scaling to 12",
      "Initiated VTEX IO deployment automation using GitLab, YAML configurations and Docker, improving the deployment speed in 50% and reducing the human-errors chances",
    ],
    techStack: [
      "JavaScript",
      "TypeScript",
      "Google Analytics",
      "React",
      "Project Management",
      "Team Leadership",
      "Unit Testing",
      "Docker",
      "Git",
      "GitLab",
      "GraphQL",
      "Jira",
      "Jest",
      "E-commerce",
      "CI-CD",
      "VTEX.js",
      "Developer Mentoring",
      "YAML",
      "Google Ads",
    ],
  },
] as Experience[];

export function ExperienceTimelineList() {
  const filteredExperiences = useMemo<Experience[]>(() => {
    if (selectedFilter.value === "all") return experiences;

    return experiences.filter(
      (exp) => exp.companyType === selectedFilter.value
    );
  }, [selectedFilter.value]);

  return (
    <>
      {filteredExperiences.map((exp, index, arr) => (
        <TimelineItem
          key={`${exp.company}-${exp.period}`}
          position={exp.position}
          company={exp.company}
          period={exp.period}
          periodTime={exp.periodTime}
          achievements={exp.achievements}
          techStack={exp.techStack}
          companyType={exp.companyType}
          isFirst={index === 0}
          isLast={index === arr.length - 1}
        />
      ))}
    </>
  );
}

interface TimelineItemProps {
  position: string;
  company: string;
  period: string;
  periodTime: string;
  achievements: string[];
  techStack: string[];
  companyType: CompanyType;
  isFirst?: boolean;
  isLast?: boolean;
}

const TimelineItem = ({
  position,
  company,
  period,
  periodTime,
  achievements,
  techStack,
  companyType,
  isFirst = false,
  isLast = false,
}: TimelineItemProps) => {
  const [ref, inView] = useInView<HTMLLIElement>(0.01);

  const [otherAchievements, firstAchievements] = useMemo(
    () => [achievements.toSpliced(0, 2), achievements.toSpliced(2)],
    [achievements]
  );

  return (
    <li
      ref={ref}
      className={`carousel-item transition-all duration-700 transform grid-rows-[auto_auto_1fr]! ${
        inView.value ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      {!isFirst && <hr class="bg-primary" />}
      <div class="timeline-start mb-4 self-baseline! block badge badge-ghost text-md font-medium py-1 px-3 h-auto w-auto rounded-lg text-center">
        <p class="whitespace-pre">{period}</p>
        <p class="text-xs">({periodTime})</p>
      </div>
      <div class="timeline-middle">
        <div class="w-4 h-4 bg-primary rounded-full m-1" />
      </div>
      <div class="timeline-end mt-4">
        <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 sm:max-w-md max-w-full w-[90vw]">
          <div class="card-body">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="card-title text-lg">{position}</h3>
                <p class="flex justify-start items-start gap-2 mt-1 h-10">
                  <span class="font-semibold text-primary">{company}</span>
                  <CompanyBadge type={companyType} />
                </p>
              </div>
            </div>
            <div class="space-y-2 mb-4 collapse p-0">
              <input
                type="checkbox"
                class="peer"
                id={company.replace(/ /g, "")}
              />
              <div class="collapse-title p-0 m-0 cursor-auto!">
                {firstAchievements.map((achievement, index) => (
                  <div key={index} class="flex items-start gap-2">
                    <div class="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p class="text-sm text-base-content/80">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
              <div class="collapse-content p-0 m-0">
                {otherAchievements.map((achievement, index) => (
                  <div key={index} class="flex items-start gap-2">
                    <div class="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p class="text-sm text-base-content/80">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
              <label
                class="text-xs text-right text-primary hover:text-secondary transition-colors duration-200 font-bold cursor-pointer
                  after:content-['See_more'] peer-checked:after:content-['See_less']"
                for={company.replace(/ /g, "")}
              ></label>
            </div>
            <div class="flex flex-wrap gap-1">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  class="badge badge-secondary hover:badge-primary transition-colors duration-200 badge-outline badge-sm py-0.5 px-2 font-medium h-auto cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {!isLast && <hr class="bg-primary" />}
    </li>
  );
};
