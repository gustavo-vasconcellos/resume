import { Counter } from "../../islands/Counter.tsx";

export const YearsCard = () => {
  return (
    <div class="flex max-md:w-full overflow-hidden flex-row card text-base-300 bg-gradient-to-br from-primary to-secondary border-0 shadow-none">
      <div class="flex flex-1 flex-col items-start justify-center text-left relative">
        <h2 class="text-[300px] leading-[230px] font-black mb-2 -translate-x-8 tabular-nums">
          <Counter end={8} duration={1000} />
        </h2>
        <p class="text-lg font-semibold">Years of Experience</p>
      </div>
      <p
        class="opacity-90 tracking-tighter font-extrabold text-3xl translate-x-2 -mt-0.5"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        GUSTAVO VASCONCELLOS
      </p>
    </div>
  );
};
