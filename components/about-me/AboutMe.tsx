import { StatCard } from "../../islands/about-me/StatCard.tsx";
import { Tabs } from "../../islands/about-me/Tabs.tsx";
import { YearsCard } from "./YearsCard.tsx";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-base-300 p-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center md:mb-16 mb-6">
          <div className="badge badge-secondary badge-lg mb-4">About Me</div>
          <h2 className="md:text-5xl text-3xl font-black mb-4">
            Who is{" "}
            <strong className="text-primary">Gustavo Vasconcellos</strong>?
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start mb-16">
          <div className="lg:col-span-2 gap-8 flex flex-col">
            <p className="text-base leading-relaxed max-md:text-center">
              I excel at{" "}
              <strong className="text-secondary">
                technical leadership through architecture
              </strong>{" "}
              - creating reusable systems that accelerate team velocity and
              leading by example in code quality. I've guided engineering teams
              of up to 12 developers through complex technical challenges,
              designed component architectures that
              <strong className="text-secondary">
                {" "}
                reduced development time by 70%
              </strong>
              , and built systems processing millions of users.
            </p>
            <p className="text-base leading-relaxed max-md:text-center">
              My approach combines deep technical expertise with mentorship - I
              solve the hardest technical problems while empowering other
              engineers to master complex systems and scale their impact.
            </p>
            <div class="lg:hidden block text-center">
              <button
                type="button"
                className="btn btn-primary btn-lg rounded-full gap-2 hover:btn-secondary transition-all duration-300 group"
              >
                <img
                  src="/icons/download.svg"
                  class="h-5 w-5 group-hover:translate-y-[-2px] transition-transform"
                  alt="download icon"
                  width={20}
                  height={20}
                />
                Download Resume
                <img
                  src="/icons/arrow-right.svg"
                  className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                  alt="arrow right icon"
                  width={16}
                  height={16}
                />
              </button>
            </div>
            <div className="justify-center sm:hidden flex">
              <YearsCard />
            </div>
            <div class="flex flex-nowrap gap-4">
              <div className="stats stats-vertical lg:stats-horizontal w-full gap-3 overflow-visible!">
                <StatCard number={600} label="Projects Completed" delay={200} />
                <StatCard number={50} label="Industry Covered" delay={400} />
                <StatCard number={12} label="Team Members Led" delay={600} />
              </div>
              <div className="max-sm:hidden lg:hidden flex">
                <YearsCard />
              </div>
            </div>
            <div class="lg:block hidden">
              <button
                type="button"
                className="btn btn-primary btn-lg rounded-full gap-2 hover:btn-secondary transition-all duration-300 group"
              >
                <img
                  src="/icons/download.svg"
                  class="h-5 w-5 group-hover:translate-y-[-2px] transition-transform"
                  alt="download icon"
                  width={20}
                  height={20}
                />
                Download Resume
                <img
                  src="/icons/arrow-right.svg"
                  className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                  alt="arrow right icon"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </div>
          <div className="justify-end hidden lg:flex">
            <YearsCard />
          </div>
        </div>

        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body">
            <Tabs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
