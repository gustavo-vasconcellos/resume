import { HeroContent } from "../islands/hero/Content.tsx";
import { MouseFollower } from "../islands/MouseFollower.tsx";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-base-300 via-primary to-base-300 overflow-hidden flex items-center">
      <MouseFollower />

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <HeroContent />
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
