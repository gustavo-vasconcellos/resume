import { CarouselButtons } from "../../islands/experience-timeline/CarouselButtons.tsx";
import { ExperienceTimelineFilterButton } from "../../islands/experience-timeline/FilterButton.tsx";
import {
  experiences,
  ExperienceTimelineList,
} from "../../islands/experience-timeline/List.tsx";

const filters = [
  { key: "all", label: "All Experience", count: experiences.length },
  {
    key: "founder",
    label: "Founder",
    count: experiences.filter((e) => e.companyType === "founder").length,
  },
  {
    key: "enterprise",
    label: "Enterprise",
    count: experiences.filter((e) => e.companyType === "enterprise").length,
  },
  {
    key: "startup",
    label: "Startups",
    count: experiences.filter((e) => e.companyType === "startup").length,
  },
  {
    key: "education",
    label: "Education",
    count: experiences.filter((e) => e.companyType === "education").length,
  },
] as const;

const ExperienceTimeline = () => {
  return (
    <div id="career" class="min-h-screen bg-gradient-to-br from-base-200 to-base-300 py-8">
      <div class="container mx-auto max-w-7xl text-center mb-16">
        <div class="badge badge-secondary badge-lg mb-4">
          Career Journey
        </div>
        <h1 class="text-5xl font-black mb-4">
          My <span class="text-primary">Work Experience</span>
        </h1>
        <p class="text-xl text-base-content/70 max-w-2xl mx-auto">
          8+ years of rapid growth from intern to technical leader, founding
          companies and delivering enterprise solutions
        </p>
      </div>
      <div class="container mx-auto max-w-7xl sm:flex hidden justify-center mb-12">
        <div class="join">
          {filters.map((filter) => (
            <ExperienceTimelineFilterButton
              key={filter.key}
              value={filter.key}
              label={filter.label}
              count={filter.count}
            />
          ))}
        </div>
      </div>
      <div class="relative" id="timeline">
        <div class="sm:block hidden">
          <CarouselButtons rootId="timeline" />
        </div>
        <div
          data-slider
          class="timeline timeline-start timeline-horizontal carousel carousel-center pb-6 2xl:px-[10%] xl:px-[5%] sm:px-8 px-4 overflow-y-hidden"
        >
          <ExperienceTimelineList />
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
