import Header from "../islands/Header.tsx";
import Hero from "../components/Hero.tsx";
import AboutMe from "../components/about-me/AboutMe.tsx";
import ExperienceTimeline from "../components/experience-timeline/ExperienceTimeline.tsx";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <ExperienceTimeline />
    </>
  );
}
