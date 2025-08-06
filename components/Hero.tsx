import { HeroContent } from "../islands/hero/Content.tsx";
import { MouseFollower } from "../islands/MouseFollower.tsx";

const Hero = () => {
  return (
    <section class="relative min-h-screen bg-gradient-to-br pb-8 from-base-300 via-primary to-base-300 overflow-hidden flex items-center">
      <MouseFollower />

      <div class="container max-w-7xl mx-auto px-6 z-10">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
          <HeroContent />
        </div>
      </div>
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
