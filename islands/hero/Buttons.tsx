import { useCallback } from "preact/hooks";

export function HeroButtons() {
  const scrollTo = useCallback((ev: MouseEvent) => {
    const target = (ev.target || ev.currentTarget) as HTMLButtonElement;
    document
      .getElementById(target.dataset.href!)
      ?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <button
        type="button"
        data-href="projects"
        onClick={scrollTo}
        className="btn btn-lg group relative border-0 bg-gradient-to-r from-secondary to-accent text-accent-content/80 font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
      >
        <span className="relative z-10 flex items-center gap-2">
          View Projects
          <svg
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
      <button
        type="button"
        data-href="contact"
        onClick={scrollTo}
        className="btn btn-lg group border-2 border-white/20 text-base-content font-semibold rounded-full backdrop-blur-sm hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-300 hover:scale-105"
      >
        <span className="flex items-center gap-2">
          Hire Me
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </span>
      </button>
    </>
  );
}
