import { useIsVisible } from "../../hooks/useIsVisible.tsx";
import { HeroButtons } from "./Buttons.tsx";

const projects = [
  { name: "React", logo: "⚛️" },
  { name: "Node.js", logo: "🟢" },
  { name: "Next.js", logo: "▲" },
  { name: "TypeScript", logo: "🔷" },
  { name: "MongoDB", logo: "🍃" },
];

export function HeroContent() {
  const isVisible = useIsVisible();

  return (
    <>
      <div
        class={`flex-1 flex flex-col gap-8 pt-14 text-left transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <div>
          <div class="text-base-content/80 text-lg mb-2 animate-fade-in-up delay-300">
            Hello
          </div>
          <h1 class="text-6xl lg:text-7xl font-bold mb-4">
            <span class="text-base-content animate-fade-in-up delay-500">
              I'm{" "}
            </span>
            <span class="bg-gradient-to-r text-shadow-xs from-secondary via-accent/80 to-secondary bg-clip-text text-transparent animate-fade-in-up delay-700 inline-block hover:scale-105 transition-transform duration-300">
              Gustavo,
            </span>
          </h1>
          <h2 class="text-4xl lg:text-5xl font-bold text-base-content/90 animate-fade-in-up delay-900">
            Fullstack Software Engineer
          </h2>
        </div>
        <div class="flex flex-wrap gap-4 animate-fade-in-up delay-1100">
          <HeroButtons />
        </div>
        <div class="flex items-center gap-4">
          <div class="text-base-content/80 text-sm tracking-wider">
            — PROJECTS
          </div>
          <div class="flex items-center gap-2">
            <span class="text-4xl font-bold text-shadow-xs bg-gradient-to-r from-purple-400 to-accent bg-clip-text text-transparent">
              50+
            </span>
            <div class="flex -space-x-2">
              {projects.map((project, index) => (
                <div
                  key={index}
                  class={`w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-base-content text-xs font-semibold shadow-lg transform transition-all duration-500 hover:scale-110 hover:z-10`}
                  style={{ animationDelay: `${index * 200}ms` }}
                  title={project.name}
                >
                  {project.logo}
                </div>
              ))}
              <div class="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-base-content text-xs shadow-lg">
                +
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class={`flex-1 relative transition-all duration-1200 delay-500 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
        }`}
      >
        <div class="relative">
          <div class="relative w-80 h-96 mx-auto">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-3xl blur-sm animate-pulse"></div>
            <div class="absolute inset-1 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl"></div>
            <div class="absolute overflow-hidden inset-4 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <img
                src="/images/profile.png"
                width={288}
                height={352}
                class="h-96 object-cover"
              />
            </div>
            <div class="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center text-base-content font-bold shadow-lg animate-bounce">
              JS
            </div>
            <div class="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-base-content font-bold shadow-lg animate-bounce">
              TS
            </div>
          </div>
          <div class="absolute inset-0 animate-spin-slow">
            <div class="absolute top-8 left-8 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
            <div class="absolute bottom-8 right-8 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </>
  );
}
